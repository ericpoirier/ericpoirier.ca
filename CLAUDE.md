# Claude.md — Eric Poirier's Personal Blog

## About This Blog

**Author:** Eric Poirier
**Role:** Web Development Team Lead at the Eclipse Foundation
**Blog name:** Eric Poirier

This is a personal blog covering hands-on experiences, opinions, and practical guides around web development, Drupal, AI experimentation, and developer tooling.

---

## Technical Context

### Blog Stack

* **Static site generator:** Hugo
* **CSS / Grid system:** Tailwind CSS
* **Deployment:** GitHub Pages

### Language

All content is written in English only.

### Primary Topics

* **Drupal** — theming, architecture, contrib modules, site building
* **AI experiments** — real-world usage, tools, prompts, reflections
* **Web development** — HTML, CSS, JavaScript, performance, accessibility
* **Developer tooling** — CLI tools, build systems, editors, productivity

### Assumed Reader

A developer audience — people comfortable with the command line, version control, and modern web workflows. No need to over-explain basic concepts, but avoid assuming niche expertise without context.

---

## Writing Style Guidelines

* **Tone:** Conversational and approachable. Write like you're explaining something to a smart colleague over coffee, not presenting at a conference.
* **Voice:** First person ("I tried...", "In my experience...", "What surprised me was..."). Personal takes are welcome and expected.
* **Structure:** Lead with the problem or context, then the solution, outcome, or insight. Use a short intro — don't bury the point.
* **Code blocks:** Always use fenced code blocks with the correct language tag (e.g., `html`, `bash`, `js`, `php`, `twig`). Drupal-specific examples will frequently involve PHP and Twig — use them without hesitation.
* **Headings:** Keep heading hierarchies shallow and easy to scan.
* **Lists:** Use bullet points for options or features; numbered lists for sequential steps only.
* **Length:** Be as long as necessary to make the point clearly. Avoid unnecessary expansion, repetition, or filler.

### Personal Experience First

Whenever possible, write from direct experience rather than generic best practices.

Prefer:

* What I ran into
* What surprised me
* What worked or didn't work
* Lessons learned from actual usage

Avoid:

* Generic industry advice
* Rewritten documentation
* Abstract theory without practical context

### Opinions & Tradeoffs

When discussing tools, frameworks, workflows, or approaches:

* Explain why a choice was made
* Mention relevant downsides or limitations
* Avoid presenting one solution as universally correct
* Prefer nuanced recommendations over absolutes

### Code Examples

* Prefer complete, runnable examples when practical
* Keep examples minimal but realistic
* Explain non-obvious decisions
* Avoid placeholder code that would not work in practice

---

## AI Content Guidelines

When writing about AI:

* Focus on practical usage and experimentation
* Share real prompts, workflows, and examples when relevant
* Prefer measured observations over bold predictions
* Discuss strengths and weaknesses honestly

Avoid:

* AI hype
* Claims that AI will replace developers
* Generic productivity advice without examples
* Speculation presented as fact

---

## Preferred Post Structure

Use this structure when it fits:

1. Brief context or problem
2. Why it mattered
3. What I tried
4. What worked (or didn't)
5. Key takeaway

Adapt as needed rather than forcing the structure.

---

## SEO & Metadata

* **Titles:** Balanced — clear and human-readable first, keyword-aware second. Avoid clickbait. Aim for 50–60 characters.
* **Meta descriptions:** 1–2 sentences summarizing what the reader will learn or take away. Target 140–155 characters. Write for humans, but include the core topic keyword naturally.
* **Hugo front matter fields to populate:**

```yaml
title: ""
date: YYYY-MM-DD
description: ""
tags: []
draft: false
```

* **Tags:** Use lowercase, hyphenated slugs (e.g., `drupal`, `ai-tools`, `hugo`, `tailwind`, `web-dev`). Keep the tag list small and reusable — avoid one-off tags.

---

## Things Claude Should Not Do

### Voice & Style

* Don't write as a corporate voice. This is a personal blog, not an Eclipse Foundation communication channel.
* Don't speak on behalf of the Eclipse Foundation as an organization unless explicitly asked.
* Don't over-optimize for SEO at the expense of natural, readable prose.
* Don't pad posts with summaries that simply repeat what was already said.
* Don't add unnecessary disclaimers unless the topic genuinely warrants them.

### Accuracy

* Don't fabricate tool behavior, API details, benchmarks, or technical facts.
* If unsure, say so or suggest verifying with official documentation.

### Avoid AI Writing Patterns

Do not use phrases such as:

* "Let's dive in"
* "In today's fast-paced landscape"
* "Whether you're a beginner or an experienced developer"
* "Unlock the power of"
* "Game changer"
* "Revolutionary"
* "Leverage"
* "In conclusion"
* "It's worth noting"
* "As we can see"

Avoid:

* Passive voice
* Marketing-speak
* Excessive hedging unless genuinely uncertain
* Generic introductions that delay the main point
