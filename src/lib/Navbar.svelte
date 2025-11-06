<script>
	import { afterNavigate } from '$app/navigation';

	let isOpen = false;

	// Close mobile menu after navigation
	afterNavigate(() => {
		isOpen = false;
	});

	$: ariaExpanded = isOpen ? 'true' : 'false';
</script>

<nav
	class="fixed inset-x-0 top-0 z-50 bg-linear-to-r from-gray-800 via-gray-800 to-gray-900 text-white shadow-md"
>
	<div class="mx-auto max-w-7xl sm:px-6">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<div class="shrink-0">
				<a
					href="/"
					class="flex items-center gap-2 text-2xl font-extrabold tracking-tight hover:opacity-90"
				>
					<span class="sr-only">Home</span>
					<svg
						class="h-7 w-7 text-white"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path d="M12 2L2 7v6c0 5 4 9 10 9s10-4 10-9V7l-10-5z" fill="currentColor" />
					</svg>
					<span>MyApp</span>
				</a>
			</div>

			<!-- Desktop Menu -->
			<ul class="hidden space-x-4 text-lg md:flex">
				<li>
					<a
						href="/home"
						class="rounded-md px-2 py-2 transition-colors duration-150 hover:bg-gray-800">Home</a
					>
				</li>
				<li>
					<a
						href="/about"
						class="rounded-md px-2 py-2 transition-colors duration-150 hover:bg-gray-800">About</a
					>
				</li>
				<li>
					<a
						href="/services"
						class="rounded-md px-2 py-2 transition-colors duration-150 hover:bg-gray-800"
						>Services</a
					>
				</li>
				<li>
					<a
						href="/contact"
						class="rounded-md px-2 py-2 transition-colors duration-150 hover:bg-gray-800">Contact</a
					>
				</li>
			</ul>

			<!-- Mobile Button -->
			<div class="md:hidden">
				<button
					class="inline-flex items-center justify-center rounded-md p-2 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
					aria-label="Toggle menu"
					aria-expanded={ariaExpanded}
					on:click={() => (isOpen = !isOpen)}
				>
					<svg
						class="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						{#if !isOpen}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							></path>
						{/if}
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if isOpen}
		<div class="md:hidden">
			<div class="space-y-1 bg-gray-900 px-2 pt-2 pb-3">
				<a
					href="/"
					class="block rounded-md px-3 py-2 transition-colors duration-150 hover:bg-gray-800"
					>Home</a
				>
				<a
					href="/about"
					class="block rounded-md px-3 py-2 transition-colors duration-150 hover:bg-gray-800"
					>About</a
				>
				<a
					href="/services"
					class="block rounded-md px-3 py-2 transition-colors duration-150 hover:bg-gray-800"
					>Services</a
				>
				<a
					href="/contact"
					class="block rounded-md px-3 py-2 transition-colors duration-150 hover:bg-gray-800"
					>Contact</a
				>
			</div>
		</div>
	{/if}
</nav>
