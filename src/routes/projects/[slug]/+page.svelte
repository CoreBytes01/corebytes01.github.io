<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
    $: project = data.project;
</script>

<svelte:head>
    <title>{project.name} | CoreBytes01</title>
    <meta name="description" content={project.description} />
</svelte:head>

<div class="project-detail">
    <div class="container">
        <!-- Project Header -->
        <div class="project-header">
            {#if project.logo}
                <img
                    src={project.logo}
                    alt="{project.name} logo"
                    class="project-logo"
                />
            {/if}
            <div class="project-header-content">
                <div class="project-title-row">
                    <h1 class="project-title">{project.name}</h1>
                    {#if project.year}
                        <span class="project-year-badge">{project.year}</span>
                    {/if}
                </div>
                <div class="project-meta">
                    <p class="project-category">{project.category}</p>
                    {#if project.status && project.status.toLowerCase() !== "active"}
                        <span class="project-status-badge"
                            >{project.status}</span
                        >
                    {/if}
                </div>
            </div>
        </div>

        <!-- Project Description -->
        <div class="project-content">
            <section class="project-section">
                <h2>About</h2>
                <p class="project-detailed-description">
                    {project.detailedDescription || project.description}
                </p>
            </section>

            <!-- Features -->
            {#if project.features && project.features.length > 0}
                <section class="project-section">
                    <h2>Features</h2>
                    <ul class="project-features-list">
                        {#each project.features as feature}
                            <li>{feature}</li>
                        {/each}
                    </ul>
                </section>
            {/if}

            <!-- Screenshots -->
            {#if project.screenshots && project.screenshots.length > 0}
                <section class="project-section">
                    <h2>Screenshots</h2>
                    <div class="screenshots-grid">
                        {#each project.screenshots as screenshot, i}
                            <img
                                src={screenshot}
                                alt="{project.name} screenshot {i + 1}"
                                class="screenshot"
                            />
                        {/each}
                    </div>
                </section>
            {/if}

            <!-- Links -->
            <section class="project-section">
                <h2>Links</h2>
                <div class="project-detail-links">
                    {#if project.github && project.github.trim() !== ""}
                        <a
                            href={project.github}
                            class="detail-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                />
                            </svg>
                            View on GitHub
                        </a>
                    {/if}
                    {#if project.playstore && project.playstore.trim() !== ""}
                        <a
                            href={project.playstore}
                            class="detail-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M1.6,0L14.5,12.9L1.6,25.8C1.2,25.5,0.9,25,0.9,24.4V1.4C0.9,0.8,1.2,0.3,1.6,0z M16.6,11L3.3,0.2 c0.1,0,0.3,0,0.4,0.1l14.9,8.4L16.6,11z M3.7,25.6L16.9,15l2,1.9L4,25.4C3.9,25.5,3.8,25.6,3.7,25.6z M20.4,15.2l-2.5-1.4 l-2.3,2.1l2.3,2.1l2.5-1.4c0.8-0.5,0.8-1.6,0-2.1V15.2z"
                                />
                            </svg>
                            Get on Play Store
                        </a>
                    {/if}
                    {#if project.website && project.website.trim() !== ""}
                        <a
                            href={project.website}
                            class="detail-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path
                                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                                ></path>
                            </svg>
                            Visit Website
                        </a>
                    {/if}
                    {#if project.privacyPolicy}
                        <a
                            href="/projects/{project.slug}/privacy"
                            class="detail-link"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <rect
                                    x="3"
                                    y="11"
                                    width="18"
                                    height="11"
                                    rx="2"
                                    ry="2"
                                ></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            Privacy Policy
                        </a>
                    {/if}
                </div>
            </section>
        </div>

        <!-- Back to Projects -->
        <div class="back-link-container">
            <a href="/#projects" class="back-link">← Back to Projects</a>
        </div>
    </div>
</div>

<style>
    .project-detail {
        padding: var(--spacing-xl) 0;
        min-height: 60vh;
    }

    .project-header {
        display: flex;
        align-items: center;
        gap: var(--spacing-md);
        margin-bottom: var(--spacing-lg);
        padding-bottom: var(--spacing-lg);
        border-bottom: 2px solid var(--border-color);
    }

    .project-logo {
        width: 120px;
        height: 120px;
        object-fit: contain;
        border: 1px solid var(--border-color);
        padding: var(--spacing-sm);
    }

    .project-header-content {
        flex: 1;
    }

    .project-title-row {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        margin-bottom: var(--spacing-xs);
        flex-wrap: wrap;
    }

    .project-title {
        font-size: clamp(2rem, 4vw, 3rem);
        font-weight: var(--font-weight-bold);
        margin: 0;
        font-family: var(--font-display);
    }

    .project-year-badge {
        display: inline-block;
        padding: 6px 16px;
        background-color: var(--accent-color);
        color: var(--bg-primary);
        font-size: 1rem;
        font-weight: var(--font-weight-bold);
        font-family: var(--font-display);
    }

    .project-meta {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        flex-wrap: wrap;
    }

    .project-meta .project-category {
        margin: 0;
        color: var(--text-secondary);
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: var(--font-weight-medium);
    }

    .project-status-badge {
        display: inline-block;
        padding: 4px 12px;
        background-color: var(--bg-secondary);
        border: 1px solid var(--border-color);
        font-size: 0.85rem;
        font-weight: var(--font-weight-medium);
    }

    .project-content {
        max-width: 900px;
    }

    .project-section {
        margin-bottom: var(--spacing-lg);
    }

    .project-section h2 {
        font-size: 1.8rem;
        font-weight: var(--font-weight-semibold);
        margin-bottom: var(--spacing-md);
        position: relative;
        display: inline-block;
        font-family: var(--font-display);
    }

    .project-section h2::after {
        content: "";
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 60px;
        height: 3px;
        background-color: var(--accent-color);
    }

    .project-detailed-description {
        font-size: 1.1rem;
        line-height: 1.8;
        color: var(--text-secondary);
    }

    .project-features-list {
        list-style: none;
        padding: 0;
    }

    .project-features-list li {
        padding: var(--spacing-sm) 0;
        padding-left: var(--spacing-md);
        position: relative;
        color: var(--text-secondary);
        line-height: 1.6;
    }

    .project-features-list li::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: var(--accent-color);
        font-weight: var(--font-weight-bold);
        font-size: 1.2rem;
    }

    .screenshots-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: var(--spacing-md);
    }

    .screenshot {
        width: 100%;
        height: auto;
        border: 1px solid var(--border-color);
        transition: transform var(--transition-normal);
        cursor: pointer;
    }

    .screenshot:hover {
        transform: scale(1.02);
    }

    .project-detail-links {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-sm);
    }

    .detail-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: var(--spacing-sm) var(--spacing-md);
        background-color: var(--card-bg);
        border: 2px solid var(--border-color);
        text-decoration: none;
        color: var(--text-primary);
        font-weight: var(--font-weight-semibold);
        transition: all var(--transition-fast);
    }

    .detail-link:hover {
        background-color: var(--accent-color);
        color: var(--bg-primary);
        border-color: var(--accent-color);
        transform: translateY(-2px);
    }

    .detail-link svg {
        width: 20px;
        height: 20px;
    }

    .back-link-container {
        margin-top: var(--spacing-xl);
        padding-top: var(--spacing-lg);
        border-top: 1px solid var(--border-color);
    }

    .back-link {
        color: var(--text-secondary);
        text-decoration: none;
        font-weight: var(--font-weight-medium);
        transition: color var(--transition-fast);
    }

    .back-link:hover {
        color: var(--accent-color);
    }

    @media (max-width: 768px) {
        .project-header {
            flex-direction: column;
            text-align: center;
        }

        .screenshots-grid {
            grid-template-columns: 1fr;
        }

        .project-detail-links {
            flex-direction: column;
        }

        .detail-link {
            width: 100%;
            justify-content: center;
        }
    }
</style>
