import React from 'react';
import ArticleAbstractHeader from './ArticleAbstractHeader';
import ArticleAbstractBody from './ArticleAbstractBody';
import ArticleAbstractFooter from './ArticleAbstractFooter';

import style from './ArticleAbstract.module.scss';

const ArticleAbstract: React.FunctionComponent = () => {
  return (
    <article className={style.abstract}>
      <ArticleAbstractHeader url="" />
      <ArticleAbstractBody title="" subtitle=""/>
      <ArticleAbstractFooter time="" />
    </article>
  );
};

export default ArticleAbstract;
