import { getBlogPostsOfCategory } from 'services/PostService';
import { useParams } from 'react-router-dom';

export default function Category() {
  const { name } = useParams<{ name: string }>();
  const blogPosts = getBlogPostsOfCategory(name);
  const blogPostsJSX: Array<JSX.Element> = [];

  for (let i = 0; i < blogPosts.length; i++) {
    blogPostsJSX.push(<BlogPost key={i} title={blogPosts[i].title} />);
  }

  return (
    <div>
      <h3>
        {name}
      </h3>
      {blogPostsJSX}
    </div>
  );
}

function BlogPost({ title }: { title: string }) {
  return (
    <div>
      {title}
    </div>
  );
}
