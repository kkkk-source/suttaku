import { Link } from 'react-router-dom';
import { getCaterogies } from 'services/CategoryService';
import styles from './CategoryList.module.scss';

export default function CategoryList(): JSX.Element {
  const categories: Array<JSX.Element> = [];
  for (let name in getCaterogies()) {
    categories.push(<Category key={name} name={name} />);
  }

  return (
    <div className={styles.categoryList}>
      {categories}
    </div>
  );
}

function Category({ name }: { name: string }): JSX.Element {
  return (
    <article>
      <Link to={`c/${name}`}>
        <div>
          <img 
            src="https://d33wubrfki0l68.cloudfront.net/854bc7c7847a97f4fab1ed9f1fd0d603f7c64ccc/05580/categories/test/_hu8102ac0a5989befdf52fa5096a373f78_52927_ba0b8e744b36f1e48b9c54b5d2847004.jpg" 
            alt={`category ${name}`} 
          />
        </div>
        <div>
          <h3>
            {name}
          </h3>
        </div>
      </Link>
    </article>
  );
}
