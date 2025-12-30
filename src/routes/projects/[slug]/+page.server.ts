import type { EntryGenerator } from './$types';
import projectsData from '$lib/data/projects.json';

// Tell SvelteKit which pages to prerender
export const entries: EntryGenerator = () => {
    return projectsData.map(project => ({
        slug: project.slug
    }));
};
