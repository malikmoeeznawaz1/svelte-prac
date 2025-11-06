# Svelte Practice Project

This repository is created for practice and learning. It contains a small SvelteKit app wired with Tailwind CSS and several example routes/components to help you experiment with common SvelteKit concepts.

Implemented concepts:

- SvelteKit routing and layouts
	- Root layout in `src/routes/+layout.svelte` (app-level navbar + main)
	- Route-level layout in `src/routes/about/+layout.svelte` (applies `bg-amber-200` to `/about` and nested routes)
- Nested routes and dynamic segments
	- `src/routes/about/user/+page.svelte` and `src/routes/about/user/[slug]/+page.svelte` examples
- Data loading on the server (load)
	- `load` function example using fetch to get users from an API (`+page.js` in the user route)
- Reusable components
	- `src/lib/Navbar.svelte` — a shared navbar component used by the root layout
- Tailwind CSS integration
	- `src/app.css` imports Tailwind and the project uses utility classes across components
- Responsive design and accessibility
	- Navbar has a responsive menu (desktop + mobile) and uses `aria-expanded` on the toggle
	- Focus/hover states and transitions on interactive elements
- Client navigation and page lifecycle
	- `afterNavigate` used to close the mobile menu after navigation
- Layout and spacing patterns
	- Site container (`max-w-5xl mx-auto px-4`) applied at the root layout so pages align
	- Fixed navbar offset handled with `pt-16` on the root `<main>` so content isn't hidden behind the nav
- Background & layout safety
	- Route-level backgrounds use `min-h-screen` (not `h-screen`/`w-screen`) to avoid overflow and flicker
- Defensive data handling
	- Pages guard against missing data (e.g., `data?.users ?? []`) to avoid runtime errors

Quick start (PowerShell)
```powershell
npm install
npm run dev

# Open the URL printed by the dev server (usually http://localhost:5173)
```

Notes
- This project is for practice only. Feel free to modify or remove parts as you learn.
- If you'd like, I can expand this README with a file map, screenshots, or notes about further exercises (testing, SSR vs CSR, form handling, etc.).

Enjoy experimenting!

