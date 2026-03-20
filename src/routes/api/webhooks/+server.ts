import { env } from '$env/dynamic/private';
import { validateEvent } from '@polar-sh/sdk/webhooks';
import { user } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export async function POST({ request, locals }) {
	const body = await request.text();
	const signature = request.headers.get('webhook-signature');

	if (!signature) {
		return new Response('Missing webhook signature', { status: 400 });
	}

	let eventPayload;
	try {
		const headers = Object.fromEntries(request.headers.entries());
		eventPayload = validateEvent(body, headers, env.POLAR_WEBHOOK_SECRET);
	} catch (err) {
		return new Response('Invalid webhook signature', { status: 403 });
	}

	const db = locals.db;
	if (!db) {
		console.error('Database connection not found in locals');
		return new Response('Internal Server Error', { status: 500 });
	}

	if (eventPayload.type === 'order.created' || eventPayload.type === 'subscription.created') {
		const order = eventPayload.data;

		// Extract the userId we passed into metadata during Checkout creation
		const userId = order.metadata?.userId || (order as any).customer_metadata?.userId;

		if (userId) {
			await db.update(user).set({ isPaid: true }).where(eq(user.id, userId));
			console.log(`Successfully upgraded user ${userId} to Paid!`);
		} else {
			console.warn('Webhook received but no userId was found in the order metadata.');
		}
	}

	return new Response('OK', { status: 200 });
}
