import { useParams } from 'react-router-dom';
import { getBlogPostsOfCategory } from 'services/PostService';
import BlogPostList from 'components/BlogPostList';

export default function Category() {
  const { name } = useParams<{ name: string }>();
  const blogPosts = getBlogPostsOfCategory(name);

  return (
    <div>
      <h3>{name}</h3>
      <BlogPostList blogPosts={blogPosts} />
    </div>
  );
}
