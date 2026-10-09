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

Upload the PDF or notebook into its edition’s existing folder, then add a link to the lecture entry in `_data/courses.json`. Use the existing filename and URL-encode spaces and punctuation:

```json
{
  "title": "Foundation models",
  "pillar": "develop",
  "duration": "1.5h",
  "links": [
    { "label": "Slides", "url": "/2025/Foundation%20models.pdf" }
  ]
}
```

The example path illustrates the format; upload the actual file before using its URL. Supported pillar values are `overview`, `design`, `develop`, `manage` and `communicate`. Leave `links` empty for a topic whose materials are unavailable. The website remains fully readable with JavaScript disabled.

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

The 2022 model/data-centric slide file referenced in the old page is absent from the repository. That topic remains visible with “Slides unavailable”. The published 2025–2026 homepage contains no slide downloads; its listed topics remain visible while links can be added as material becomes available.

Fonts are served locally. Their SIL Open Font License notices are included in `assets/fonts/`.
