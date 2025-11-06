<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

<!-- add top padding equal to navbar height (h-16) so page content is not hidden under fixed navbar -->
<main class="pt-16">
	{@render children()}
</main>
