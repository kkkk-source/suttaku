import React from 'react';
import style from './ArticleAbstract.module.scss';

const ArticleAbstractHeader: React.FunctionComponent<{ url: string }> = ({url}) => {
  return (
    <header>
      <a href="/">
        <img src={url} />
      </a>
    </header>
  );
};

export default ArticleAbstractHeader;
