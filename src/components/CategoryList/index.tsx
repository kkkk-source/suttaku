import { Link } from 'react-router-dom';
import { ICategory, getCaterogies } from 'services/CategoryService';
import styles from './CategoryList.module.scss';

export default function CategoryList(): JSX.Element {
  const categories = getCaterogies().map((category: ICategory) => {
    return (
      <Category
        key={category.name} 
        name={category.name} 
        imgUrl={category.imgUrl} 
        cssGradient={category.cssGradient} 
      />
    );
  });

  return (
    <div className={styles.categoryList}>
      {categories}
    </div>
  );
}

function Category({ name, imgUrl, cssGradient }: { name: string, imgUrl: string, cssGradient: string }): JSX.Element {
  return (
    <article>
      <Link to={`/c/${name}`}>
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
