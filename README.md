# ericpoirier.ca

Personal blog of Eric Poirier — Web Development Team Lead at the Eclipse Foundation. Built with Hugo and the custom `pixel` theme: black and white, monospace typography, brutalist-minimal aesthetic.

Live at [ericpoirier.ca](https://ericpoirier.ca), deployed via GitHub Pages.

## Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) v0.147+
- [Node.js](https://nodejs.org/) v20+ (CI uses the version in `.nvmrc`)

## Local development

```bash
npm install
npm run dev
```

This compiles the Less stylesheet in watch mode **and** starts `hugo server -D` (drafts included) at [http://localhost:1313](http://localhost:1313).

> **Note:** the stylesheet at `themes/pixel/static/css/main.css` is build output (gitignored). Running `hugo server` alone on a fresh clone gives you an unstyled site — use `npm run dev`, or run `npm run build:css` once first.

## Writing a new article

```bash
hugo new articles/my-post-slug.md
```

Articles live in `content/articles/`. The archetype pre-fills the front matter:

```yaml
title: ""
date: YYYY-MM-DD
description: ""
tags: []
draft: true
```

Set `draft: false` when ready to publish. Writing style and SEO guidelines are in [`CLAUDE.md`](CLAUDE.md).

## Build

```bash
npm run build
```

Compiles the CSS, then runs `hugo --minify`. Output goes to `./public/` — never commit it; deployment is handled by CI.

## Deployment

- Pushing to `main` triggers `.github/workflows/deploy.yml`: build, internal link check, deploy to GitHub Pages. The custom domain is set by `static/CNAME`.
- Pull requests and non-`main` pushes run `.github/workflows/check.yml`: same build plus a [lychee](https://github.com/lycheeverse/lychee) internal link check, no deploy.
- Both workflows can be run manually from the Actions tab (`workflow_dispatch`).

## Theme notes

The `pixel` theme lives in `themes/pixel/` and is built from scratch — no base theme dependency.

- **Palette**: `#1d1d1d` (near-black) on `#e6e5e2` (off-white), defined as variables at the top of `main.less`. The homepage is light; inner pages render inverted via the `page-inverted` body class.
- **Typography**: Space Mono from Google Fonts, loaded via `<link>` in `partials/head.html`.
- **CSS pipeline**: Less. Edit `themes/pixel/assets/less/main.less`; it compiles to `themes/pixel/static/css/main.css` (gitignored).
- **JavaScript**: a few lines in `themes/pixel/static/js/main.js` (hero cursor blink). Smooth scrolling is pure CSS (`scroll-behavior`).
- **Images**: the hero pixel-art figure is a WebP in `themes/pixel/assets/images/`; footer social icons are inline SVG.

## License

Code and theme are MIT licensed (see [LICENSE](LICENSE)). Article content under `content/` is © Eric Poirier.
