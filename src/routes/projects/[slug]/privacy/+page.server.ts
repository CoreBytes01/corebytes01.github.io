import type { EntryGenerator } from './$types';
import projectsData from '$lib/data/projects.json';

// Tell SvelteKit which privacy policy pages to prerender
export const entries: EntryGenerator = () => {
    return projectsData
        .filter(project => project.privacyPolicy) // Only projects with privacy policies
        .map(project => ({
            slug: project.slug
        }));
};
