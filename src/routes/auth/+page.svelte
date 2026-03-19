<script lang="ts">
	import { authClient } from '$lib/client';
	import GoogleIcon from '$lib/components/icons/GoogleIcon.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { cn } from '$lib/utils';
</script>

<div class="flex min-h-screen w-auto flex-col items-center justify-center gap-6">
	<Card.Root>
		<Card.Header>
			<Card.Title class="mb-6 scroll-m-20 text-center text-2xl font-semibold tracking-tight"
				>OnePage</Card.Title
			>
			<Card.Description class="scroll-m-20 text-center text-xl font-semibold tracking-tight"
				>Sign In</Card.Description
			>
		</Card.Header>
		<Card.Content>
			<div class="grid gap-4">
				<div class={cn('flex w-full items-center gap-2', 'flex-col justify-between')}>
					<Button
						variant="outline"
						size="lg"
						class="w-auto gap-2 font-bold"
						onclick={async () => {
							await authClient.signIn.social({
								provider: 'google',
								callbackURL: '/'
							});
						}}
					>
						<GoogleIcon />
						Continue with Google</Button
					>
				</div>
			</div>
		</Card.Content>
		<Card.Footer>
			<div class="mt-4 mb-6 px-4 text-center text-sm text-balance text-muted-foreground md:px-6">
				By continue, you agree to our
				<a href="/terms" class="text-primary underline underline-offset-4 hover:text-blue-700">
					Terms
				</a>
				and
				<a href="/privacy" class="text-primary underline underline-offset-4 hover:text-blue-700">
					Privacy Policy
				</a>
			</div>
		</Card.Footer>
	</Card.Root>
</div>
