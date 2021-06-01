import { Link } from 'react-router-dom';
import { getColorOfCategory } from 'services/CategoryService';
import styles from './CategoryLinkList.module.scss';

interface CategoryLinkListProps {
  categories: Array<string>
}

export default function CategoryLinkList({ categories }: CategoryLinkListProps): JSX.Element {
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
  function handleClick() {
    window.scrollTo(0, 0);
  }

  return (
    <Link 
      to={`/c/${name}`}
      style={{ backgroundColor: getColorOfCategory(name) }} 
      onClick={handleClick}
    >
      {name}
    </Link>
  );
};
