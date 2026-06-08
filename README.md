# ericpoirier.ca

Personal blog of Eric Poirier — Web Development Team Lead at the Eclipse Foundation. Built with Hugo and the custom `pixel` theme: black and white only, monospace typography, CSS pixel art, brutalist-minimal aesthetic.

## Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) v0.147+
- [Node.js](https://nodejs.org/) v20+
- npm v9+

## Local development

```bash
npm install
hugo server -D
```

Open [http://localhost:1313](http://localhost:1313).

The `-D` flag includes draft posts. Tailwind CSS is processed via the Hugo PostCSS pipeline — changes to `themes/pixel/assets/css/main.css` hot-reload automatically.

## New post

```bash
hugo new posts/my-post-slug.md
```

Edit the generated file in `content/posts/`. Set `draft: false` when ready to publish.

## Build

```bash
hugo --minify
```

Output is written to `./public/`. Do not commit the `public/` directory — GitHub Actions handles deployment.

## GitHub Pages setup

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically

The site will be available at `https://<username>.github.io` after the first successful deploy.

## Theme notes

The `pixel` theme lives in `themes/pixel/` and is built from scratch — no base theme dependency. Key design decisions:

- **Color**: `#0a0a0a` (near-black) and `#f0f0f0` (off-white) only. Single accent: black background on inline `<span class="highlight-tag">` elements.
- **Typography**: Space Mono from Google Fonts, loaded via `<link>` in `head.html`.
- **Pixel art**: All decorative elements are pure CSS using the `box-shadow` grid technique. No images, no SVGs, no icon fonts.
- **CSS pipeline**: Tailwind CSS v4 via PostCSS, processed by Hugo's asset pipeline. Edit `themes/pixel/assets/css/main.css`.
- **JavaScript**: ~60 lines in `themes/pixel/static/js/main.js`. Three features: cursor blink on hero headline, pixel coder animation, smooth scroll for anchors.
