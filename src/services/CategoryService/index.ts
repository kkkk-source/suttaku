// key - category name; value - hexadecimal code color
const CATEGORIES: { [name: string]: { color: string, imgUrl: string, cssGradient: string } } = {
  syntax: { color: '#df7988', imgUrl: 'https://i.pinimg.com/564x/2b/12/84/2b128492950ae8364af6578709497d7a.jpg', cssGradient: 'rgba(0, 0, 0, 0) linear-gradient(0deg, rgba(86, 86, 102, 0.5) 0%, rgba(91, 158, 204, 0.75) 100%) repeat scroll 0% 0%' },
  试:     { color: '#2a9d8f', imgUrl: 'https://i.pinimg.com/564x/7a/66/79/7a667937a36ee997c832a491a2ddd116.jpg', cssGradient: 'rgba(0, 0, 0, 0) linear-gradient(0deg, rgba(86, 86, 102, 0.5) 0%, rgba(0, 177, 106, 0.65) 100%) repeat scroll 0% 0%' },
  themes: { color: '#ffb900', imgUrl: 'https://i.pinimg.com/564x/39/d6/f1/39d6f1ade0126c510a2189b0f2f107d8.jpg', cssGradient: 'rgba(0, 0, 0, 0) linear-gradient(0deg, rgba(86, 86, 102, 0.5) 0%, rgba(246, 71, 71, 0.65) 100%) repeat scroll 0% 0%' },
  test:   { color: '#8ea885', imgUrl: 'https://i.pinimg.com/564x/3a/3c/56/3a3c564aa715450a4b4448eed8df3963.jpg', cssGradient: 'rgba(0, 0, 0, 0) linear-gradient(0deg, rgba(86, 86, 102, 0.5) 0%, rgba(91, 158, 204, 0.75) 100%) repeat scroll 0% 0%' },
};

export function getColorOfCategory(name: string): string | undefined {
  return CATEGORIES[name]!.color;
}

export function getCaterogies() {
  return CATEGORIES;
}
