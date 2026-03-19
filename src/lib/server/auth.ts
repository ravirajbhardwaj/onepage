import * as schema from './db/schema';
import { env } from '$env/dynamic/private';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from './db';

export const auth = betterAuth({
	database: drizzleAdapter(db, { provider: 'pg', schema }),
	baseURL: env.BETTER_AUTH_URL,
	socialProviders: {
		google: {
			clientId: env.GOOGLE_CLIENT_ID!,
			clientSecret: env.GOOGLE_CLIENT_SECRET!
		}
	}
});
