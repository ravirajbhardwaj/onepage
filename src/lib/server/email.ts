export async function sendMagicLinkEmail(email: string, magicLink: string) {
	// For now, logging to console.
	// To use Resend, uncomment the code and add RESEND_API_KEY to your env variables
	console.log('\n========================================================');
	console.log(`MAGIC LINK FOR ${email}:`);
	console.log(`=>  ${magicLink}`);
	console.log('========================================================\n');

	/*
	import { Resend } from 'resend';
	const resend = new Resend(process.env.RESEND_API_KEY);
	await resend.emails.send({
		from: 'onboarding@resend.dev', // Update with your domain!
		to: email,
		subject: 'Your Magic Login Link',
		html: `<p>Click here to login: <a href="${magicLink}">${magicLink}</a></p>`
	});
	*/
}
