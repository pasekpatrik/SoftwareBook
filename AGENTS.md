# Repository Guidance

## Project

SoftwareBook is a static knowledge base written in Czech. It uses plain HTML, shared CSS, and small browser-side JavaScript files; there is no package manifest or build system.

## Layout

- `index.html`: developer quick reference and main entry point.
- `uop.html`, `lab.html`, `lab1.html`, `lab2.html`: subject and laboratory pages.
- `styles.css`: shared responsive layout and component styles.
- `clipboard.js`: shared copy-to-clipboard behavior.
- `docs/`: supporting PDF documents.

## Editing

- Keep user-facing content in Czech unless the task explicitly requests another language.
- Use semantic HTML and retain existing heading, sidebar, article, table, callout, and button patterns.
- Keep shared visual behavior in `styles.css`; do not add a framework or build tool for a static page.
- Preserve relative links and shared script/style paths.
- Put copy controls and reusable browser behavior in `clipboard.js` when they are needed by more than one page.
- Preserve accessibility attributes and visible keyboard/focus behavior.

## Validation

- Review the changed HTML and CSS around the edit, including desktop and mobile layouts.
- Serve the repository locally and open the affected pages in a browser, for example:

  ```sh
  python3 -m http.server 8000
  ```

- Check internal links, page rendering, copy buttons, search/filter behavior, and console errors for affected pages.
- Use the smallest relevant verification; there is no automated test suite or build command in this repository.
