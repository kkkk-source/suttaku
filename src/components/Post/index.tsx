import { useParams } from 'react-router-dom';
import { getPostByTitle } from 'services/PostService';
import RoundBox from 'components/RoundBox';

export default function Post() {
  const { title } = useParams<{ title: string }>();
  const post = getPostByTitle(title);
  return (
    <RoundBox>
      <div>
        <h2>{post!.title}</h2>
        <h3>{post!.subtitle}</h3>
      </div>
    </RoundBox>
  );
}
