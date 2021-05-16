import BlogPostShort from 'components/BlogPostShort';
import { getBlogPostShort, BlogPostShortResponse } from 'services/PostService';

export default function Posts(): JSX.Element  {
  const postsSummary: Array<BlogPostShortResponse> = getBlogPostShort(); 
  const postSummaryJsxElements: Array<JSX.Element> = [];

  for (let i = 0; i < postsSummary.length; i++) {
    const post = postsSummary[i];
    postSummaryJsxElements.push(
      <BlogPostShort 
        key={i} 
        imgUrl={post.imgUrl} 
        categories={post.categories}
        title={post.title} 
        subtitle={post.subtitle} 
        time={post.time} 
      />
    );
  }

  return <div>{postSummaryJsxElements}</div>;
};
