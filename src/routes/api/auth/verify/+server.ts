import { redirect } from '@sveltejs/kit';
import { user, magicLink } from '$lib/server/db/schema';
import { signAccessToken, signRefreshToken } from '$lib/server/jwt';
import { eq } from 'drizzle-orm';

export async function GET({ url, locals, cookies }) {
	const token = url.searchParams.get('token');
	if (!token) return new Response('Missing token', { status: 400 });

	const [linkData] = await locals.db.select().from(magicLink).where(eq(magicLink.token, token));

	if (!linkData || linkData.expiresAt.getTime() < Date.now()) {
		if (linkData) {
			await locals.db.delete(magicLink).where(eq(magicLink.id, linkData.id));
		}
		return new Response('Token invalid or expired. Please request a new one.', { status: 400 });
	}

	// Token is valid, delete it to prevent reuse
	await locals.db.delete(magicLink).where(eq(magicLink.id, linkData.id));

	// Get or Create user
	let [existingUser] = await locals.db.select().from(user).where(eq(user.email, linkData.email));

	if (!existingUser) {
		const newId = crypto.randomUUID();
		const [newUser] = await locals.db
			.insert(user)
			.values({
				id: newId,
				email: linkData.email,
				name: linkData.email.split('@')[0]
			})
			.returning();
		existingUser = newUser;
	}

	const payload = { id: existingUser.id, email: existingUser.email };

	// Generate JWT tokens
	const accessToken = await signAccessToken(payload);
	const refreshToken = await signRefreshToken(payload);

	// Set cookies
	const isProd = process.env.NODE_ENV === 'production';
	cookies.set('access_token', accessToken, {
		path: '/',
		httpOnly: true,
		secure: isProd,
		maxAge: 60 * 60 * 2 // 2 hours
	});

	cookies.set('refresh_token', refreshToken, {
		path: '/',
		httpOnly: true,
		secure: isProd,
		maxAge: 60 * 60 * 24 * 30 // 30 days
	});

	throw redirect(302, '/');
}
