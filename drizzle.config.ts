import { defineConfig } from 'drizzle-kit';
import fs from 'fs';
import path from 'path';

function getLocalD1DB() {
	try {
		const basePath = path.resolve('.wrangler');
		const dbPath = path.resolve(basePath, 'state/v3/d1/miniflare-D1DatabaseObject');
		const files = fs.readdirSync(dbPath);
		for (const file of files) {
			if (file.endsWith('.sqlite')) {
				return path.resolve(dbPath, file);
			}
		}
	} catch (err) {}
	return '';
}

const localDbUrl = getLocalD1DB();

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	out: './drizzle',
	dialect: 'sqlite',
	// Automatically use local SQLite file for Drizzle Studio if it's found
	...(localDbUrl ? { dbCredentials: { url: localDbUrl } } : { driver: 'd1-http' }),
	verbose: true,
	strict: true
});
