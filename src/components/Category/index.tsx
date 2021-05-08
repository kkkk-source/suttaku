import style from './Category.module.scss';

const CATEGORIES: { [key: string]: string } = {
  syntax: '#2a9d8f',
  themes: '#ffb900',
  试:     '#8ea885',
  test:   '#df7988',
};

function Category({ name }: { name: string }): JSX.Element {
  return (
    <a 
      className={style.category} 
      style={{ backgroundColor: CATEGORIES[name] }} 
      href="/"
    >
      {name}
    </a>
  );
};

export default Category;
