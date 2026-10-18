# The Foundations Project: new website plan

We're moving The Foundations Project off Blogger and onto a site that's fully ours. This file explains what we're building and why, so anyone who helps (a person or a coding tool) can pick it up without needing the whole backstory.

The posts aren't changing. The site they live on is.

---

## Why move?

Blogger is fine for writing, but it's hard to make it easy to get around, and there's not much you can change about how it looks or works. Website builders like Wix fix some of that but come with monthly plans and clunky tools.

So the goal is simple: a clean, fast site that's easy to read, easy to update, and costs nothing to run.

## What the site is for

The posts are ideas. They're there to help people look at a problem in their own way, not to hand them a checklist.

The workshops are where those ideas turn into real tools and plans that people can actually use.

The site should make that path obvious: **read an idea → think about it → use the tools** (once they exist).

### Who's reading

Young people in really different situations. Some live on their own. Some are juggling school, a job and family stuff. Some are still learning English. Teachers and youth workers read it too.

That means the site should be:

- easy to read on a phone
- clear about what it is within a few seconds
- calm and not intimidating, especially for people who find long text hard

---

## How it's built

- **Astro** builds the site. It turns plain text files into fast web pages.
- **Every post is a Markdown file**, which is basically a text file with a little bit of formatting. Want to fix a typo? Open the file, change it, save.
- **GitHub** stores everything in a private repo, so every version is saved and nothing gets lost.
- **Cloudflare Pages** hosts it for free. Push a change to GitHub and the site updates on its own.
- **No database for now.** No logins, nothing to break.

---

## Pages

| Page | What's on it |
|---|---|
| **Home** | What this is in one sentence, a "Start here" path (2–3 posts), and the posts grouped by theme |
| **Ideas** | Every post, grouped by theme |
| **Each post** | Comfortable to read on a phone, reading time at the top, 2–3 questions to think about at the end, and links to related posts |
| **About** | What this is, why it started, and who's behind it |
| **Partners** | Thanks to the organizations that have listed or shared the project, including a proper note about BCCESS (they asked for one) |
| **For educators** | How teachers and youth workers can use the posts, and how to get in touch |
| **Use it** | *Comes after the Nov 7 workshop.* Tools and plans people can use without attending. This page doesn't go up until there's something real on it. |

---

## The look

Still deciding. We'll pick a direction from a few sites we like.

Whatever we land on:

- big, readable text with lots of breathing room
- nothing flashy that gets in the way of reading
- looks good on a phone first, then on a laptop
- feels like a thoughtful place to read, not a corporate website

---

## A few ground rules

- **The writing stays the writing.** Moving posts over shouldn't change the words.
- **End-of-post questions open things up.** They help people think it through themselves. They don't tell anyone what the right answer is.
- **Be accurate about partners.** Listed, shared and actually used with young people are different things. Say whichever one is true.
- **Old links keep working.** BCCESS, Burnaby Neighbourhood House and Strive BC all link to the Blogger address, so every old post should send people to its new page.
- **No empty pages, no made-up numbers.**
- **The workshop comes first.** If site work and Nov 7 prep ever compete for time, the workshop wins.

---

## Steps

**1. Gather everything**
Blogger export file, a screenshot of the Blogger stats (they won't carry over), 2–3 sites with a look we like, and the GitHub repo set up and connected.

**2. Pick a look**
Build the home page and one post page. Look at them on a laptop and a phone. Adjust once or twice until it feels right.

**3. Build the rest**
Bring over every post with its original date, make every page, and check it all on a phone.

**4. Write the new bits**
About page, "Start here" picks, theme groups, and the end-of-post questions. This is the biggest chunk of actual work, and it has to be in Boke's voice, so nobody else writes it.

**5. Launch**
Put it live on Cloudflare, sort out the web address, make the old Blogger links forward, click every link to check it, then email partners the new link along with a real update on what's new.

**6. After Nov 7**
Add the "Use it" section with tools from the workshop. Maybe add a small "Was this useful? What was confusing?" box at the end of posts, so we get real feedback from readers. That's the one place a database (Supabase) would make sense.

**When does it launch?** No fixed date. It goes live when step 4 is done.

---

## Still open

- Which look?
- Buy a domain (about $15–20 a year) or use the free Cloudflare address for now?
- How should the posts be grouped into themes?
- Is "What Is This Decision Protecting?" going up with the rest?

---

## Notes for whoever's building it

- Astro with content collections. Each post is Markdown with frontmatter: `title`, `date`, `theme`, `summary`, `questions`, plus `bloggerUrl` for redirects.
- Static output, deployed to Cloudflare Pages from the GitHub repo.
- Import posts from the Blogger export (`.xml`). Keep original publish dates and images. Build a map from old Blogger URLs to new ones.
- Accessibility basics: body text at least 18px, good contrast, proper headings, alt text on images, works with a keyboard.
- Keep dependencies to a minimum. If it's not needed, leave it out.
- Don't edit post text during import beyond fixing formatting that broke in the move.
