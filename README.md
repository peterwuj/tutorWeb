# Ninja Math – Kids Learning Website

An interactive preschool / early-elementary math site with a ninja theme, covering numbers, addition, subtraction, and multiplication.

## Topics

| Page | What kids learn |
|---|---|
| Numbers | Counting 1–20 with emoji dot icons; click-to-zoom spotlight; Sequence Mission (fill in 8–12 missing numbers) |
| Addition | Random equations within 20 with emoji visuals, score & streak tracking |
| Subtraction | Random equations within 20 with crossed-out emoji visuals |
| Multiplication | Times tables 1–10 with reference table and grid-style emoji visuals (a icons × b rows) |

## Ninja Avatar

Every page features a Lottie-animated ninja mascot (`ninja-avatar.js`) that:

- Bobs, jumps, shakes, waves, and leans via named **poses** (`idle`, `correct`, `wrong`, `celebrate`, `think`, `wave`)
- Shows **speech bubbles** with encouraging messages
- **Fog-bomb teleport** — click the avatar and it explodes into a smoke cloud, vanishes, then reappears ~2 seconds later at one of 9 fixed positions (4 corners, 4 side midpoints, page center)
- **Reacts to game events** on the Numbers page: praises correct placements, reacts to wrong ones, and celebrates mission completion

### NinjaAvatar API

```js
const container = Object.assign(document.createElement('div'), {
  style: 'position:fixed;bottom:16px;right:16px;z-index:50'
});
document.body.appendChild(container);
const ninja = new NinjaAvatar(container, { size: 110, spotIndex: 3 });

ninja.pose('celebrate');          // switch pose immediately
ninja.pose('wrong', 1200);        // pose for 1200 ms then return to idle
ninja.say('Great job! ⭐', 2000); // speech bubble for 2000 ms
```

**`spotIndex`** sets which of the 9 teleport spots the avatar starts at (default `3` = bottom-right).

## Project structure

```
tutorWeb/
├── src/
│   ├── index.html          # Landing page
│   ├── numbers.html        # Numbers 1–20 + Sequence Mission
│   ├── addition.html       # Addition practice
│   ├── subtraction.html    # Subtraction practice
│   ├── multiplication.html # Multiplication tables practice
│   ├── style.css           # Shared styles
│   ├── game.js             # Shared game logic (addition & subtraction)
│   ├── ninja-avatar.js     # Self-contained ninja mascot component
│   ├── sounds.js           # Sound effects (hover, correct, wrong, win)
│   └── favicon.svg         # Site favicon
├── LICENSE
└── README.md
```

## Running locally

Open [`src/index.html`](src/index.html) directly in any browser — no build step or server required.

## Deploying

**GitHub Pages**
1. Push this repo to GitHub
2. Go to Settings → Pages → set source to `main` branch, `/src` folder (if supported) or root
3. Your site will be live at `https://<username>.github.io/tutorWeb/src/`

**Netlify / Vercel / Cloudflare Pages**
1. Connect the repo or drag-and-drop the `src/` folder
2. Set the publish directory to `src`
3. Deploy — a free subdomain is provided instantly
