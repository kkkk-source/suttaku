// key - category name; value - hexadecimal code color
const CATEGORIES: { [categoryName: string]: { color: string} | undefined } = {
  syntax: { color: '#2a9d8f' },
  themes: { color: '#ffb900' },
  试:     { color: '#8ea885' },
  test:   { color: '#df7988' },
};

export function getColorOfCategory(name: string): string | undefined {
  return CATEGORIES[name]!.color;
}

export function getCaterogies() {
  return CATEGORIES;
}
