// ─────────────────────────────────────────────────────────────
//  All the words on the site (except the posts) live here,
//  in the same order as the "Foundations Site Text" form.
//  Change anything in quotes, save, and the site updates.
//  Text in [square brackets] is a placeholder still to be written.
// ─────────────────────────────────────────────────────────────

// ── Every page ───────────────────────────────────────────────
export const site = {
  name: 'The Foundations Project',
  subtitle: 'Independent Living for Youth',
  author: 'Boke Borjiet',
  location: 'Vancouver, BC',
  description:
    'Writing on the overlooked habits, systems and everyday decisions that make or break independent life.',
  footerNote: 'Made in Vancouver, BC',

  // Keeps the site out of Google while it's still a draft.
  // Change to false on launch day.
  hideFromSearch: true,

  // The post photo blurred behind the top of the main pages (file name in src/assets/posts, without .jpg).
  backdrop: 'choices-that-change-value',

  nav: [
    { label: 'Ideas', href: '/ideas/' },
    { label: 'Mission', href: '/mission/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ],
};

// ── Home page ────────────────────────────────────────────────
// DRAFT: pieced together from your own lines on Blogger. Rewrite in your voice.
export const home = {
  eyebrow: 'Independent Living for Youth',
  headline: 'Independence is about a lot more than money.',
  lead:
    'Most life resources teach you to budget, save and find housing. This project looks at what comes before that: the overlooked habits, systems and everyday decisions that quietly shape your success in independence.',
  primaryButton: 'Start reading',
  secondaryButton: 'All ideas',
  byline: 'By Boke Borjiet · Vancouver, BC',
  questionLabel: 'The question behind it',
  question:
    'How do you manage limited time, money and energy, and build systems for yourself, when the structure you used to rely on is gone?',
  startTitle: 'Start here',
  startNote: 'Personal favorites',
  // The three "Start here" posts, in order (post file names without .md).
  startHere: ['solving-the-wrong-problem', 'the-work-nobody-sees', 'time-debt'],
  listTitle: 'Every idea, chronologically, by theme',
  listLink: 'Browse ideas',
  quotesLabel: 'What educators have said',
};

// Educator quotes: their words, word for word. Set keep: false to hide one.
// The first quote is shown larger on the home page when there's an odd number of them.
export const quotes = [
  {
    // From Ms. Davidson's written feedback on the blog.
    text: 'You effectively avoid the trap of lecturing the reader, and instead, through so many beautifully worded lines, you invite the reader to ‘feel’ something from what you are saying and to feel like they are learning these lessons with you.',
    name: 'Ms. Davidson',
    role: 'Social Studies Teacher',
    school: 'Prince of Wales Secondary School',
    keep: true,
  },
  {
    text: 'Your writing is clear and concise, and you make many excellent points that I believe will help young people living independently.',
    name: 'Nicholas Wilson',
    role: 'Director of Bands',
    school: 'Prince of Wales Secondary School',
    keep: true,
  },
  {
    text: 'After reading each post, I found myself with new thoughts, questions, and ideas. That speaks to the quality of your writing and thinking.',
    name: 'Oliver Sandor',
    role: 'Social Studies Teacher',
    school: 'Prince of Wales Secondary School',
    keep: true,
  },
];

// Organizations. Keep the heading accurate: listed / shared / used are different things.
// url (their website), page (a page on this site about them) and about are optional; '' = leave out.
export const partners = {
  heading: 'Used by youth-serving organizations',
  list: [
    {
      name: 'BCCESS',
      url: 'https://www.bccess.ca',
      page: '/partners/bccess/',
      about: 'A student-run nonprofit helping immigrant and first-generation families with post-secondary and career planning.',
    },
    {
      name: 'Burnaby Neighbourhood House',
      url: 'https://burnabynh.ca/',
      page: '',
      about: 'A volunteer-driven community agency in Burnaby with programs for children, families, youth, seniors and newcomers.',
    },
    {
      name: 'Strive BC',
      url: 'https://ywcabc.org/strive',
      page: '',
      about: 'A YWCA BC life skills and employment program for youth aged 16 to 29 who are leaving or have left care.',
    },
  ],
  learnMore: 'Learn more',
};

// ── BCCESS page (the short spotlight BCCESS asked for) ───────
// Facts from bccess.ca, checked October 2026. Their tagline is quoted word for word.
export const bccess = {
  eyebrow: 'Partner',
  name: 'BCCESS',
  fullName: 'BC Career Empowerment Student Society',
  tagline: 'Run by Students. For Students. Always Free.',
  summary:
    'BCCESS is a student-run nonprofit in British Columbia. It helps students and families from immigrant and first-generation backgrounds with post-secondary and career planning, whether the path is university, college, the trades or something else.',
  offersHeading: 'What they offer',
  offers: [
    "Free sessions for families, in several languages, on how Canada's education system works",
    'Career and post-secondary fairs, school visits and community workshops',
    'Free student-made guides, including on the trades and gap years',
    'Information pages for nine BC post-secondary schools',
    'Mentorship and volunteer opportunities',
  ],
  connectionHeading: "How we're connected",
  connection: 'BCCESS lists The Foundations Project in the Partner Resources section of its Free Resources page.',
  primaryButton: 'Visit BCCESS',
  primaryUrl: 'https://www.bccess.ca',
  secondaryButton: 'Their free resources',
  secondaryUrl: 'https://www.bccess.ca/free-resources',
  backLink: 'Mission',
  sourceNote: 'Details from bccess.ca, October 2026.',
};

// ── Mission page (about the project) ─────────────────────────
// The statement and "different" paragraphs are your Blogger sidebar text, word for word.
export const mission = {
  title: 'Mission',
  // The mission statement is the big heading at the top of the page.
  statement:
    'To make the shift into independent life more manageable for young people by highlighting some of the overlooked habits, systems, and everyday decisions that quietly shape long term success.',
  differentHeading: 'What makes this different?',
  different: [
    'Most other resources teach people to budget, save, build credit, invest, find housing, and all that other boring stuff. This project focuses on something very different.',
    'It examines the root of why people struggle living on their own, and the small patterns, assumptions, and systems that create the independent environment long before major financial decisions become an issue.',
  ],
  // Optional. Leave as '' to hide this section.
  whoForHeading: "Who it's for",
  whoFor: '',
  authorLine: 'Written by Boke Borjiet in Vancouver, BC.',
  authorLink: 'About me',
};

// ── About me page (personal) ─────────────────────────────────
export const aboutMe = {
  title: 'About',
  heading: "Hi, I'm Boke.",
  subheading:
    "I'm a student based in Vancouver, interested in economics, business and especially the systems that shape how people make decisions.",
  bio: [
    "I like taking problems that seem simple at first, figuring out what's really going on underneath them, and then finding ways to make those ideas useful.",
  ],
  whyHeading: 'Why I started The Foundations Project',
  why: [
    'I started The Foundations Project because I was living alone and realized that independence was nothing like I had imagined it would be.',
    'My friends thought living alone meant unlimited freedom. Doing whatever I wanted, whenever I wanted. In some ways, I had that freedom. But there was another side to it that was much harder to explain. Without the structure most people take for granted, even simple things could become difficult. I fell victim to the classic teenage sins: sleeping in, skipping meals and playing games all day. They started to take over my life, and nobody was there to call me out.',
    'I became interested in the gap between what independence looks like from the outside and what it actually feels like to live it. The project started as my way of making sense of that experience, and grew into writing about the questions it raised.',
  ],
  // Optional. Leave the list empty ([]) to hide this section.
  nowHeading: "What I'm working on now",
  now: [
    "The project has grown past the blog I started with. I'm working on making the articles more accessible and finding ways to bring the ideas into conversations with young people from different backgrounds.",
    "A lot of that means building workshops around the project's central questions, and working with educators and youth-serving organizations to figure out what's actually useful to the people it's meant for.",
    "I can't thank the organizations and teachers who have helped me develop and share this project enough.",
  ],
  interestsHeading: "What I'm interested in",
  interests: ['Economics', 'Finance', 'Business', 'How systems shape decisions', 'Gym', 'MMA', 'Hypixel SkyBlock', 'Roblox'],
  // A photo of you: put it in src/assets/ and write its file name here, e.g. 'me.jpg'. '' = no photo.
  photo: 'boke.jpg',
  photoAlt: 'Boke Borjiet',
  links: [] as { label: string; url: string }[],
};

// ── Contact page ─────────────────────────────────────────────
export const contact = {
  title: 'Contact',
  heading: 'Get in touch',
  intro: "Feedback, questions or an idea for working together? Here's how to reach me.",
  feedbackTitle: 'Feedback',
  feedbackText: "Don't hesitate to tell me what was confusing or useful in a post. Your feedback shapes what I revise and improve.",
  partnersTitle: 'Partnerships and workshops',
  partnersText:
    "For organizations and educators: Thank you so much for taking the time to consider my work. If you have ideas or workshop requests, I'd love to hear from you.",
  emailLabel: 'Email',
  email: 'bokeborjiet@gmail.com',
  copyLabel: 'Copy',

  // Contact form. Messages are emailed to you through Web3Forms (free, 250 messages a month).
  // Get a key at web3forms.com with your email and paste it here. It's fine for this to be public.
  formAccessKey: '07f1b5ef-1da0-4923-8b55-4da2dc21c818',
  formHeading: 'Send a message',
  formNote: "Leave your name, email and a message, and it comes straight to my inbox.",
  nameLabel: 'Name',
  emailFieldLabel: 'Email',
  topicLabel: "What's it about?",
  topics: ['Feedback on a post', 'Partnership or workshop', 'Something else'],
  messageLabel: 'Message',
  submitLabel: 'Send message',
  sendingLabel: 'Sending…',
  successMessage: 'Thanks, your message was sent.',
  errorMessage: 'Something went wrong. Please try again, or email me instead.',
  notReadyMessage: "The form isn't switched on yet. For now, please email me instead.",
  orEmail: 'Or email me directly',
  links: [] as { label: string; url: string }[],
};

// ── Ideas page and posts ─────────────────────────────────────
export const ideasPage = {
  heading: 'Every idea, chronologically, by theme',
  intro:
    'Writing on the overlooked habits, systems and everyday decisions that make or break independent life.',
};

export const postPage = {
  moreHeading: 'Keep reading',
  questionsHeading: 'Questions to think about',
  missionLink: 'Read the mission',
  backLink: 'All ideas',
};

// Themes, in the order they appear. Each post's `theme:` must match one of these ids.
export const themes = [
  { id: 'structure', label: 'Structure & routines' },
  { id: 'time', label: 'Time & hidden work' },
  { id: 'decisions', label: 'Decisions & trade-offs' },
  { id: 'stepping-back', label: 'Stepping back' },
];

// ── Page not found ───────────────────────────────────────────
export const notFound = {
  heading: "This page doesn't exist.",
  line: 'It may have moved when the site left Blogger.',
  primary: 'See all ideas',
  secondary: 'Home',
};
