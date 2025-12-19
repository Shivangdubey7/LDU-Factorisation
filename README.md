# LDU-Factorisation

A simple, browser-based interactive tool for exploring LDU (Lower–Diagonal–Upper) factorisation of matrices. This repository contains a small front-end application (HTML/CSS/JavaScript) that provides a UI to input matrices and visualise / compute their L, D and U components.

> Note: This is a static web project — open the HTML files in a modern browser to use the app.

## Features

- Interactive web UI for entering a matrix and computing its L, D, U factors.
- Multiple HTML/CSS styles and versions included for experimentation.
- Client-side JavaScript (no server required) performs the computations and updates the UI.

- final.html — polished HTML page for the app (entry point).
- final.css, LDU.css, NewCSS.css, starting_page.css — stylesheet files used by different HTML pages.
- final.html, LDU.html, NewHTML.html, new.html, starting_page.html — multiple HTML pages/versions of the UI.
- NewJS.js, new.js, NewJS.js (JavaScript) — client-side logic that performs matrix operations and manages UI interactions.
- Images: `Samina.jpg`, `mayank.jpg`, `nirmal.jpg`, `ramraj.jpg`, `shivang.jpg`, `background.jpg`, `newback.jpg` — assets used in the UI.
- README.md — this file.

> Tip: If you are exploring the code, start by opening the JavaScript files (`NewJS.js`, `new.js`) to see how the LDU computation and input parsing are implemented.

## Contributing

Contributions are welcome. Suggested contributions:

- Improve input validation and matrix parsing.
- Add step-by-step visualisation of the factorisation algorithm.
- Provide example matrices and unit tests for the decomposition.
- Refactor and consolidate HTML/CSS/JS into a single polished page.

When contributing:
- Fork the repo, make changes on a topic branch, and open a pull request describing the changes.
- Keep changes focused and include screenshots or GIFs for UI updates.

## Development notes

- The project is implemented entirely with front-end technologies (HTML, CSS, JavaScript). No build step required.
- To test changes quickly, run a local static server (e.g., `python -m http.server`) and open the desired HTML file.
- If adding dependencies or building a more advanced app, consider adding a package manager (npm) and a build workflow.


Enjoy exploring LDU factorisation!
