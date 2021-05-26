import { useParams } from 'react-router-dom';
import { getBlogPostsOfCategory } from 'services/PostService';
import BlogPostList, { BlogPost } from 'components/BlogPostList';

export default function Category() {
  const { name } = useParams<{ name: string }>();
  return (
    <div>
      <h3>{name}</h3>
      <BlogPostList 
        fn={() => ((): Array<BlogPost> => getBlogPostsOfCategory(name))()} 
      />
    </div>
  );
}
