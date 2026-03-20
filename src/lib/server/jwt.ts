import { SignJWT, jwtVerify } from 'jose';
import { env } from '$env/dynamic/private';

const getSecret = () =>
	new TextEncoder().encode(env.JWT_SECRET || 'fallback_secret_for_local_dev_only');

export async function signAccessToken(payload: { id: string; email: string }) {
	return new SignJWT(payload)
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime('2h')
		.sign(getSecret());
}

export async function signRefreshToken(payload: { id: string; email: string }) {
	return new SignJWT(payload)
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime('30d')
		.sign(getSecret());
}

export async function verifyToken(token: string): Promise<{ id: string; email: string } | null> {
	try {
		const { payload } = await jwtVerify(token, getSecret());
		return payload as { id: string; email: string };
	} catch (e) {
		return null;
	}
}
