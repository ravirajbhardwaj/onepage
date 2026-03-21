import { Resend } from 'resend';

export async function sendMagicLinkEmail(email: string, magicLink: string) {

	const resend = new Resend(process.env.RESEND_API_KEY);
	await resend.emails.send({
		from: 'onboarding@resend.dev', // Update with your domain!
		to: email,
		subject: 'Your Magic Login Link',
		html: `<p>Click here to login: <a href="${magicLink}">${magicLink}</a></p>`
	});
}
