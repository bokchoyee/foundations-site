/** Text in [square brackets] is a placeholder that still needs writing. */
export const isPlaceholder = (text?: string) => !!text && text.trim().startsWith('[');

/** True when a piece of text should show at all ('' or an empty list hides a section). */
export const hasText = (value?: string | string[]) =>
  Array.isArray(value) ? value.some((v) => v.trim() !== '') : !!value && value.trim() !== '';
