import { useParams } from 'react-router-dom';
import { IBlogPost, getBlogPostsOfCategory } from 'services/BlogPostService';
import BlogPostList from 'components/BlogPostList';
import CategoryFact from 'components/CategoryFact';

export default function Category() {
  const { name } = useParams<{ name: string }>();
  return (
    <div>
      <CategoryFact name={name} />
      <BlogPostList 
        fn={() => ((): Array<IBlogPost> => getBlogPostsOfCategory(name))()} 
      />
    </div>
  );
}
