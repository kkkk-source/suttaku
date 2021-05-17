// Convert title from the form `Sample Title` to the form `sample-title`
export function toParamTitle(title: string): string {
  return title.trim().replace(/\s+/g, '-').toLowerCase();
}
