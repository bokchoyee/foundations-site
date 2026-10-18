import { getCollection, type CollectionEntry } from 'astro:content';
import { themes } from '../site';

export type Post = CollectionEntry<'posts'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function readingTime(post: Post): number {
  const words = (post.body ?? '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function themeLabel(id: string): string {
  return themes.find((t) => t.id === id)?.label ?? id;
}

export function groupByTheme(posts: Post[]) {
  const groups = themes
    .map((t) => ({
      ...t,
      // oldest first inside a theme, so ideas read in the order they were written
      posts: posts
        .filter((p) => p.data.theme === t.id)
        .sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf()),
    }))
    .filter((g) => g.posts.length > 0);
  const known = new Set(themes.map((t) => t.id));
  const other = posts.filter((p) => !known.has(p.data.theme));
  if (other.length) groups.push({ id: 'other', label: 'More', posts: other });
  return groups;
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
