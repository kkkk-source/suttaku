import { FunctionComponent } from 'react';
import style from './Category.module.scss';

const categories: { [key: string]: string } = {
  syntax: '#2a9d8f',
  themes: '#ffb900',
  test:   '#df7988',
  试:     '#8ea885',
};

const Category: FunctionComponent<{ name: string }> = ({ name }) => {
  return (
    <a className={style.category} style={{ backgroundColor: categories[name] }} href="/">
        {name}
    </a>
  );
};

export default Category;
