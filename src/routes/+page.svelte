<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });

	let username = $state('');

	const portfolios = [
		{
			username: 'alex.dev',
			name: 'Alex Chen',
			role: 'Full Stack Developer',
			avatar: '👨‍💻',
			color: '#6366f1',
			bio: 'Building scalable web apps with React & Node. Open to freelance.',
			tags: ['React', 'TypeScript', 'Node.js'],
			links: 12,
			views: '3.2k',
			followers: '840',
			linkItems: [
				{ icon: '🌐', label: 'Portfolio Website' },
				{ icon: '💼', label: 'Hire Me on Toptal' },
				{ icon: '🐙', label: 'GitHub' }
			]
		},
		{
			username: 'sara.design',
			name: 'Sara Malik',
			role: 'UI/UX Designer',
			avatar: '🎨',
			color: '#f43f5e',
			bio: 'Crafting beautiful digital experiences. Figma wizard.',
			tags: ['Figma', 'Branding', 'Motion'],
			links: 8,
			views: '5.1k',
			followers: '1.2k',
			linkItems: [
				{ icon: '🖼️', label: 'Dribbble Portfolio' },
				{ icon: '📦', label: 'Design System Kit' },
				{ icon: '📩', label: 'Book a Call' }
			]
		},
		{
			username: 'james.photo',
			name: 'James Rivera',
			role: 'Photographer & Editor',
			avatar: '📷',
			color: '#f59e0b',
			bio: 'Portrait & street photography. Available for shoots across Europe.',
			tags: ['Portrait', 'Street', 'Lightroom'],
			links: 6,
			views: '2.8k',
			followers: '620',
			linkItems: [
				{ icon: '📸', label: 'Instagram Gallery' },
				{ icon: '🛒', label: 'Buy My Presets' },
				{ icon: '📅', label: 'Book a Shoot' }
			]
		},
		{
			username: 'priya.writes',
			name: 'Priya Nair',
			role: 'Content Strategist',
			avatar: '✍️',
			color: '#10b981',
			bio: 'Turning complex ideas into clear copy. Tech & SaaS writer.',
			tags: ['SaaS', 'SEO', 'Copywriting'],
			links: 9,
			views: '4.4k',
			followers: '980',
			linkItems: [
				{ icon: '📝', label: 'Read My Blog' },
				{ icon: '📬', label: 'Newsletter' },
				{ icon: '💬', label: 'Work With Me' }
			]
		},
		{
			username: 'tom.motion',
			name: 'Tom Bauer',
			role: 'Motion Designer',
			avatar: '🎬',
			color: '#8b5cf6',
			bio: 'After Effects & Lottie animations for startups.',
			tags: ['After Effects', 'Lottie', '3D'],
			links: 11,
			views: '6.7k',
			followers: '2.1k',
			linkItems: [
				{ icon: '🎥', label: 'Showreel 2024' },
				{ icon: '🛍️', label: 'Motion Templates' },
				{ icon: '🤝', label: 'Freelance Inquiry' }
			]
		}
	];

	const claimPage = () => {
		console.log('Claiming page for:', username);
	};
</script>

<section
	class="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:px-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24"
>
	<!-- LEFT — Main -->
	<div class="flex flex-col items-start gap-5">
		<a
			href="https://www.producthunt.com/products/cutefolio"
			target="_blank"
			class="opacity-80 transition hover:opacity-100"
		>
			<Badge variant="outline">
				<div
					class="flex h-4 w-4 items-center justify-center rounded-full bg-[#ff6154] text-[10px] font-bold text-white"
				>
					P
				</div>
				Feature on product hunt
			</Badge>
		</a>

		<h1 class="text-4xl leading-tight font-black text-foreground sm:text-5xl md:text-6xl">
			Your Online Presence<br />
			at <span class="text-primary">OnePage</span>
		</h1>

		<!-- Input row -->
		<div class="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
			<div
				class="flex min-w-0 flex-1 items-center overflow-hidden rounded-2xl border border-border bg-transparent px-4 py-3 focus-within:border-foreground/40"
			>
				<span class="shrink-0 text-sm font-semibold whitespace-nowrap text-muted-foreground">
					onepa.ge/
				</span>
				<input
					bind:value={username}
					placeholder="username"
					class="min-w-0 flex-1 border-0 bg-transparent p-0 text-sm font-semibold shadow-none outline-none placeholder:text-muted-foreground/50 focus-visible:ring-0"
				/>
			</div>

			<Button
				onclick={claimPage}
				variant="outline"
				class="w-full shrink-0 rounded-2xl border-foreground/20 px-7 py-6 text-sm font-semibold tracking-widest uppercase hover:bg-foreground hover:text-background sm:w-auto"
			>
				Claim My Page →
			</Button>
		</div>

		<div class="flex items-center gap-3 text-sm text-zinc-500">
			<div class="flex -space-x-2">
				<div class="h-5 w-5 rounded-full border-2 border-background bg-emerald-500"></div>
				<div class="h-5 w-5 rounded-full border-2 border-background bg-cyan-500"></div>
				<div class="h-5 w-5 rounded-full border-2 border-background bg-orange-500"></div>
			</div>
			<span>
				Join <span class="font-bold text-foreground">2,400+</span> others already in.
			</span>
		</div>
	</div>

	<!-- RIGHT — Carousel (one full card at a time) -->
	<div class="flex items-center justify-center">
		<Carousel.Root
			plugins={[plugin]}
			class="w-full max-w-75"
			onmouseenter={plugin.stop}
			onmouseleave={plugin.reset}
		>
			<Carousel.Content>
				{#each portfolios as portfolio (portfolio.username)}
					<Carousel.Item class="basis-full">
						<div
							class="overflow-hidden rounded-[2rem] border-[3px] border-border bg-background shadow-2xl"
						>
							<!-- Status bar -->
							<div
								class="flex items-center justify-between bg-muted/60 px-4 py-1.5 text-[10px] text-muted-foreground"
							>
								<span>9:41</span>
								<div class="flex gap-1">
									<span>▲</span><span>WiFi</span><span>🔋</span>
								</div>
							</div>

							<!-- Browser bar -->
							<div class="flex items-center gap-2 border-b border-border bg-muted/30 px-3 py-1.5">
								<div
									class="flex-1 rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
								>
									onepa.ge/{portfolio.username}
								</div>
							</div>

							<!-- Page content -->
							<div class="flex flex-col items-center gap-3 bg-transparent p-4">
								<!-- Avatar -->
								<div
									class="flex h-16 w-16 items-center justify-center rounded-full text-3xl shadow-lg"
									style="background: {portfolio.color}33; border: 2px solid {portfolio.color}55"
								>
									{portfolio.avatar}
								</div>

								<!-- Name & role -->
								<div class="text-center">
									<p class="text-sm font-black text-foreground">{portfolio.name}</p>
									<p class="text-[11px] text-muted-foreground">{portfolio.role}</p>
								</div>

								<!-- Bio -->
								<p class="text-center text-[11px] leading-relaxed text-muted-foreground">
									{portfolio.bio}
								</p>

								<!-- Tags -->
								<div class="flex flex-wrap justify-center gap-1">
									{#each portfolio.tags as tag}
										<span
											class="rounded-full px-2 py-0.5 text-[10px] font-semibold"
											style="background:{portfolio.color}22; color:{portfolio.color}"
										>
											{tag}
										</span>
									{/each}
								</div>

								<!-- Link buttons -->
								<div class="flex w-full flex-col gap-2">
									{#each portfolio.linkItems as link}
										<div
											class="flex items-center gap-2 rounded-xl border px-3 py-2 text-[11px] font-semibold text-foreground"
											style="border-color: {portfolio.color}44"
										>
											<span>{link.icon}</span>
											<span class="flex-1 text-center">{link.label}</span>
										</div>
									{/each}
								</div>

								<!-- Stats -->
								<div class="flex w-full justify-around border-t border-border pt-3 text-center">
									<div>
										<p class="text-xs font-black text-foreground">{portfolio.views}</p>
										<p class="text-[10px] text-muted-foreground">views</p>
									</div>
									<div>
										<p class="text-xs font-black text-foreground">{portfolio.links}</p>
										<p class="text-[10px] text-muted-foreground">links</p>
									</div>
								</div>
							</div>
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
	</div>
</section>
