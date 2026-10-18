// ─────────────────────────────────────────────────────────────
//  Site settings — most of the words on the site live here.
//  Change anything in quotes, save, and the site updates.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'The Foundations Project',
  subtitle: 'Independent Living',
  author: 'Boke Borjiet',
  location: 'Vancouver, BC',
  description:
    'Writing on the overlooked habits, systems and everyday decisions that make independent life harder than it looks.',

  // Top navigation. Add "For educators" and "Use it" here once those pages exist.
  nav: [
    { label: 'Ideas', href: '/ideas/' },
    { label: 'About', href: '/about/' },
  ],
};

// Home page hero.
// DRAFT: pieced together from your own lines on Blogger. Rewrite in your voice.
export const hero = {
  eyebrow: 'Independent Living',
  headline: 'Why independent life is harder than it looks.',
  lead:
    'Most resources teach you to budget, save and find housing. This project looks at what comes before that: the overlooked habits, systems and everyday decisions that quietly shape how things go.',
  // The card on the right of the hero (desktop). DRAFT: your central question, in plainer words.
  questionLabel: 'The question behind it',
  question:
    'How do you manage limited time, money and energy, and build systems for yourself, when the structure you used to rely on is gone?',
};

// The three posts in the "Start here" section, in order (use the file name without .md).
// DRAFT picks: the most concrete, story-driven entry points. Swap freely.
export const startHere = [
  'solving-the-wrong-problem',
  'the-work-nobody-sees',
  'time-debt',
];

// Themes, in the order they appear. Each post's `theme:` must match one of these ids.
// DRAFT groupings — yours to change.
export const themes = [
  { id: 'structure', label: 'Structure & routines' },
  { id: 'time', label: 'Time & hidden work' },
  { id: 'decisions', label: 'Decisions & trade-offs' },
  { id: 'stepping-back', label: 'Stepping back' },
];

// Your text from the Blogger sidebar, word for word.
export const about = {
  whyThisExists:
    'To make the shift into independent life more understandable by highlighting the overlooked habits, systems, and everyday decisions that quietly shape long term success.',
  whatMakesThisDifferent: [
    'Most resources teach people to budget, save, build credit, invest, and find housing. However, this project focuses on something different.',
    'It examines why people struggle in the first place and the small patterns, assumptions, and systems that create the independent environment long before major financial decisions become an issue.',
  ],
};

// Educator quotes (from the Blogger sidebar).
export const quotes = [
  {
    text: 'Your writing is clear and concise, and you make many excellent points that I believe will help young people living independently.',
    name: 'Nicholas Wilson',
    role: 'Director of Bands',
  },
  {
    text: 'After reading each post, I found myself with new thoughts, questions, and ideas. That speaks to the quality of your writing and thinking.',
    name: 'Oliver Sandor',
    role: 'Social Studies Teacher',
  },
];

// Organizations. Keep the heading accurate: listed / shared / used are different things.
export const partners = {
  heading: 'Listed and shared by youth-serving organizations',
  names: ['BCCESS', 'Burnaby Neighbourhood House', 'Strive BC'],
};
