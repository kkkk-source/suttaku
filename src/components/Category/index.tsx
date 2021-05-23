import { useParams } from 'react-router-dom';

export default function Category() {
  const { name } = useParams<{ name: string }>();
  return (
    <h3>
      {name}
    </h3>
  );
}
