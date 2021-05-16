export interface BlogPostShortResponse {
  id:         number
  imgUrl:     string
  title:      string
  subtitle:   string
  time:       string
  categories: Array<string>
}

const postsSummary: Array<BlogPostShortResponse> = [
  { 
    id: 0,
    imgUrl: 'https://d33wubrfki0l68.cloudfront.net/e7b81c3834dbdf86da47bd55be8f171a2faff64d/c9cf2/p/test-chinese/helena-hertz-wwzzxldpmog-unsplash_hu45a5e3ad5e058da6a00650ed8fd40bea_15530_800x0_resize_q75_box.jpg', 
    title: 'Chinese Test', 
    subtitle: '这是一个副标题', 
    time:'Sep 09, 2020',
    categories: [ 'test', '试' ]
  },
  { 
    id: 1,
    imgUrl: 'https://d33wubrfki0l68.cloudfront.net/aa669f7930e11782a8638dfddb6a02b5d43ca4a2/94cc0/p/markdown-syntax-guide/pawel-czerwinski-8uzpyniu-rq-unsplash_hud7e36f7e20e71be184458283bdae4646_55974_800x0_resize_q75_box.jpg', 
    title: 'Markdown Syntax Guide', 
    subtitle: 'Sample article showcasing basic Markdown syntax and formatting for HTML elements.', 
    time:'Mar 11, 2019',
    categories: [ 'syntax', 'themes' ]
  },
  { 
    id: 2,
    imgUrl: 'https://d33wubrfki0l68.cloudfront.net/0ad700b881a5b99353a7e33d458c64662d5d76ce/79bdf/p/placeholder-text/matt-le-sjspo9hqf7s-unsplash_hu958d513eeefe5556a31d065479ecc5ac_14205_800x0_resize_q75_box.jpg', 
    title: 'Placeholder Text', 
    subtitle: 'Lorem Ipsum Dolor Si Amet', 
    time:'Mar 09, 2019',
    categories: [ '试', 'themes' ]
  },
];

const fmt = (title: string) => title.trim().replace(/\s+/g, '-').toLowerCase();

export function getBlogPostShort(): Array<BlogPostShortResponse> {
  return postsSummary;
}

export function getBlogPostByTitle(title: string): BlogPostShortResponse | undefined {
  for (let i = 0; i < postsSummary.length; i++) {
    if (fmt(postsSummary[i].title) === title) {
      return postsSummary[i];
    }
  }
  return undefined;
}
