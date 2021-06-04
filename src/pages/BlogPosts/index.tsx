import { useState, useEffect } from 'react';
import BlogPostShort from 'components/BlogPostShort';
import { getBlogPosts, IBlogPost } from 'services/BlogPostService';

export default function BlogPosts(): JSX.Element  {
  const [ blogPosts, setBlogPosts ] = useState<Array<JSX.Element>>([]);
  useEffect(() => {
    setBlogPosts(getBlogPosts().map((blogPost: IBlogPost) => {
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
    }));
  }, []);

  return <>{blogPosts}</>;
};
