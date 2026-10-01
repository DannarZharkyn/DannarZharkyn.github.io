# Dannar Zharkyn — Engineering Portfolio

Scrolling portfolio for Dannar Zharkyn, a Systems Engineering MS candidate at Boston University.

The page includes Introduction / Resume, Projects, About, Skills, Experience, Education, and Contact. Sections without supplied content are clearly marked as forthcoming. GitHub, LinkedIn, and both email addresses are linked; the resume remains unavailable until supplied. No project, experience, or skill claims have been invented.

## Architecture

Astro generates static HTML and CSS for GitHub Pages. Plain CSS and system fonts keep the site lightweight; the starter sends no JavaScript to visitors. There is no backend, UI framework, or external font service. Node.js is used only for development and building.

Project cards and case studies share typed content in `src/data/projects.ts`. A single static route and shared layout generate every project page. No client router or backend is required; direct links and refreshes work on GitHub Pages.

## Local development

Use Node.js 24 LTS (the version is recorded in `.nvmrc`) and npm. With nvm installed, run `nvm install` and `nvm use` first.

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro, usually `http://localhost:4321`.

To build and inspect the production output:

```sh
npm run build
npm run preview
```

The generated site is in `dist/`, which should not be committed. Commit `package-lock.json` so local and CI builds use the same dependency versions.

## Structure

```text
.github/workflows/deploy.yml  Manual GitHub Pages build and deployment
public/                      Future images, resume PDF, and other static assets
src/
  content/projects/          Reserved for future Markdown case studies (empty)
  components/               Shared navigation, project visuals, and content blocks
  layouts/BaseLayout.astro   Shared HTML document and SEO metadata
  layouts/ProjectLayout.astro Reusable engineering case-study layout
  data/projects.ts           Project metadata and optional case-study content
  pages/projects/[slug].astro Static route for each project
  data/profile.ts            Confirmed profile details and optional contact/resume URLs
  pages/index.astro          Scrolling home page with seven sections
  styles/global.css         Responsive base styling
  styles/project.css        Case-study styles
astro.config.mjs            Static output and canonical site URL
package.json                Commands and single direct dependency
package-lock.json           Reproducible dependency versions
.nvmrc                      Node.js version for local use and CI
tsconfig.json               Astro's strict TypeScript defaults
```

Add reusable UI components under `src/components/` when needed. Avoid creating empty navigation destinations before their content exists.

To add contact details, edit `src/data/profile.ts`. For a resume, place the PDF at `public/resume.pdf` and set `resume` to `/resume.pdf`. Empty values display non-interactive coming-soon text rather than broken links. Section copy is in `src/pages/index.astro`.

## Adding and editing projects

1. Add images under `src/assets/projects/` and import them in `src/data/projects.ts`.
2. Add a project entry with a unique URL-safe `slug`, `name`, `description`, confirmed `tags`, `image`, `imageAlt`, and `visual` class. Use an imported image for new projects. The current `null` image is reserved for Urban Mobility’s illustrative intersection diagram.
3. Set `demo` and `repository` only when public links exist. Omit them or use empty strings to hide the external buttons.
4. Fill in `overview.purpose`, `overview.problem`, and `overview.role` when confirmed. Until then, the page shows explicit “To be added” labels.
5. Add `technical`, `process`, and `results` arrays using the `ProjectBlock` interface. Each block supports an optional heading, paragraphs, bullets, and an imported image with alt text and a caption. Omitted/empty sections show labeled placeholders.
6. Run `npm run build` and preview the page. The homepage card and `/projects/<slug>/` page are generated automatically—no new route or layout file needed.

Example block structure (replace the example text with verified content before publishing):

```ts
technical: [
  {
    title: 'System architecture',
    paragraphs: ['Verified explanation of the architecture.'],
    bullets: ['A documented engineering decision.'],
    // image: importedDiagram,
    // imageAlt: 'Describe the diagram for screen readers.',
    // caption: 'Explain what the diagram shows.',
  },
],
```

The shared `ProjectLayout.astro` provides Overview, Technical Approach, Process / Development, Results / Impact, conditional external buttons, and “Back to Projects” navigation. Existing descriptions and tags are retained; detailed technical claims, roles, and results must be supplied before replacing placeholders. The empty `src/content/projects/` folder is reserved for a possible later Markdown workflow and is not currently used.

## GitHub Pages deployment

Repository: `DannarZharkyn/DannarZharkyn.github.io` (public).
Intended site URL: `https://dannarzharkyn.github.io/`.

1. Push the project to the repository's `main` branch.
2. In **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
3. In **Actions**, select **Deploy portfolio to GitHub Pages**, then **Run workflow** on `main`.
4. Wait for both the build and deploy jobs to succeed. The deploy job reports the live URL.

Deployment is intentionally manual for now; pushing commits does not publish the site. To deploy automatically later, add `push: { branches: [main] }` under the workflow's `on` key, alongside `workflow_dispatch`.

Because the repository uses the special `<username>.github.io` name, no `base` prefix is needed. If moving to a project repository, configure Astro's `base` with the repository name and prefix internal links and public asset URLs with `import.meta.env.BASE_URL`.

## Accessibility and SEO

The starter includes an English document language, viewport metadata, a descriptive page title, description, canonical URL, semantic main landmark, one primary heading, responsive text, and contrasting colors. Add meaningful alt text, visible keyboard focus, page-specific metadata, and navigation semantics as new content and controls are introduced.

## References

- [Astro GitHub Pages deployment](https://docs.astro.build/en/guides/deploy/github/)
- [Astro content collections](https://docs.astro.build/en/guides/content-collections/)

Design references for later exploration: [Elisa Jee](https://elisakjee.github.io/) for a project-focused structure and [Ozan Ekame](https://ozanekame.com/) for technical depth. No source code or portfolio content has been copied.
