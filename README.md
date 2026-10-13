# Amel Abdelraheem — academic website

A simple, responsive academic homepage for GitHub Pages. The homepage uses plain
HTML, CSS, and a small optional script with no build step, external fonts, or libraries.

## Edit the site

- `index.html`: biography, profile links, publications, and contact details.
- `assets/css/academic.css`: colors, typography, spacing, and mobile layout.
- `assets/js/ambient.js`: pause/resume control and reduced-motion preferences.
- `assets/img/grain.svg`: locally generated, seamless background texture.
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

## Visual style and motion

The warm ivory background has softly blurred blush, sage, and dusty rose shapes
with a light SVG grain overlay. The colors are inspired by the Luna Rose palette
in [JK Creative Co.'s palette article](https://www.jkcreativecompany.com/blog/feminine-brand-color-palettes):
ivory `#F7F3ED`, blush `#EFD8D6`, sage `#C2C6B9`, rose `#DBA1A2`, and brown `#422B23`.
Darker brown text/link shades and lighter button fills keep small text readable.
All palette tokens live in `academic.css`. The introduction uses a simple text layout.
Publication panels and profile links have subtle hover effects.

The header's motion control pauses the animation and remembers the choice locally.
The site automatically disables animation when the device requests reduced motion.
Without JavaScript, content and links work normally and CSS still respects reduced
motion. Colors, animation timing, and mobile layout are in `academic.css`.

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
