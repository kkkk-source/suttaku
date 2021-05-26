import RoundBox from 'components/RoundBox';
import { getCategoryByName } from 'services/CategoryService';
import styles from './CategoryFact.module.scss';

export default function CategoryFact({ name }: { name: string }) {
  const category = getCategoryByName(name);
  return (
    <RoundBox>
      <div className={styles.categoryFact}>
        <div>
          <h2>{name}</h2>
          <p>{category.description}</p>
        </div>
        <img src={category.imgUrl} alt={name} />
      </div>
    </RoundBox>
  );
}
