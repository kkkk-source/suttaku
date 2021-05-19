import CategoryList from 'components/CategoryList';
import styles from './Archives.module.scss';

export default function Archives() {
  return (
    <div className={styles.archives}>
      <h2>Categories</h2>
      <CategoryList />
    </div>
  );
}
