# ADSP website maintenance

The site uses GitHub Pages and Jekyll with a shared layout. There is no JavaScript framework, package manager for frontend assets or custom Jekyll plugin.

## Where to edit

| Content | File |
| --- | --- |
| Each edition’s overview | `README.md` or `2021/README.md` through `2024/README.md` |
| Lecture topics, file links, projects, readings, learning outcomes and teaching teams | `_data/courses.json` |
| Edition selector and archive links | `_data/editions.json` |
| Current edition’s four foundation descriptions | `_data/foundations.json` |
| Archived editions’ four pillar descriptions | `_data/pillars.json` |
| Current and archived project mindset diagrams | `_includes/project-mindset.html` |
| Selected archive projects shown on pages without their own project list | `_data/showcase.json` |
| Page structure | `_layouts/course.html` |
| Navigation, footer and project cards | `_includes/` |
| Colours, typography and responsive layout | `assets/css/site.css` |
| Search, filters and mobile navigation | `assets/js/site.js` |

JSON keys for editions are strings, such as `"2025"`. The homepage remains the published 2025–2026 edition; a future academic year can be added separately. Hours and credits appear only where the original edition supplies them.

The 2025–2026 mindset uses Design → Develop → Communicate, with Manage spanning all three through planning, coordination, resources, KPIs and risks. The hero diagram, learning path and lecture filter labels use this foundation model for the current edition. Earlier editions retain their four-pillar framework. The lecture data’s `pillar` key remains compatible with both frameworks.

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

The homepage, `/2021/`, `/2022/`, `/2023/` and `/2024/` retain their paths. PDFs, notebooks, project files and repository links keep their identities. Legacy section anchors are retained. Each archived edition keeps its original teaching team, learning outcomes, prerequisites and reading list.

Several old lecture links have been repaired to match files that already exist in the repository, including the 2021 model/data-centric slides, 2022 human-centred design slides and sentiment-analysis notebook. The 2024 public-communication entry now links to Giuseppe Tipaldo’s existing social-research and communication slides.

The 2022 model/data-centric slide file referenced in the old page is absent from the repository. That topic remains visible with “Slides unavailable”. The 2025–2026 homepage indexes all 37 materials supplied in the two batches, using the uploaded filenames to determine lecture order even when a PDF cover has an older lecture number.

Fonts are served locally. Their SIL Open Font License notices are included in `assets/fonts/`.
