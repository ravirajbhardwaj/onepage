<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { CheckCircle } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Payment Successful - OnePage</title>
</svelte:head>

<div class="flex min-h-screen items-center justify-center bg-background p-4">
	<Card.Root class="w-full max-w-md border-green-500/20 text-center shadow-2xl">
		<Card.Header class="pt-8">
			<div class="mb-6 flex justify-center">
				<div class="rounded-full bg-green-100 p-3 dark:bg-green-900/30">
					<CheckCircle class="h-12 w-12 text-green-600 dark:text-green-500" />
				</div>
			</div>
			<Card.Title class="text-3xl font-extrabold tracking-tight">Payment Successful!</Card.Title>
			<Card.Description class="mt-2 text-lg">Welcome to OnePage Pro.</Card.Description>
		</Card.Header>

		<Card.Content class="pb-8">
			<p class="mb-8 text-balance text-muted-foreground">
				Thank you for your purchase! Your account has been instantly upgraded to Lifetime Access.
				You can now enjoy all premium features.
			</p>

			<a href="/" class="block w-full">
				<Button class="text-md h-12 w-full font-bold" size="lg">Get Started</Button>
			</a>
		</Card.Content>
	</Card.Root>
</div>
