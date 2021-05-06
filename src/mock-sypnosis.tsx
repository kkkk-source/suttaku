export interface SypnosisProps {
  imgURL:     string
  title:      string
  subtitle:   string
  time:       string
  categories: Array<string>
};

export const SYPNOSIS: Array<SypnosisProps> = [
  { 
    imgURL: 'https://d33wubrfki0l68.cloudfront.net/e7b81c3834dbdf86da47bd55be8f171a2faff64d/c9cf2/p/test-chinese/helena-hertz-wwzzxldpmog-unsplash_hu45a5e3ad5e058da6a00650ed8fd40bea_15530_800x0_resize_q75_box.jpg', 
    title: 'Markdown Syntax Guide', 
    subtitle: 'Sample article showcasing basic Markdown syntax and formatting for HTML elements.', 
    time:'Mar 11, 2019',
    categories: [ 'syntax', 'test', 'themes', '试' ]
  },
];
