import type { PageLoad } from './$types';
import type { Project } from '$lib/types/project';
import projectsData from '$lib/data/projects.json';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
    const projects = projectsData as Project[];
    const project = projects.find(p => p.slug === params.slug);

    if (!project) {
        throw error(404, 'Project not found');
    }

    if (!project.privacyPolicy) {
        throw error(404, 'Privacy policy not available for this project');
    }

    return {
        project
    };
};

// Pre-render all privacy policy pages at build time
export const prerender = true;
