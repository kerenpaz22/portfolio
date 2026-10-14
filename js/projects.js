// ─────────────────────────────────────────────────────────────
//  YOUR PROJECTS
//  This is the only file you need to edit to add or change projects.
//  Copy one { ... } block, paste it below the others, and fill it in.
//  The first project in the list shows first on the home page.
// ─────────────────────────────────────────────────────────────

const PROJECTS = [
    {
    id: "lamp",
    title: "Desk Lamp",
    year: "2025",
    category: "Lighting",
    cover: "images/projects/lamp/cover.jpg",
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
      { src: "images/projects/lamp/cover.jpg", caption: "Final design" },
      { src: "images/projects/lamp/second.jpg", caption: "Early sketches" }
    ]
  },
  {
    id: "example-chair",              // short name with no spaces, used in the page link
    title: "Example Chair",
    year: "2025",
    category: "Furniture",
    cover: "images/projects/example-chair/cover.svg",
    summary: "A stackable chair made from a single bent sheet of plywood.",
    // Each paragraph is one string in this list.
    description: [
      "Write the brief here: what problem were you solving, and for whom?",
      "Then describe your process: research, sketches, models, testing, and what changed along the way.",
      "End with the outcome and what you learned."
    ],
    details: {
      Role: "Individual project",
      Duration: "10 weeks",
      Materials: "Birch plywood, steel",
      Tools: "SolidWorks, KeyShot, CNC router"
    },
    // Images shown on the project page, in order.
    gallery: [
      { src: "images/projects/example-chair/cover.svg", caption: "Final prototype" },
      { src: "images/projects/example-chair/cover.svg", caption: "Early sketches" }
    ]
  },
  {
    id: "example-lamp",
    title: "Example Lamp",
    year: "2024",
    category: "Lighting",
    cover: "images/projects/example-lamp/cover.svg",
    summary: "A desk lamp whose shade folds flat for shipping.",
    description: [
      "Replace this text with your own project story."
    ],
    details: {
      Role: "Team of 3",
      Duration: "6 weeks",
      Materials: "Aluminium, paper"
    },
    gallery: [
      { src: "images/projects/example-lamp/cover.svg", caption: "Lamp in use" }
    ]
  },
  {
    id: "example-kettle",
    title: "Example Kettle",
    year: "2024",
    category: "Product",
    cover: "images/projects/example-kettle/cover.svg",
    summary: "A kettle designed around an easier, safer pour.",
    description: [
      "Replace this text with your own project story."
    ],
    details: {
      Role: "Individual project",
      Duration: "8 weeks"
    },
    gallery: [
      { src: "images/projects/example-kettle/cover.svg", caption: "Render" }
    ]
  }
];
