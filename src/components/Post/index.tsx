import { useParams } from 'react-router-dom';

export default function Post() {
  const { id } = useParams<{ id: string }>();

  return (
    <h1>
      hello there {id}
    </h1>
  );
}
