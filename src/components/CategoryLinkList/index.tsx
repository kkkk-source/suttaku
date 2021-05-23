import { Link } from 'react-router-dom';
import { getColorOfCategory } from 'services/CategoryService';
import styles from './CategoryLinkList.module.scss';

function CategoryLinkList({ categories }: { categories: Array<string> }): JSX.Element {
  const categoryLinks: Array<JSX.Element> = [];
  for (let i = 0; i < categories.length; i++) {
    categoryLinks.push(
      <CategoryLink key={i} name={categories[i]} />
    );
  }

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

export default CategoryLinkList;
