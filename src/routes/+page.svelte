<script lang="ts">
	import Hero from "$lib/components/Hero.svelte";
	import About from "$lib/components/About.svelte";
	import ProjectsGrid from "$lib/components/ProjectsGrid.svelte";
	import Contact from "$lib/components/Contact.svelte";
</script>

<svelte:head>
	<title>CoreBytes01 | Simple & Feature-Rich Development Utilities</title>
	<meta
		name="description"
		content="CoreBytes01 - Building simple, feature-rich software development utilities"
	/>
</svelte:head>

<Hero />
<About />
<ProjectsGrid />
<Contact />
