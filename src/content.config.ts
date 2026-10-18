import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every post lives in src/content/posts as a Markdown file.
// The block at the top of each file (between the --- lines) must match this.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      summary: z.string(),
      theme: z.string(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      questions: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      bloggerUrl: z.string().optional(),
    }),
});

export const collections = { posts };
