import { useParams } from 'react-router-dom';
import { getBlogPostByTitle } from 'services/PostService';
import RoundBox from 'components/RoundBox';

export default function BlogPost() {
  const { title } = useParams<{ title: string }>();
  const post = getBlogPostByTitle(title);
  return (
    <RoundBox>
      <div>
        <h2>{post!.title}</h2>
        <h3>{post!.subtitle}</h3>
      </div>
    </RoundBox>
  );
}
