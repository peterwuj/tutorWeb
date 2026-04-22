# Math Fun – Kids Learning Website

An interactive preschool / early-elementary math site covering numbers, addition, subtraction, and multiplication.

## Topics

| Page | What kids learn |
|---|---|
| Numbers | Counting 1–20 with emoji dot icons; click-to-zoom spotlight; Sequence Game (fill in the missing numbers) |
| Addition | Random equations within 20 with emoji visuals, score & streak tracking |
| Subtraction | Random equations within 20 with crossed-out emoji visuals |
| Multiplication | Times tables 1–10 with reference table and grid-style emoji visuals (a icons × b rows) |

## Project structure

```
tutorWeb/
├── src/
│   ├── index.html          # Landing page
│   ├── numbers.html        # Numbers 1–20 + Sequence Game
│   ├── addition.html       # Addition practice
│   ├── subtraction.html    # Subtraction practice
│   ├── multiplication.html # Multiplication tables practice
│   ├── style.css           # Shared styles
│   └── game.js             # Shared game logic (addition & subtraction)
├── LICENSE
└── README.md
```

## Running locally

Open `src/index.html` directly in any browser — no build step or server required.

## Deploying

**GitHub Pages**
1. Push this repo to GitHub
2. Go to Settings → Pages → set source to `main` branch, `/src` folder (if supported) or root
3. Your site will be live at `https://<username>.github.io/tutorWeb/src/`

**Netlify / Vercel / Cloudflare Pages**
1. Connect the repo or drag-and-drop the `src/` folder
2. Set the publish directory to `src`
3. Deploy — a free subdomain is provided instantly
