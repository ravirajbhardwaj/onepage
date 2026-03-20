import { getDb } from '$lib/server/db/index';
import { verifyToken, signAccessToken } from '$lib/server/jwt';
import { user } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { building } from '$app/environment';

export async function handle({ event, resolve }) {
	if (building) return resolve(event);

	// Make D1 DB available
	if (event.platform?.env?.DB) {
		event.locals.db = getDb(event.platform.env.DB);
	} else {
		console.warn(
			'DB not found in event.platform.env. This is expected during some local build steps, but not during standard runtime. Continuing...'
		);
	}

	event.locals.user = null;

	const accessToken = event.cookies.get('access_token');
	const refreshToken = event.cookies.get('refresh_token');

	if (accessToken) {
		const payload = await verifyToken(accessToken);
		if (payload && event.locals.db) {
			const [dbUser] = await event.locals.db.select().from(user).where(eq(user.id, payload.id));
			if (dbUser) {
				event.locals.user = { id: dbUser.id, email: dbUser.email, isPaid: dbUser.isPaid };
			}
		}
	}

	// Refresh flow
	if (!event.locals.user && refreshToken) {
		const payload = await verifyToken(refreshToken);
		if (payload && event.locals.db) {
			const [dbUser] = await event.locals.db.select().from(user).where(eq(user.id, payload.id));
			if (dbUser) {
				// Valid refresh token -> issue new access token
				event.locals.user = { id: dbUser.id, email: dbUser.email, isPaid: dbUser.isPaid };
				const newAccess = await signAccessToken(event.locals.user);

				event.cookies.set('access_token', newAccess, {
					path: '/',
					httpOnly: true,
					secure: process.env.NODE_ENV === 'production',
					maxAge: 60 * 60 * 2 // 2 hours
				});
			}
		}
	}

	return resolve(event);
}
