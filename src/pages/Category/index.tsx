import { useParams } from 'react-router-dom';
import { getBlogPostsOfCategory } from 'services/PostService';
import BlogPostList, { BlogPost } from 'components/BlogPostList';
import CategoryFact from 'components/CategoryFact';

export default function Category() {
  const { name } = useParams<{ name: string }>();
  return (
    <div>
      <CategoryFact name={name} />
      <BlogPostList 
        fn={() => ((): Array<BlogPost> => getBlogPostsOfCategory(name))()} 
      />
    </div>
  );
}
