<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';

	let username = $state('');

	const claimPage = () => {
		if (username.trim()) {
			window.location.href = `/auth?username=${encodeURIComponent(username.trim())}`;
		}
	};

	const handleKey = (e: KeyboardEvent) => {
		if (e.key === 'Enter') claimPage();
	};
</script>

<!--
  lg:min-h-screen + lg:items-center keeps everything in one viewport on desktop.
  Reduced py on desktop (lg:py-0) so the section itself doesn't add extra height.
-->
<section
	class="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12
	       md:px-12
	       lg:min-h-screen lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-0"
>
	<!-- ── LEFT — copy + CTA ────────────────────────────────── -->
	<div class="flex flex-col items-start gap-5">
		<a
			href="https://www.producthunt.com/products/cutefolio"
			target="_blank"
			class="opacity-80 transition hover:opacity-100"
		>
			<Badge variant="outline" class="gap-1.5 px-3 py-1 text-xs">
				<div
					class="flex h-4 w-4 items-center justify-center rounded-full bg-[#ff6154] text-[10px] font-bold text-white"
				>
					P
				</div>
				Featured on Product Hunt
			</Badge>
		</a>

		<div class="space-y-3">
			<h1
				class="text-4xl leading-[1.08] font-black tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]"
			>
				One link.<br />
				Your entire<br />
				<span class="text-primary">story.</span>
			</h1>
			<p class="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
				Stop sending people to a messy LinkedIn. Build a clean, beautiful portfolio page in minutes
				— your journey, achievements, and work, all in one place.
			</p>
		</div>

		<div class="flex w-full flex-col gap-2.5 sm:flex-row sm:items-center">
			<div
				class="flex min-w-0 flex-1 items-center overflow-hidden rounded-2xl border border-border bg-transparent px-4 py-3 transition-colors focus-within:border-foreground/40"
			>
				<span class="shrink-0 text-sm font-semibold whitespace-nowrap text-muted-foreground">
					onepa.ge/
				</span>
				<input
					bind:value={username}
					onkeydown={handleKey}
					placeholder="yourname"
					class="min-w-0 flex-1 border-0 bg-transparent p-0 text-sm font-semibold shadow-none outline-none placeholder:text-muted-foreground/40 focus-visible:ring-0"
				/>
			</div>
			<Button
				onclick={claimPage}
				class="w-full shrink-0 rounded-2xl px-6 py-3 text-sm font-bold tracking-wide sm:h-full sm:w-auto"
			>
				Claim my page →
			</Button>
		</div>

		<div class="flex items-center gap-3 text-sm text-muted-foreground">
			<div class="flex -space-x-2">
				{#each ['bg-emerald-500', 'bg-cyan-500', 'bg-orange-500'] as color}
					<div class="h-6 w-6 rounded-full border-2 border-background {color}"></div>
				{/each}
			</div>
			<span
				><span class="font-bold text-foreground">2,400+</span> people already have their page</span
			>
		</div>

		<div class="flex flex-wrap gap-4 text-xs text-muted-foreground">
			{#each ['No design skills needed', 'Ready in 2 minutes'] as t}
				<span class="flex items-center gap-1">
					<svg
						width="11"
						height="11"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg
					>
					{t}
				</span>
			{/each}
		</div>
	</div>

	<!-- ── RIGHT — static mockup, fixed height on desktop ───── -->
	<!--
	  On lg: the mockup column is capped at 88vh so it never overflows.
	  The inner content area scrolls silently (no scrollbar) if needed,
	  but in practice the compact spacing keeps it fully visible.
	-->
	<div class="flex items-center justify-center lg:py-8">
		<div
			class="w-full max-w-xs overflow-hidden rounded-[1.5rem] border border-border bg-background shadow-2xl lg:flex lg:max-h-[88vh] lg:flex-col"
		>
			<!-- browser bar — fixed, never scrolls -->
			<div class="flex shrink-0 items-center gap-2 border-b border-border bg-muted/30 px-3 py-2">
				<div class="flex gap-1.5">
					<div class="h-2 w-2 rounded-full bg-red-400/70"></div>
					<div class="h-2 w-2 rounded-full bg-yellow-400/70"></div>
					<div class="h-2 w-2 rounded-full bg-green-400/70"></div>
				</div>
				<div
					class="flex-1 rounded-full bg-muted px-3 py-0.5 text-center text-[10px] text-muted-foreground"
				>
					onepa.ge/raviraj
				</div>
			</div>

			<!-- scrollable content — hides scrollbar, tight spacing -->
			<div class="no-scrollbar flex-1 space-y-4 overflow-y-auto px-4 py-4">
				<!-- identity -->
				<div class="flex items-center gap-3">
					<img
						src="https://pbs.twimg.com/profile_images/2033138665921339392/SxMxaark_400x400.jpg"
						alt="Ravi Raj"
						class="h-12 w-12 shrink-0 rounded-xl border border-border object-cover"
					/>
					<div class="min-w-0 flex-1">
						<p class="text-xs font-bold text-foreground">Ravi Raj</p>
						<p class="text-[10px] text-muted-foreground">Full Stack Developer</p>
						<div class="mt-0.5 flex items-center gap-1 text-[9px] text-muted-foreground">
							<svg
								width="8"
								height="8"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle
									cx="12"
									cy="10"
									r="3"
								/></svg
							>
							Bengaluru, India
						</div>
					</div>
					<span class="shrink-0 text-[9px] font-semibold text-muted-foreground/50">View CV ↗</span>
				</div>

				<!-- bio -->
				<p class="text-[10px] leading-relaxed text-muted-foreground">
					Self-taught developer who loves backend engineering, clean APIs, and distributed systems.
				</p>

				<!-- social chips -->
				<div class="flex flex-wrap gap-1">
					{#each ['GitHub', 'LinkedIn', 'Twitter', 'Email'] as p}
						<span
							class="rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-[9px] font-medium text-muted-foreground"
							>{p}</span
						>
					{/each}
				</div>

				<div class="h-px bg-border"></div>

				<!-- journey -->
				<div class="space-y-2">
					<p class="text-[8px] font-bold tracking-widest text-muted-foreground/40 uppercase">
						Journey
					</p>
					<div class="relative ml-2.5">
						<div class="absolute top-1 bottom-1 left-0 w-px bg-border"></div>
						{#each [{ type: 'work', title: 'Full Stack Developer', place: 'Freelance', period: '2023–Now' }, { type: 'work', title: 'Frontend Intern', place: 'TechStartup Co.', period: '2022–23' }, { type: 'education', title: 'B.Tech, CS', place: 'XYZ University', period: '2019–23' }] as item}
							<div class="relative pb-2.5 pl-3.5 last:pb-0">
								<div
									class="absolute top-[4px] left-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full border
									{item.type === 'work'
										? 'border-primary/60 bg-primary/10'
										: 'border-muted-foreground/40 bg-muted-foreground/10'}"
								></div>
								<div class="flex items-start justify-between gap-2">
									<div>
										<p class="text-[10px] leading-tight font-semibold text-foreground">
											{item.title}
										</p>
										<p class="text-[9px] text-muted-foreground">{item.place}</p>
									</div>
									<span class="mt-px shrink-0 font-mono text-[8px] text-muted-foreground/50"
										>{item.period}</span
									>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div class="h-px bg-border"></div>

				<!-- achievements -->
				<div class="space-y-1.5">
					<p class="text-[8px] font-bold tracking-widest text-muted-foreground/40 uppercase">
						Achievements
					</p>
					{#each [{ title: 'Hackathon Winner', detail: 'HackIndia 2023', year: '2023' }, { title: 'AWS Certified', detail: 'Solutions Architect', year: '2023' }] as a, i}
						<div class="relative flex items-center gap-2 rounded-md py-1.5 pr-2 pl-3">
							<div class="absolute top-2 bottom-2 left-0 w-[2px] rounded-full bg-primary/20"></div>
							<span class="w-3 shrink-0 font-mono text-[8px] text-muted-foreground/30"
								>{String(i + 1).padStart(2, '0')}</span
							>
							<div class="min-w-0 flex-1">
								<p class="text-[10px] leading-tight font-semibold text-foreground">{a.title}</p>
								<p class="text-[9px] text-muted-foreground">{a.detail}</p>
							</div>
							<span class="shrink-0 font-mono text-[8px] text-muted-foreground/40">{a.year}</span>
						</div>
					{/each}
				</div>

				<div class="h-px bg-border"></div>

				<!-- proof of work -->
				<div class="space-y-1.5">
					<p class="text-[8px] font-bold tracking-widest text-muted-foreground/40 uppercase">
						Proof of Work
					</p>
					{#each [{ title: 'Linktree Clone', open: true, desc: 'Bio-link builder with analytics.' }, { title: 'SpendWise', open: false, desc: '' }] as w}
						<div
							class="rounded-lg border {w.open
								? 'border-border bg-accent'
								: 'border-transparent'} px-3 py-2"
						>
							<div class="flex items-center gap-2">
								<span
									class="h-1.5 w-1.5 shrink-0 rounded-full {w.open
										? 'bg-primary'
										: 'bg-muted-foreground/30'}"
								></span>
								<p
									class="flex-1 text-[10px] font-medium {w.open
										? 'text-foreground'
										: 'text-muted-foreground'}"
								>
									{w.title}
								</p>
								<svg
									class="shrink-0 text-muted-foreground/40 {w.open ? 'rotate-180' : ''}"
									width="9"
									height="9"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<polyline points="6 9 12 15 18 9" />
								</svg>
							</div>
							{#if w.open}
								<p class="mt-1 ml-3.5 text-[9px] leading-relaxed text-muted-foreground">{w.desc}</p>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
