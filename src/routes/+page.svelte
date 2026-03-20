<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { BadgeCheck, Zap } from '@lucide/svelte';

	// ============================================
	// ⚠️ IMPORTANT: POLAR PRODUCT ID
	// Replace the ID below with your actual Product/Price ID from your Polar dashboard!
	// ============================================
	const POLAR_PRODUCT_ID = '76b09a80-fcf2-45cc-84c0-dc4d1859bfd2';

	const checkoutUrl = `/api/checkout?products=${POLAR_PRODUCT_ID}`;
</script>

<svelte:head>
	<title>OnePage - Pricing</title>
</svelte:head>

<section
	class="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-foreground sm:p-12"
>
	<div class="mb-12 max-w-3xl text-center">
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
			Simple pricing for true indie hackers
		</h1>
		<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
			Start building your SaaS empire effortlessly. One low price, infinite capabilities. Test our
			checkout flow using Polar below.
		</p>
	</div>

	<Card.Root
		class="relative w-full max-w-md overflow-hidden border-primary/50 shadow-xl shadow-primary/10"
	>
		<div
			class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary to-orange-600"
		></div>

		<Card.Header class="pb-6 text-center">
			<Card.Title class="flex items-center justify-center gap-2 text-2xl font-bold">
				<Zap class="h-6 w-6 fill-orange-500 text-orange-500" />
				Pro Lifetime
			</Card.Title>
			<Card.Description class="mt-2 text-base"
				>Everything you need to launch immediately.</Card.Description
			>
		</Card.Header>

		<Card.Content>
			<div class="mb-6 text-center">
				<span class="text-5xl font-extrabold">$49</span>
				<span class="font-medium text-muted-foreground">/once</span>
			</div>

			<ul class="mb-8 space-y-4">
				{#each ['Full source code access', 'Cloudflare D1 & JWT Auth', 'Polar payments integration', 'Lifetime updates & support', 'Unlimited commercial projects'] as feature}
					<li class="flex items-center gap-3">
						<BadgeCheck class="h-5 w-5 text-green-500" />
						<span class="text-sm font-medium">{feature}</span>
					</li>
				{/each}
			</ul>

			<a href={checkoutUrl} class="block w-full">
				<Button
					size="lg"
					class="h-12 w-full bg-primary text-lg font-bold shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-primary/40"
				>
					Get Lifetime Access
				</Button>
			</a>
		</Card.Content>

		<Card.Footer class="mt-2 justify-center bg-muted/30 py-4">
			<p class="flex items-center gap-1.5 text-xs text-muted-foreground">
				Secure payments powered by
				<svg class="h-3 w-12" viewBox="0 0 54 13" fill="none" xmlns="http://www.w3.org/2000/svg"
					><path
						d="M42.3 6.9c0-1.6 1.3-3 2.9-3 1.7 0 3 1.3 3 3 0 1.6-1.3 2.9-3 2.9-1.6 0-2.9-1.3-2.9-2.9zM48 6.9c0 1.6 1.3 2.9 2.9 2.9 1.6 0 2.9-1.3 2.9-2.9 0-1.7-1.3-3-2.9-3C49.3 3.9 48 5.2 48 6.9z"
						fill="currentColor"
					/><path
						d="M12.6 6.5C12.6 2.9 9.8 0 6.3 0 2.8 0 0 2.9 0 6.5s2.8 6.4 6.3 6.4c3.5 0 6.3-2.9 6.3-6.4zm-6.3 4C4.1 10.5 2.3 8.7 2.3 6.5s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
						fill="currentColor"
					/><path
						d="M17.4 6.5c0 1.6 1.3 2.9 2.9 2.9 1.6 0 2.9-1.3 2.9-2.9 0-1.7-1.3-3-2.9-3-1.6 0-2.9 1.3-2.9 3zm7.8-6.1h-2v1.5c-1-.9-2.3-1.5-3.8-1.5-3.3 0-5.8 2.7-5.8 6s2.5 6 5.8 6c1.6 0 2.9-.6 3.8-1.5v1.3h2l.1-11.8z"
						fill="currentColor"
					/><path
						d="M29.5 0h-2v12.4h2V0zM35.4 6.5c0 1.6 1.4 2.9 3 2.9 1.7 0 3.1-1.3 3.1-2.9 0-1.7-1.4-3-3.1-3-1.6 0-3 1.3-3 3zm8-5.2c-1.1-1-2.4-1.3-4-1.3-3.3 0-5.9 2.7-5.9 6s2.5 6 5.8 6c1.7 0 3-.6 4-1.6v-4h-2.1v2.5c-.5.8-1.4 1.2-2.3 1.2-1.4 0-2.6-1.1-2.6-2.6 0-1.5 1.2-2.7 2.6-2.7.9 0 1.8.4 2.3 1.2v-4.7z"
						fill="currentColor"
					/></svg
				>
			</p>
		</Card.Footer>
	</Card.Root>
</section>
