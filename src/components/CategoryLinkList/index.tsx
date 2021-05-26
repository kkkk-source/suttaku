import { Link } from 'react-router-dom';
import { getColorOfCategory } from 'services/CategoryService';
import styles from './CategoryLinkList.module.scss';

export default function CategoryLinkList({ categories }: { categories: Array<string> }): JSX.Element {
  const categoryLinks: Array<JSX.Element> = categories.map((category: string) => {
    return ( <CategoryLink key={category} name={category} />);
  });

  return (
    <ul className={styles.categoryLinkList}>
      {categoryLinks}
    </ul>
  );
};

function CategoryLink({ name }: { name: string }): JSX.Element {
  return (
    <Link 
      to={`/c/${name}`}
      style={{ backgroundColor: getColorOfCategory(name) }} 
    >
      {name}
    </Link>
  );
};
