# The Foundations Project — website

The new home for The Foundations Project. It's built with [Astro](https://astro.build), every post is a plain text file, and it's hosted for free on Cloudflare.

The full plan is in [`docs/SITE_PLAN.md`](docs/SITE_PLAN.md).

---

## Where things are

| You want to… | Go to |
|---|---|
| Edit a post | `src/content/posts/` (one `.md` file per post) |
| Change the words on the home page, About page, themes or "Start here" picks | `src/site.ts` |
| Change colours or fonts | the top of `src/styles/global.css` |
| Swap a post's photo | `src/assets/posts/` |
| Change a page's layout | `src/pages/` |

Anything marked **DRAFT** in `src/site.ts` was filled in to make the site look finished. Rewrite it in your own words before launch.

---

## Writing a new post

1. Copy any file in `src/content/posts/` and rename it, e.g. `my-new-post.md`. The file name becomes the web address: `/ideas/my-new-post/`.
2. Update the block at the top (between the `---` lines):

   ```yaml
   ---
   title: "My New Post"
   date: 2026-11-01
   summary: "One or two sentences that show up in lists."
   theme: "time"            # must match an id in src/site.ts
   cover: ../../assets/posts/my-new-post.jpg   # optional
   coverAlt: "What the photo shows"
   questions:               # optional, shows at the end of the post
     - "First question?"
     - "Second question?"
   draft: true              # hides it until you're ready, then delete this line
   ---
   ```

3. Write the post underneath. A blank line between paragraphs is all the formatting you need. `**bold**` makes bold text.

---

## Seeing the site on your computer

You only need this if you want to preview changes before pushing them.

1. Install Node.js (version 22 or newer) from [nodejs.org](https://nodejs.org).
2. Open a terminal in this folder and run `npm install` (just the first time).
3. Run `npm run dev`, then open http://localhost:4321.

The page refreshes on its own every time you save a file.

---

## Putting it online (Cloudflare)

1. Make a free account at [cloudflare.com](https://cloudflare.com).
2. Go to **Workers & Pages → Create → Pages → Connect to Git** and pick this repo.
3. Use these settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**.

After that, every time you push to GitHub, the site updates by itself in about a minute.

---

## Moving off Blogger

`docs/blogger-redirects.json` lists every old Blogger address and its new address. At launch, that's what makes old links (from BCCESS, Burnaby Neighbourhood House and Strive BC) send people to the right page.
