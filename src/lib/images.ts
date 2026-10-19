import type { ImageMetadata } from 'astro';

// Every image in src/assets (post photos and any photo of you), looked up by file name.
const postImages = import.meta.glob<{ default: ImageMetadata }>('../assets/posts/*.{jpg,jpeg,png,webp}', { eager: true });
const otherImages = import.meta.glob<{ default: ImageMetadata }>('../assets/*.{jpg,jpeg,png,webp}', { eager: true });

function find(files: Record<string, { default: ImageMetadata }>, name: string) {
  const match = Object.entries(files).find(([path]) => {
    const file = path.split('/').pop() ?? '';
    return file === name || file.replace(/\.[^.]+$/, '') === name;
  });
  return match?.[1].default;
}

/** A post photo by name, e.g. 'time-debt'. */
export function postImage(name: string): ImageMetadata | undefined {
  return find(postImages, name);
}

/** An image placed directly in src/assets, e.g. 'me.jpg'. */
export function assetImage(name: string): ImageMetadata | undefined {
  return name ? find(otherImages, name) : undefined;
}
