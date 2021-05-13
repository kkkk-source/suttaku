import styles from './CategoryLink.module.scss';

// key - category name; value - hexadecimal code color
const COLORS: { [categoryName: string]: string | undefined } = {
  syntax: '#2a9d8f',
  themes: '#ffb900',
  试:     '#8ea885',
  test:   '#df7988',
};

export default function CategoryLink({ name }: { name: string }): JSX.Element {
  return (
    <a 
      href="/#"
      style={{ backgroundColor: COLORS[name] }} 
      className={styles.category} 
      rel="noreferrer"
    >
      {name}
    </a>
  );
};
