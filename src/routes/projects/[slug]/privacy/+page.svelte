<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
    $: project = data.project;
    $: privacyPolicy = project.privacyPolicy;

    // Function to convert URLs in text to clickable links
    function linkifyText(text: string): string {
        const urlPattern = /(https?:\/\/[^\s]+)/g;
        return text.replace(
            urlPattern,
            '<a href="$1" target="_blank" rel="noopener noreferrer" class="content-link">$1</a>',
        );
    }
</script>

<svelte:head>
    <title>Privacy Policy - {project.name} | CoreBytes01</title>
    <meta name="description" content="Privacy policy for {project.name}" />
</svelte:head>

<div class="privacy-policy">
    <div class="container">
        <div class="privacy-header">
            <h1>Privacy Policy</h1>
            <p class="privacy-subtitle">{project.name}</p>
            {#if privacyPolicy}
                <p class="last-updated">
                    Last Updated: {privacyPolicy.lastUpdated}
                </p>
            {/if}
        </div>

        <div class="privacy-content">
            {#if privacyPolicy && privacyPolicy.sections}
                {#each privacyPolicy.sections as section}
                    <section class="privacy-section">
                        <h2>{section.title}</h2>
                        <p>{@html linkifyText(section.content)}</p>
                    </section>
                {/each}
            {:else}
                <p>Privacy policy content will be available soon.</p>
            {/if}
        </div>

        <div class="privacy-footer">
            <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
            </p>
            <a
                href="mailto:corebytes01+support@gmail.com"
                class="privacy-contact">corebytes01+support@gmail.com</a
            >
        </div>

        <div class="back-links">
            <a href="/projects/{project.slug}" class="back-link"
                >← Back to {project.name}</a
            >
            <a href="/#projects" class="back-link">← Back to All Projects</a>
        </div>
    </div>
</div>

<style>
    .privacy-policy {
        padding: var(--spacing-xl) 0;
        min-height: 70vh;
    }

    .privacy-header {
        text-align: center;
        margin-bottom: var(--spacing-xl);
        padding-bottom: var(--spacing-lg);
        border-bottom: 2px solid var(--border-color);
    }

    .privacy-header h1 {
        font-size: clamp(2.5rem, 5vw, 3.5rem);
        font-weight: var(--font-weight-bold);
        margin-bottom: var(--spacing-sm);
    }

    .privacy-subtitle {
        font-size: 1.5rem;
        color: var(--text-secondary);
        margin-bottom: var(--spacing-sm);
    }

    .last-updated {
        color: var(--text-secondary);
        font-size: 0.95rem;
        font-style: italic;
    }

    .privacy-content {
        max-width: 800px;
        margin: 0 auto;
    }

    .privacy-section {
        margin-bottom: var(--spacing-lg);
    }

    .privacy-section h2 {
        font-size: 1.8rem;
        font-weight: var(--font-weight-semibold);
        margin-bottom: var(--spacing-md);
        color: var(--text-primary);
    }

    .privacy-section p {
        font-size: 1.1rem;
        line-height: 1.8;
        color: var(--text-secondary);
        margin-bottom: var(--spacing-sm);
    }

    :global(.content-link) {
        color: var(--accent-color);
        text-decoration: underline;
        font-weight: var(--font-weight-medium);
        transition: opacity var(--transition-fast);
    }

    :global(.content-link:hover) {
        opacity: 0.7;
    }

    .privacy-footer {
        max-width: 800px;
        margin: var(--spacing-xl) auto;
        padding: var(--spacing-md);
        background-color: var(--bg-secondary);
        border: 1px solid var(--border-color);
        text-align: center;
    }

    .privacy-footer p {
        margin-bottom: var(--spacing-sm);
        color: var(--text-secondary);
    }

    .privacy-contact {
        color: var(--accent-color);
        text-decoration: none;
        font-weight: var(--font-weight-semibold);
        transition: color var(--transition-fast);
    }

    .privacy-contact:hover {
        color: var(--text-primary);
    }

    .back-links {
        max-width: 800px;
        margin: var(--spacing-xl) auto 0;
        padding-top: var(--spacing-lg);
        border-top: 1px solid var(--border-color);
        display: flex;
        gap: var(--spacing-md);
        flex-wrap: wrap;
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
        .back-links {
            flex-direction: column;
        }
    }
</style>
