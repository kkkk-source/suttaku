import BlogPostShort from 'components/BlogPostShort';
import { getBlogPostShort, BlogPostShortResponse } from 'services/PostService';

export default function BlogPosts(): JSX.Element  {
  const blogPosts: Array<JSX.Element> = getBlogPostShort().map((blogPost: BlogPostShortResponse) => {
    return (
      <BlogPostShort 
        key={blogPost.title} 
        title={blogPost.title} 
        imgUrl={blogPost.imgUrl} 
        categories={blogPost.categories}
        subtitle={blogPost.subtitle} 
        time={blogPost.time} 
      />
    );
  });

  return <div>{blogPosts}</div>;
};
