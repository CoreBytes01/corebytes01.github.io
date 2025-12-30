<script lang="ts">
	import "../app.css";

	let navToggle = false;

	function toggleNav() {
		navToggle = !navToggle;
	}

	function closeNav() {
		navToggle = false;
	}

	function handleOutsideClick(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (
			navToggle &&
			!target.closest(".nav-links") &&
			!target.closest(".nav-toggle")
		) {
			closeNav();
		}
	}
</script>

<svelte:window on:click={handleOutsideClick} />

<!-- Navigation -->
<nav class="navbar">
	<div class="container">
		<a href="/" class="logo-link">
			<img
				src="/assets/images/logo.png"
				alt="CoreBytes01 Logo"
				class="nav-logo"
			/>
			<span class="logo-text">CoreBytes01</span>
		</a>
		<button
			class="nav-toggle"
			class:active={navToggle}
			on:click={toggleNav}
			aria-label="Toggle navigation menu"
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
		<ul class="nav-links desktop-nav">
			<li>
				<a href="/#about" class="nav-link" on:click={closeNav}>About</a>
			</li>
			<li>
				<a href="/#projects" class="nav-link" on:click={closeNav}
					>Projects</a
				>
			</li>
			<li>
				<a href="/#contact" class="nav-link" on:click={closeNav}
					>Contact</a
				>
			</li>
		</ul>
	</div>
	<ul class="nav-links mobile-nav" class:active={navToggle}>
		<li>
			<a href="/#about" class="nav-link" on:click={closeNav}>About</a>
		</li>
		<li>
			<a href="/#projects" class="nav-link" on:click={closeNav}
				>Projects</a
			>
		</li>
		<li>
			<a href="/#contact" class="nav-link" on:click={closeNav}>Contact</a>
		</li>
	</ul>
</nav>

<!-- Main Content -->
<main>
	<slot />
</main>

<!-- Footer -->
<footer class="footer">
	<div class="container">
		<p>
			&copy; 2025 CoreBytes01. Building the future, one utility at a time.
		</p>
	</div>
</footer>
