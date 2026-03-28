<script>
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import Button from '$lib/components/ui/button/button.svelte';

	const avatarUrl = 'https://pbs.twimg.com/profile_images/2033138665921339392/SxMxaark_400x400.jpg';
	const name = 'Ravi Raj';
	const profession = 'Software Engineer';
	const bio = `<p class="sm:text-md mt-3 text-sm leading-relaxed text-muted-foreground">
			I'm a
			<span class="font-medium text-foreground/90"> self-taught developer </span>
			and most of what I've learned comes from
			<span class="font-medium text-foreground/90">
				hands-on projects, technical blogs, and learning from people around me
			</span>
			. I mainly work with
			<span class="rounded bg-muted px-1 underline decoration-primary/50 underline-offset-4">
				TypeScript, ReactNative, SvelteKit, Node.js, Hono, PostgreSQL, Drizzle ORM
			</span>
			, and I'm comfortable owning the entire stack.
			</p>
      <br>
      <p class="sm:text-md mt-3 text-sm leading-relaxed text-muted-foreground">
      Beyond tech, I like to explore things that bring me peace and spark my curiosity — <span class="font-medium text-foreground/90">cooking, chess, cricket, traveling, and painting</span>.
      </p>
      <br>
      Contact:
			<a href='https://github.com/ravirajbhardwaj' target="_blank" rel="noopener noreferrer" variant="outline">
				<span class="rounded bg-muted px-1 underline decoration-primary/50 underline-offset-4">Github</span>
			</a>
      <a href='https://x.com/eravitw' target="_blank" rel="noopener noreferrer" variant="outline">
				<span class="rounded bg-muted px-1 underline decoration-primary/50 underline-offset-4">Twitter</span>
			</a>
      <a href='mailto:ravirajbhardwaaj@gmail.com' target="_blank" rel="noopener noreferrer" variant="outline">
				<span class="rounded bg-muted px-1 underline decoration-primary/50 underline-offset-4">Gmail</span>
			</a>`;
	const location = 'Delhi, India';

	// { title, detail, year }
	const achievements = [
		{ title: '100 Paid Users', detail: 'Side project [OnePage] crossed 100 signups', year: '2026' }
	];

	// { title, description, url }
	const works = [
		{
			title: 'Linktree Clone',
			description: 'Customisable bio-link page builder with analytics and custom domains.',
			url: 'https://github.com'
		},
		{
			title: 'SpendWise',
			description: 'Personal finance tracker with visual breakdowns and recurring bill alerts.',
			url: 'https://github.com'
		}
	];

	const skills = [
		'typescript',
		'python',
		'nodejs',
		'reactnative',
		'svelte',
		'hono',
		'express',
		'fastapi',
		'sqlite',
		'postgresql',
		'drizzle',
		'n8n'
	];

	const iconsUrl = `https://go-skill-icons.vercel.app/api/icons?i=${skills.join(',')}&theme=light`;

	const journey = [
		{
			type: 'work',
			title: 'Full Stack Developer',
			place: 'Freelance',
			period: 'Aug 2025 – Sep 2025',
			description: 'Building production SaaS apps end-to-end, from DB schema to deployed UI.'
		},
		{
			type: 'work',
			title: 'Indie Hacking',
			place: 'Work on my Startup',
			period: '2026 – Present',
			description:
				'Shipped 2 startups and learn lots of things communcation, markiting, ship fast project.'
		}
	];

	// Stagger helper — same pattern as journey dots appearing one-by-one
	// base: when the section itself starts, step: gap between each item
	/** @param {number} index
	 *  @param {number} base
	 *  @param {number} step */
	function stagger(index, base = 0, step = 80) {
		return base + index * step;
	}
</script>

<div class="mx-auto max-w-2xl space-y-10 px-4 py-10">
	<!-- ── IDENTITY ──────────────────────────────────────────────── -->
	<div in:fly={{ y: 12, duration: 400, delay: 0, easing: cubicOut }} class="flex items-start gap-5">
		<!-- avatar fades in slightly after the row -->
		<img
			in:fade={{ duration: 350, delay: 60 }}
			src={avatarUrl}
			alt={name}
			class="h-20 w-20 shrink-0 rounded-2xl border border-border object-cover"
		/>

		<div class="min-w-0 flex-1">
			<!-- name flies up first -->
			<div
				in:fly={{ y: 8, duration: 350, delay: 80, easing: cubicOut }}
				class="flex flex-wrap items-center gap-2"
			>
				<h1 class="text-xl font-semibold text-foreground">{name}</h1>
			</div>

			<!-- profession a beat after name -->
			<p
				in:fly={{ y: 6, duration: 300, delay: 150, easing: cubicOut }}
				class="mt-0.5 text-sm text-muted-foreground"
			>
				{profession}
			</p>

			<!-- location last in the identity block -->
			<div
				in:fly={{ y: 6, duration: 300, delay: 210, easing: cubicOut }}
				class="mt-2 flex items-center gap-1 text-xs text-muted-foreground"
			>
				<svg
					width="11"
					height="11"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle
						cx="12"
						cy="10"
						r="3"
					/></svg
				>
				{location}
			</div>
		</div>

		<!-- DM link -->
		<div
			in:fly={{ x: 20, duration: 400, delay: 300, easing: cubicOut }}
			class="hover:translate-x-0.9 ml-auto transition-transform sm:flex"
		>
			<a
				href="https://twitter.com/messages/compose?recipient_id=eravitw"
				target="_blank"
				rel="noopener noreferrer"
				class="group sm:text-md relative inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/70 transition-colors hover:text-foreground"
			>
				<span>Hiring? DM me</span>
				<span
					class="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-primary/60 transition-all duration-500 ease-out group-hover:w-full"
				></span>
			</a>
		</div>
	</div>

	<!-- ── BIO ───────────────────────────────────────────────────── -->
	<p
		in:fly={{ y: 10, duration: 350, delay: 320, easing: cubicOut }}
		class="text-sm leading-relaxed text-muted-foreground"
	>
		{@html bio}
	</p>

	<div in:fade={{ duration: 400, delay: 1480 }} class="h-px bg-border"></div>

	<!-- ── PROOF OF WORK ─────────────────────────────────────────── -->
	<section in:fly={{ y: 10, duration: 350, delay: 1520, easing: cubicOut }} class="space-y-4">
		<h2 class="text-xs font-semibold tracking-widest text-muted-foreground/60 uppercase">
			Proof of Work & Skill
		</h2>

		<!-- ── Skills grid ── -->
		<div class="flex flex-wrap gap-3">
			<img src={iconsUrl} alt="Skills" class="max-w-full" loading="lazy" />
		</div>
	</section>

	<div in:fade={{ duration: 400, delay: 1060 }} class="h-px bg-border"></div>

	<!-- ── ACHIEVEMENTS ──────────────────────────────────────────── -->
	<section in:fly={{ y: 10, duration: 350, delay: 1100, easing: cubicOut }} class="space-y-4">
		<h2 class="text-xs font-semibold tracking-widest text-muted-foreground/60 uppercase">
			Achievements
		</h2>
		<div class="space-y-1">
			{#each achievements as a, i}
				<div
					in:fly={{ x: -12, y: 4, duration: 300, delay: stagger(i, 1140, 80), easing: cubicOut }}
					class="group relative flex cursor-default items-start gap-4 rounded-lg py-3 pr-3
            pl-4 transition-colors duration-200 hover:bg-accent"
				>
					<div
						in:fade={{ duration: 250, delay: stagger(i, 1180, 80) }}
						class="absolute top-3 bottom-3 left-0 w-0.5 rounded-full
              bg-primary/20 transition-colors duration-200 group-hover:bg-primary/50"
					></div>
					<span class="mt-0.75 w-4 shrink-0 font-mono text-[10px] text-muted-foreground/40">
						{String(i + 1).padStart(2, '0')}
					</span>
					<div class="min-w-0 flex-1">
						<p class="text-sm font-medium text-foreground">{a.title}</p>
						<p class="mt-0.5 text-xs leading-relaxed text-muted-foreground">{a.detail}</p>
					</div>
					<span class="mt-0.75 shrink-0 font-mono text-[10px] text-muted-foreground/40"
						>{a.year}</span
					>
				</div>
			{/each}
		</div>
	</section>

	<div in:fade={{ duration: 400, delay: 620 }} class="h-px bg-border"></div>

	<!-- ── JOURNEY ───────────────────────────────────────────────── -->
	<section in:fly={{ y: 10, duration: 350, delay: 660, easing: cubicOut }} class="space-y-5">
		<h2 class="text-xs font-semibold tracking-widest text-muted-foreground/60 uppercase">
			Journey
		</h2>
		<div class="relative ml-3">
			<div
				in:fade={{ duration: 500, delay: 720 }}
				class="absolute top-2 bottom-2 left-0 w-px bg-border"
			></div>
			{#each journey as item, i}
				<div
					in:fly={{ y: 10, duration: 320, delay: stagger(i, 740, 100), easing: cubicOut }}
					class="relative pb-7 pl-6 last:pb-0"
				>
					<div
						in:fade={{ duration: 200, delay: stagger(i, 780, 100) }}
						class="absolute top-1.75 left-0 h-2 w-2 -translate-x-1/2 rounded-full border
              {item.type === 'work'
							? 'border-primary/60 bg-primary/10'
							: 'border-muted-foreground/40 bg-muted-foreground/10'}"
					></div>
					<div class="flex flex-wrap items-start justify-between gap-4">
						<div>
							<p class="text-sm font-medium text-foreground">{item.title}</p>
							<p class="mt-0.5 text-xs text-muted-foreground">{item.place}</p>
						</div>
						<div class="flex flex-col items-end gap-1">
							<span class="font-mono text-xs whitespace-nowrap text-muted-foreground/60"
								>{item.period}</span
							>
							<span
								class="rounded border px-1.5 py-0.5 text-[10px]
                {item.type === 'work'
									? 'border-primary/20 text-primary/60'
									: 'border-border text-muted-foreground/50'}"
							>
								{item.type === 'work' ? 'Work' : 'Education'}
							</span>
						</div>
					</div>
					{#if item.description}
						<p class="mt-1.5 text-xs leading-relaxed text-muted-foreground/70">
							{item.description}
						</p>
					{/if}
				</div>
			{/each}
		</div>
	</section>
</div>
