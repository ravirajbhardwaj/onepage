<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	let { form } = $props();
	let loading = $state(false);
</script>

<div class="flex min-h-screen w-auto flex-col items-center justify-center gap-6">
	<Card.Root class="w-full max-w-md">
		<Card.Header>
			<Card.Title class="mb-6 scroll-m-20 text-center text-2xl font-semibold tracking-tight"
				>OnePage</Card.Title
			>
			<Card.Description class="scroll-m-20 text-center text-xl font-semibold tracking-tight"
				>Sign In</Card.Description
			>
		</Card.Header>
		<Card.Content>
			{#if form?.success}
				<div class="rounded-md border border-green-200 bg-green-50 p-4 text-center text-green-700">
					<p class="font-medium">Check your email!</p>
					<p class="mt-1 text-sm text-balance">{form.message}</p>
				</div>
			{:else}
				<form
					method="POST"
					use:enhance={() => {
						loading = true;
						return async ({ update }) => {
							loading = false;
							update();
						};
					}}
					class="grid gap-4"
				>
					{#if form?.message}
						<div class="text-center text-sm font-medium text-red-500">{form.message}</div>
					{/if}
					<div class="flex flex-col gap-3">
						<input
							type="email"
							name="email"
							value={form?.email ?? ''}
							placeholder="name@example.com"
							required
							disabled={loading}
							class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
						/>
						<Button type="submit" size="lg" class="w-full font-bold" disabled={loading}>
							{loading ? 'Sending...' : 'Send Magic Link'}
						</Button>
					</div>
				</form>
			{/if}
		</Card.Content>
		<Card.Footer>
			<div
				class="mt-4 mb-6 w-full px-4 text-center text-sm text-balance text-muted-foreground md:px-6"
			>
				By continue, you agree to our
				<a href="/terms" class="text-primary underline underline-offset-4 hover:text-blue-700"
					>Terms</a
				>
				and
				<a href="/privacy" class="text-primary underline underline-offset-4 hover:text-blue-700"
					>Privacy Policy</a
				>
			</div>
		</Card.Footer>
	</Card.Root>
</div>
