# The Foundations Project — website

The new home for The Foundations Project. It's built with [Astro](https://astro.build), every post is a plain text file, and it's hosted for free on Cloudflare.

The full plan is in [`docs/SITE_PLAN.md`](docs/SITE_PLAN.md).

---

## Where things are

| You want to… | Go to |
|---|---|
| Change any words on the site (home, Mission, About, Contact, menus, buttons) | `src/site.ts` |
| Edit a post | `src/content/posts/` (one `.md` file per post) |
| Change colours, fonts or how strong the blurred photo is | the top of `src/styles/global.css` |
| Swap a post's photo | `src/assets/posts/` |
| Add a photo of you | put it in `src/assets/` and write its file name in `aboutMe.photo` in `src/site.ts` |
| Change a page's layout | `src/pages/` |

Anything marked **DRAFT** in `src/site.ts` was filled in to make the site look finished, and anything in [square brackets] still needs writing. Rewrite both in your own words before launch.

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

## How changes go live

You only ever update GitHub. Cloudflare watches this repo, and every push rebuilds the site by itself in a minute or two.

**Editing on your computer** (the usual way):

1. Change a file in this folder and save it.
2. In GitHub Desktop, write a short note in **Summary**, click **Commit to main**, then **Push origin**.

**Editing on github.com** (handy for a quick typo fix, even from your phone):

1. Open the file on github.com, click the pencil icon, make the change, and click **Commit changes**.
2. Next time you're in GitHub Desktop, click **Fetch origin**, then **Pull origin**, before you edit anything on your computer. That brings your computer's copy up to date.

If a build ever fails, the live site stays on the last version that worked. You can see each build under your project in the Cloudflare dashboard.

---

## Moving off Blogger

`docs/blogger-redirects.json` lists every old Blogger address and its new address. At launch, that's what makes old links (from BCCESS, Burnaby Neighbourhood House and Strive BC) send people to the right page.
