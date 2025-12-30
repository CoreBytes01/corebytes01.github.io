<script lang="ts">
	import type { Project } from '$lib/types/project';
	import ProjectCard from './ProjectCard.svelte';
	import projectsData from '$lib/data/projects.json';

	const projects = projectsData as Project[];
</script>

<section id="projects" class="projects-section">
	<div class="container">
		<h2 class="section-title">Our Projects</h2>
		<div class="projects-grid">
			{#if projects.length === 0}
				<p class="loading">No projects yet. Check back soon!</p>
			{:else}
				{#each projects as project (project.id)}
					<ProjectCard {project} />
				{/each}
			{/if}
		</div>
	</div>
</section>
