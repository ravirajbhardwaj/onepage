<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import Button from '$lib/components/ui/button/button.svelte';

	onMount(() => {
		console.error(page.error);
	});
</script>

<div class="my-auto flex min-h-screen flex-col items-center justify-center">
	<div class="flex flex-col items-center justify-center gap-4">
		<h2
			class="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight text-red-600 transition-colors first:mt-0"
		>
			Oops! Something went wrong
		</h2>
		<p class="not-first-child:mt-6 leading-7">
			{page.error?.message || 'An unexpected error occurred'}
		</p>
		<div class="flex gap-3">
			<Button
				size="lg"
				onclick={() => history.back()}
				class="bg-gray-800 px-5 py-2 font-bold text-white transition hover:bg-gray-700"
			>
				Try again
			</Button>
			<Button
				onclick={() => goto(resolve('/'))}
				variant="outline"
				size="lg"
				class="border font-bold text-gray-600 transition hover:bg-gray-100"
			>
				Back to Home
			</Button>
		</div>
	</div>
</div>
