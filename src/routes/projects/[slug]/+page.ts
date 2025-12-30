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

    return {
        project
    };
};

// Pre-render all project pages at build time
export const prerender = true;
