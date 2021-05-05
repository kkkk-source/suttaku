import React from 'react';
import style from './ArticleAbstract.module.scss';

const ArticleAbstractBody: React.FunctionComponent<{ title: string, subtitle:string }> = ({title, subtitle}) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </div>
  );
};

export default ArticleAbstractBody;
