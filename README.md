# Industrial Design Portfolio

A simple portfolio website built with plain HTML, CSS and JavaScript.

**You don't need to install anything.** Every step below happens in your web browser on github.com. You never type into a command window.

## What's in here

| File | What it is |
| --- | --- |
| `index.html` | Home page: intro, project grid, about, contact |
| `project.html` | Project page template; it fills itself in for each project |
| `js/projects.js` | **Your projects.** This is the file you'll edit most |
| `css/style.css` | Look and feel. Colors and fonts are at the top |
| `images/projects/<project-name>/` | One folder of photos per project |
| `cv.pdf` | Your CV (add this yourself) |

---

## Part A: One-time setup (about 10 minutes)

### A1. Create a `main` branch

1. Go to <https://github.com/kerenpaz22/portfolio> and sign in.
2. Near the top left, above the list of files, there's a button showing the current branch name (`claude/portfolio-website-setup-9vppgf`). Click it.
3. In the box that opens, type `main`.
4. Click **Create branch main from claude/portfolio-website-setup-9vppgf**.

### A2. Make `main` the default branch

1. In the row of tabs at the top of the repo (Code, Issues, Pull requests, …), click **Settings** (gear icon, far right).
2. You're on the **General** page. Under **Default branch**, click the **⇄** (two arrows) button.
3. In the dropdown, choose **main** and click **Update**. When asked to confirm, click **I understand, update the default branch.**

From now on, always work on `main`. You can ignore the old `claude/…` branch.

### A3. Make the repo public

GitHub Pages is free only for public repos.

1. Still in **Settings → General**, scroll all the way to the bottom to the red **Danger Zone**.
2. Click **Change visibility**, then **Change to public**.
3. Click through the confirmation steps. GitHub may ask you to type `kerenpaz22/portfolio`, or for your password or a 2FA code.

### A4. Turn on GitHub Pages

1. In **Settings**, look at the left sidebar. Under **Code and automation**, click **Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Under **Branch**, set the first dropdown to **main** and the second to **/ (root)**. Click **Save**.
4. Wait 1–2 minutes, then refresh the page. A box at the top will say **Your site is live at <https://kerenpaz22.github.io/portfolio/>**. Click **Visit site**.

---

## Part B: Edit your text

1. On the repo's **Code** tab, click the file you want to change (for example `index.html`).
2. Click the **pencil icon** (✏️, "Edit this file") at the top right of the file.
3. Change the text. Only change the words *between* the tags. For example, in `<h1>Your words here</h1>` you'd only change "Your words here".
4. Click the green **Commit changes…** button (top right), then click **Commit changes** in the pop-up.
5. About a minute later, your live site updates. If you don't see the change, press **Ctrl + F5** on the site to force a refresh.

What to change:
- **`index.html`:** "Your Name" (it appears 3 times), the intro sentence, the "Student at Your University" line, your bio, skills, email, and the LinkedIn/Instagram/Behance links. You can delete a link you don't use, along with the ` · ` before it.
- **`project.html`:** "Your Name" (3 times).

---

## Part C: Add a project

### C1. Prepare the photos on your computer

1. In File Explorer, create a new folder named after the project in **lowercase, with dashes instead of spaces**. Example: `desk-lamp`.
2. Put the project's photos in it. Rename them the same way (right-click → **Rename**). For example: `cover.jpg`, `sketches.jpg`, `foam-model.jpg`.
3. Keep each photo under about 500 KB, or your site will load slowly. To shrink one, open <https://squoosh.app>, drag the photo in, set **Resize** width to `2000` and **MozJPEG** quality to about `75`, then click the download button at the bottom right.
4. Use the same shape for every project's `cover.jpg` (for example 4:3, like 2000 × 1500 px) so the home page grid lines up.

> **Tip:** Windows hides file endings like `.jpg` by default. To show them, in File Explorer click **View → Show → File name extensions** (Windows 11), or the **View** tab → tick **File name extensions** (Windows 10).

### C2. Upload the photos to GitHub

1. On the repo's **Code** tab, click into the `images` folder, then `projects`.
2. Click **Add file** (top right) → **Upload files**.
3. **Drag the whole `desk-lamp` folder** from File Explorer onto the page. Drag the folder itself, not the photos inside it, so GitHub keeps the folder.
4. Click the green **Commit changes** button at the bottom.

### C3. Add the project to `js/projects.js`

1. Open `js/projects.js` and click the **pencil icon** to edit it.
2. Find the line `const PROJECTS = [`. Just below it, paste this block:

```js
  {
    id: "desk-lamp",
    title: "Desk Lamp",
    year: "2025",
    category: "Lighting",
    cover: "images/projects/desk-lamp/cover.jpg",
    summary: "One sentence about the project.",
    description: [
      "First paragraph: the brief or problem.",
      "Second paragraph: your process.",
      "Third paragraph: the result and what you learned."
    ],
    details: {
      Role: "Individual project",
      Duration: "8 weeks",
      Materials: "Aluminium, oak",
      Tools: "Rhino, KeyShot"
    },
    gallery: [
      { src: "images/projects/desk-lamp/cover.jpg", caption: "Final design" },
      { src: "images/projects/desk-lamp/sketches.jpg", caption: "Early sketches" }
    ]
  },
```

3. Change the text to match your project:
   - `id` must be the **exact** folder name.
   - Every image path must match the **exact** file names, including `.jpg` vs `.png` and capital letters.
4. Click **Commit changes…** → **Commit changes**.

**Rules that keep it working:**
- Every piece of text stays inside `"double quotes"`. If your text needs a quote mark, use a single one (`'`) instead.
- Each project block ends with `},`, including the comma.
- Each line in `description` and `gallery` ends with a comma, except the last one in the list.

If your projects disappear from the site after an edit, you've probably missed a comma or a quote. Click the **History** button on the file to see what changed, or paste the file to Claude and ask what's wrong.

### C4. Remove the examples

When you've added your own projects:
1. In `js/projects.js`, delete the three example blocks (`example-chair`, `example-lamp`, `example-kettle`) and commit.
2. To delete their images, open each `cover.svg` file, click the **…** menu at the top right, and choose **Delete file**. Commit each deletion. A folder disappears on its own once it's empty.

### Add your CV

Name the PDF exactly `cv.pdf`. On the repo's main **Code** page (the top folder, not inside `images`), click **Add file → Upload files**, drag it in, and commit.

---

## Optional: Preview on your computer before publishing

1. On the repo's **Code** tab, click the green **<> Code** button → **Download ZIP**.
2. Open your **Downloads** folder, right-click `portfolio-main.zip` → **Extract All…** → **Extract**. Don't open files from inside the zip itself; they won't display properly.
3. In the extracted folder, double-click `index.html`. If it doesn't open in your browser, right-click it → **Open with** → **Google Chrome** or **Microsoft Edge**.

Note that changes you make to these downloaded files are **not** sent to GitHub. Make your real edits on github.com as described above.

## What makes a good ID portfolio

- **Choose 4–6 strong projects** rather than showing everything.
- **Show process, not just renders.** Reviewers want to see research, sketches, foam models, iterations and testing, and why you made each decision.
- **Tell each project as a story:** the brief or problem, research and insights, ideation, development and prototyping, the final design, and what you learned.
- **Lead with a strong image.** The cover photo decides whether someone clicks.
