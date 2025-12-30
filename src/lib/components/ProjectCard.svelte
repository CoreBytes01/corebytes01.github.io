<script lang="ts">
	import type { Project } from "$lib/types/project";

	export let project: Project;
</script>

<a href="/projects/{project.slug}" class="project-card-link">
	<div class="project-card">
		{#if project.status && project.status.toLowerCase() !== "active"}
			<span class="project-status">{project.status}</span>
		{/if}
		<div class="project-title-row">
			<h3>{project.name}</h3>
			{#if project.year}
				<span class="project-year">{project.year}</span>
			{/if}
		</div>
		<p class="project-category">{project.category}</p>
		<p class="project-description">{project.description}</p>
	</div>
</a>

<style>
	.project-card-link {
		text-decoration: none;
		color: inherit;
		display: block;
	}
</style>
