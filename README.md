# Amel Abdelraheem — academic website

A simple, responsive academic homepage for GitHub Pages. The homepage uses plain
HTML and CSS with no build step, JavaScript, external fonts, or runtime dependencies.

## Edit the site

- `index.html`: biography, profile links, publications, and contact details.
- `assets/css/academic.css`: colors, typography, spacing, and mobile layout.
- `.nojekyll`: keeps GitHub Pages serving the files directly.

Publication entries are grouped by year in `index.html`. Copy an existing
`<li>` inside a `publication-list` to add another paper, and give its heading a
unique ID. Use relative paths for local assets so the site works at either a
GitHub Pages domain root or a repository subpath.

## Preview locally

From this directory, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://localhost:8000>. If working over SSH, forward port 8000 to your
computer first. You can also open `index.html` directly in a browser.

## Content sources

Initial content was checked on October 13, 2026:

- [Google Scholar](https://scholar.google.com/citations?user=HQ9NlGwAAAAJ&hl=en):
  research interests and the three publication entries, including venue labels.
- [EPFL profile](https://people.epfl.ch/amel.abdelraheem?lang=en):
  laboratory, email, and office.
- [EPFL candidacy exam](https://memento.epfl.ch/event/analyzing-and-improving-the-robustness-of-deep-lea/):
  thesis advisor.
- [LTS4 publications](https://www.epfl.ch/labs/lts4/people/people-current/frossard/frossard-publications/)
  and the linked arXiv records: full author lists.

The short research description summarizes the profile and paper topics. Publication
venues follow the supplied Scholar profile; they are not automatically synchronized.
No portrait or CV has been added yet.

## Repository notes

The older al-folio template pages and assets are retained, but the new homepage
does not link to or depend on them. Those old URLs can still be visited directly;
they can be reviewed or removed in a later cleanup. The existing license is retained.

To publish on GitHub Pages, use this repository's configured publishing branch
and root directory. This local update does not change the hosting configuration.
