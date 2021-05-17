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
    <a 
      href="/#"
      style={{ backgroundColor: COLORS[name] }} 
      rel="noreferrer"
    >
      {name}
    </a>
  );
};

// key - category name; value - hexadecimal code color
const COLORS: { [categoryName: string]: string | undefined } = {
  syntax: '#2a9d8f',
  themes: '#ffb900',
  试:     '#8ea885',
  test:   '#df7988',
};

export default CategoryLinkList;
