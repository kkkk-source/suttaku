import categoryA from 'assets/images/categoryA.jpg';
import categoryB from 'assets/images/categoryB.jpg';
import categoryC from 'assets/images/categoryC.jpg';
import categoryD from 'assets/images/categoryD.jpg';

// key - category name; value - hexadecimal code color
const CATEGORIES: { [name: string]: { color: string, imgUrl: string, cssGradient: string, description: string } } = {
  syntax: { color: '#df7988', imgUrl: categoryA, cssGradient: 'rgba(0, 0, 0, 0) linear-gradient(0deg, rgba(86, 86, 102, 0.5) 0%, rgba(91, 158, 204, 0.75) 100%) repeat scroll 0% 0%', description: 'This is an example description' },
  试:     { color: '#2a9d8f', imgUrl: categoryB, cssGradient: 'rgba(0, 0, 0, 0) linear-gradient(0deg, rgba(86, 86, 102, 0.5) 0%, rgba(0, 177, 106, 0.65) 100%) repeat scroll 0% 0%', description: 'This is an example description' },
  themes: { color: '#ffb900', imgUrl: categoryC, cssGradient: 'rgba(0, 0, 0, 0) linear-gradient(0deg, rgba(86, 86, 102, 0.5) 0%, rgba(246, 71, 71, 0.65) 100%) repeat scroll 0% 0%', description: 'This is an example description' },
  test:   { color: '#8ea885', imgUrl: categoryD, cssGradient: 'rgba(0, 0, 0, 0) linear-gradient(0deg, rgba(86, 86, 102, 0.5) 0%, rgba(91, 158, 204, 0.75) 100%) repeat scroll 0% 0%', description: 'This is an example description' },
};

export function getColorOfCategory(name: string): string | undefined {
  return CATEGORIES[name]!.color;
}

export function getCaterogies() {
  return CATEGORIES;
}

export function getCategoryByName(name: string) {
  return CATEGORIES[name];
}
