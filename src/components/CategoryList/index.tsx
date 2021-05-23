import { Link } from 'react-router-dom';
import { getCaterogies } from 'services/CategoryService';
import styles from './CategoryList.module.scss';

export default function CategoryList(): JSX.Element {
  const categories = getCaterogies()
  const categoriesJSX: Array<JSX.Element> = [];
  for (let name in categories) {
    categoriesJSX.push(<Category key={name} name={name} imgUrl={categories[name].imgUrl} cssGradient={categories[name].cssGradient} />);
  }

  return (
    <div className={styles.categoryList}>
      {categoriesJSX}
    </div>
  );
}

function Category({ name, imgUrl, cssGradient }: { name: string, imgUrl: string, cssGradient: string }): JSX.Element {
  return (
    <article>
      <Link to={`c/${name}`}>
        <div>
          <img
            src={imgUrl}
            alt={`category ${name}`} 
          />
        </div>
        <div style={{ background: cssGradient }}>
          <h3>
            {name}
          </h3>
        </div>
      </Link>
    </article>
  );
}
