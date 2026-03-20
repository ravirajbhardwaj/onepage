// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Platform {
			env: {
				DB: D1Database;
				JWT_SECRET: string;
			};
			ctx: ExecutionContext;
			caches: CacheStorage;
			cf?: IncomingRequestCfProperties;
		}

		// interface Error {}
		interface Locals {
			db: import('drizzle-orm/d1').DrizzleD1Database<typeof import('./lib/server/db/schema')>;
			user: { id: string; email: string; isPaid: boolean } | null;
		}
		// interface PageData {}
		// interface PageState {}
	}
}

export {};
