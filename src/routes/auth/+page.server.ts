import { fail } from '@sveltejs/kit';
import { magicLink } from '$lib/server/db/schema';
import { sendMagicLinkEmail } from '$lib/server/email';

export const actions = {
	default: async ({ request, locals, url }) => {
		const data = await request.formData();
		const email = data.get('email');

		if (!email || typeof email !== 'string') {
			return fail(400, { email, missing: true, message: 'Email is required' });
		}

		try {
			const token = crypto.randomUUID();
			const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 mins expiry

			await locals.db.insert(magicLink).values({
				id: crypto.randomUUID(),
				email,
				token,
				expiresAt
			});

			const magicLinkUrl = `${url.origin}/api/auth/verify?token=${token}`;
			await sendMagicLinkEmail(email, magicLinkUrl);

			return { success: true, message: 'Magic link sent. Check your email (or terminal!).' };
		} catch (error) {
			console.error(error);
			return fail(500, { email, message: 'Failed to send magic link. Please try again.' });
		}
	}
};
