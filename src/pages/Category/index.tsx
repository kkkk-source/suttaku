import { Redirect, useParams } from 'react-router-dom';
import { ICategory, getCategoryByName } from 'services/CategoryService';
import { IBlogPost, getBlogPostsOfCategory } from 'services/BlogPostService';
import BlogPostList from 'components/BlogPostList';
import CategoryFact from 'components/CategoryFact';

export default function Category() {
  const { name } = useParams<{ name: string }>();
  const category: ICategory | undefined = getCategoryByName(name);
  const blogPosts: Array<IBlogPost> | undefined = getBlogPostsOfCategory(name);
  
  if (!category || !blogPosts) {
    return <Redirect to='/' />
  }

  return (
    <>
      <CategoryFact name={name} />
      <BlogPostList blogPosts={blogPosts} />
    </>
  );
}
