# Dannar Zharkyn — Engineering Portfolio

Scrolling portfolio for Dannar Zharkyn, a Systems Engineering MS candidate at Boston University.

The page includes Introduction / Resume, Projects, Experience, Skills, Education, and Contact. Sections without supplied content are clearly marked as forthcoming. GitHub is linked; resume, email, and LinkedIn remain unavailable until supplied. No project, experience, or skill claims have been invented.

## Architecture

Astro generates static HTML and CSS for GitHub Pages. Plain CSS and system fonts keep the site lightweight; the starter sends no JavaScript to visitors. There is no backend, UI framework, or external font service. Node.js is used only for development and building.

Future case studies will use Markdown and a shared Astro layout. This avoids duplicated page markup while keeping project writing separate from presentation. A content schema and project routes will be added with the first real project, when its metadata requirements are known.

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
  layouts/BaseLayout.astro   Shared HTML document and SEO metadata
  data/profile.ts            Confirmed profile details and optional contact/resume URLs
  pages/index.astro          Six-section scrolling home page
  styles/global.css         Responsive base styling
astro.config.mjs            Static output and canonical site URL
package.json                Commands and single direct dependency
package-lock.json           Reproducible dependency versions
.nvmrc                      Node.js version for local use and CI
tsconfig.json               Astro's strict TypeScript defaults
```

Add reusable UI components under `src/components/` when needed. Avoid creating empty navigation destinations before their content exists.

To add contact details, edit `src/data/profile.ts`. For a resume, place the PDF at `public/resume.pdf` and set `resume` to `/resume.pdf`. Empty values display non-interactive coming-soon text rather than broken links. Section copy is in `src/pages/index.astro`.

## Future project workflow

When the first case study is ready, add a Markdown file under `src/content/projects/`, define its metadata in an Astro content collection, and add a shared case-study layout and `src/pages/projects/[slug].astro` route. Later projects can then reuse that pipeline by adding Markdown and assets.

Each case study will follow:

1. Problem
2. My Role
3. Process
4. Engineering/Design Decisions
5. Implementation
6. Results

These are planned sections, not claims about completed work. Add only supplied facts and evidence.

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
