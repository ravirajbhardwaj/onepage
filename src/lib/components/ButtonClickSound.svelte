<script lang="ts">
	import { onMount } from 'svelte';
	import { playClickSfx, playSwitchSfx } from '$lib/sound';

	const BUTTON_SOUND_SELECTOR = 'button, [data-slot="button"]';
	const BUTTON_SOUND_CONTEXT_SELECTOR = '[data-click-sfx]';
	const PORTFOLIO_SCOPE_SELECTOR = '[data-page-sfx-scope="portfolio"]';

	function isDisabledTrigger(el: HTMLElement) {
		if (el instanceof HTMLButtonElement) return el.disabled;
		return el.getAttribute('aria-disabled') === 'true' || el.hasAttribute('disabled');
	}

	onMount(() => {
		function handleClick(event: MouseEvent) {
			if (!(event.target instanceof Element)) return;

			const trigger = event.target.closest<HTMLElement>(BUTTON_SOUND_SELECTOR);
			if (!trigger) return;
			if (trigger.closest(PORTFOLIO_SCOPE_SELECTOR)) return;
			if (isDisabledTrigger(trigger)) return;

			const soundContext = trigger.closest<HTMLElement>(BUTTON_SOUND_CONTEXT_SELECTOR);
			const sound = soundContext?.dataset.clickSfx;

			if (sound === 'off') return;
			if (sound === 'switch') {
				playSwitchSfx();
				return;
			}

			playClickSfx();
		}

		document.addEventListener('click', handleClick, true);
		return () => document.removeEventListener('click', handleClick, true);
	});
</script>
