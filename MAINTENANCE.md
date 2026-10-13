# ADSP website maintenance

The site uses GitHub Pages and Jekyll with a shared layout. There is no JavaScript framework, package manager for frontend assets or custom Jekyll plugin.

## Where to edit

| Content | File |
| --- | --- |
| Each edition’s overview | `README.md` or `2021/README.md` through `2025/README.md` |
| Lecture topics, file links, projects, readings, learning outcomes and teaching teams | `_data/courses.json` |
| Edition selector and archive links | `_data/editions.json` |
| Four foundation descriptions for 2025–2026 and 2026–2027 | `_data/foundations.json` |
| Earlier editions’ four pillar descriptions | `_data/pillars.json` |
| Current and archived project mindset diagrams | `_includes/project-mindset.html` |
| Selected archive projects shown on pages without their own project list | `_data/showcase.json` |
| Page structure | `_layouts/course.html` |
| Navigation, footer and project cards | `_includes/` |
| Colours, typography and responsive layout | `assets/css/site.css` |
| Shared logo display | `_includes/brand-icon.html` and `assets/images/adsp-logo.png` |
| Browser icon and theme colour | `assets/images/favicon.svg` and `_layouts/default.html` |
| Search, filters and mobile navigation | `assets/js/site.js` |

JSON keys for editions are strings, such as `"2026"`. The homepage is the 2026–2027 edition. The 2025–2026 overview is archived at `/2025/`, alongside its existing materials. Update both `_data/courses.json` and `_data/editions.json` when changing the current edition. Hours and credits appear only where the edition supplies them.

The 2025–2026 and 2026–2027 mindsets use Design → Develop → Communicate, with Manage spanning all three through planning, coordination, resources, KPIs and risks. Set `mindset: "foundations"` on each relevant course so its hero diagram, learning path and lecture filter labels retain this model when the edition moves into the archive. Earlier editions retain their four-pillar framework. The lecture data’s `pillar` key remains compatible with both frameworks.

The 2026–2027 syllabus contains 16 topics totalling 30 lecture hours and three laboratory activity types totalling 50 hours. Topic order and durations follow the supplied syllabus. Individual laboratory durations are unspecified. Lecture links remain empty until this edition's slides arrive; keep new files under `2026/` and attach each one to its corresponding topic. Add file codes when the supplied filenames establish them.

The 2026–2027 `value_proposition` stores the overview heading as `lead` and `focus`: “Learn by building innovative AI solutions.” Its `intro`, `description`, learning outcomes and overview develop the innovation focus. The `showcase_edition: "2025"` setting shows existing 2025–2026 projects with their original edition labels until the new edition has its own projects.

## Add a lecture download

The 2025–2026 materials live in `2025/`: 27 PDF slide decks and 10 Jupyter notebooks, grouped under lecture codes L01–L27 in `_data/courses.json`. The `code` field preserves the uploaded numbering when filtering or adding multiple resources. L15 includes both the VLM transfer-learning and version-control decks; L22 has a notebook only. Keep the L07 and L08 IMDb notebooks at their respective paths, even though their contents match.

Upload the PDF or notebook into its edition’s existing folder, then add a link to the lecture entry in `_data/courses.json`. Use the existing filename and URL-encode spaces and punctuation:

```json
{
  "code": "L05",
  "title": "Foundation models",
  "pillar": "develop",
  "links": [
    { "label": "Slides", "url": "/2025/L05%20-%20ADSP%20-%20Foundation%20models.pdf", "type": "slides" }
  ]
}
```

Use `type: "notebook"` for a notebook download, and a distinct label and `title` for each resource when a lecture has several files. Update the edition’s `material_counts` totals when adding materials. Supported pillar values are `overview`, `design`, `develop`, `manage` and `communicate`. Leave `links` empty for a topic whose materials are unavailable. The website remains fully readable with JavaScript disabled.

## Local preview

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`. The Gemfile uses the GitHub Pages bundle for parity with the hosted site. The existing Pages hosting configuration can continue building from the repository branch.

## What this redesign preserves

The homepage, `/2021/`, `/2022/`, `/2023/` and `/2024/` retain their paths. The previous homepage is now available at `/2025/`. PDFs, notebooks, project files and repository links keep their identities. Legacy section anchors are retained. Each archived edition keeps its original teaching team, learning outcomes, prerequisites and reading list.

Several old lecture links have been repaired to match files that already exist in the repository, including the 2021 model/data-centric slides, 2022 human-centred design slides and sentiment-analysis notebook. The 2024 public-communication entry now links to Giuseppe Tipaldo’s existing social-research and communication slides.

The 2022 model/data-centric slide file referenced in the old page is absent from the repository. That topic remains visible with “Slides unavailable”. The 2025–2026 archive indexes all 37 materials supplied in the two batches, using the uploaded filenames to determine lecture order even when a PDF cover has an older lecture number.

Fonts are served locally. Their SIL Open Font License notices are included in `assets/fonts/`.

## Logo and colour palette

The supplied transparent logo is preserved byte for byte in `assets/images/adsp-logo.png`. `_includes/brand-icon.html` displays that artwork in both the header and footer, using an SVG viewport to fit its transparent margins. The footer uses a white backing so the original blue remains visible. The self-contained favicon embeds the same PNG; it does not redraw or recolour the mark.

The shared stylesheet defines the logo's sampled blue (`--brand-blue: #013870`) and orange (`--brand-orange: #fd7d01`), with related blue and warm orange surfaces. All editions and the 404 page use this palette. Orange buttons use darker blue text, while text links and category labels use darker colours for readable contrast. When replacing the logo, update its viewport, embedded favicon, palette variables and browser theme colour together.
