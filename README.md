# Industrial Design Portfolio

A simple portfolio website built with plain HTML, CSS and JavaScript. It needs no installs or build tools, and you can host it for free on GitHub Pages.

## What's in here

| File | What it is |
| --- | --- |
| `index.html` | Home page: intro, project grid, about, contact |
| `project.html` | Project page template; it fills itself in for each project |
| `js/projects.js` | **Your projects.** This is the file you'll edit most |
| `css/style.css` | Look and feel. Colors and fonts are at the top |
| `images/projects/<project-id>/` | One folder of photos per project |

## 1. See it on your computer

Download the repo (green **Code** button → **Download ZIP**, or `git clone`), then double-click `index.html` to open it in your browser. After you edit a file, save it and refresh the browser.

For editing, a free code editor like [VS Code](https://code.visualstudio.com/) makes this much easier.

## 2. Put in your own details

In `index.html` and `project.html`, replace **Your Name**, the intro sentence, the bio, skills and contact links. To link your CV, add a `cv.pdf` file to the top folder.

## 3. Add your projects

1. Make a folder for each project, e.g. `images/projects/desk-lamp/`, and put its photos in it.
2. Open `js/projects.js`, copy one `{ ... }` block, and fill in the title, year, text and image paths.
3. Delete the three example projects and their image folders when you no longer need them.

The order in `projects.js` is the order on the home page, so put your strongest work first.

### Image tips

- Export photos as **JPG**, about **2000px wide**, and keep each file under roughly **500 KB** (use [Squoosh](https://squoosh.app/) to shrink them). Large images make the site slow.
- Use the same aspect ratio (e.g. 4:3) for every cover image so the grid lines up.
- Avoid spaces in file names: `desk-lamp-render.jpg`, not `Desk Lamp Render FINAL.jpg`.

## 4. Publish it with GitHub Pages

1. Merge this branch into `main` and push.
2. On GitHub, open the repo → **Settings** → **Pages**.
3. Under **Build and deployment**, set Source to **Deploy from a branch**, choose `main` and `/ (root)`, then click **Save**.
4. After a minute or two, the site will be live at `https://<your-username>.github.io/portfolio/`.

Every time you push a change to `main`, the site updates.

## What makes a good ID portfolio

- **Choose 4–6 strong projects** rather than showing everything.
- **Show process, not just renders.** Reviewers want to see research, sketches, foam models, iterations and testing, and why you made each decision.
- **Tell each project as a story:** the brief or problem, research and insights, ideation, development and prototyping, the final design, and what you learned.
- **Lead with a strong image.** The cover photo decides whether someone clicks.
