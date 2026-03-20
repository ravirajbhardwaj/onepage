import { env } from '$env/dynamic/private';
import { Polar } from '@polar-sh/sdk';
import { redirect } from '@sveltejs/kit';

const polar = new Polar({
	accessToken: env.POLAR_ACCESS_TOKEN,
	server: env.POLAR_MODE !== 'development' ? 'production' : 'sandbox'
});

export async function GET({ url, locals }) {
	const productId = url.searchParams.get('products');
	if (!productId) return new Response('Missing products in query params', { status: 400 });

	const userId = locals.user?.id;
	if (!userId) {
		// Must be logged in to checkout so we know who to give access to!
		throw redirect(302, '/auth');
	}

	const session = await polar.checkouts.create({
		products: [productId],
		successUrl: env.POLAR_SUCCESS_URL,
		// Store the user ID so we can retrieve it in the webhook!
		customerMetadata: { userId: userId }
	});

	throw redirect(302, session.url);
}
