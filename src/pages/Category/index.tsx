import { useParams } from 'react-router-dom';
import { IBlogPost, getBlogPostsOfCategory } from 'services/BlogPostService';
import { withRedirect } from 'components/WithRedirect';
import BlogPostList from 'components/BlogPostList';
import CategoryFact from 'components/CategoryFact';

export default function Category() {
  const { name } = useParams<{ name: string }>();

  function getBlogPostsOfCategoryX() {
    return function(): Array<IBlogPost> {
      return getBlogPostsOfCategory(name);
    }
  }

  const BlogPostListWithRedirect = withRedirect(BlogPostList, getBlogPostsOfCategoryX());

  return (
    <>
      <CategoryFact name={name} />
      <BlogPostListWithRedirect />
    </>
  );
}
