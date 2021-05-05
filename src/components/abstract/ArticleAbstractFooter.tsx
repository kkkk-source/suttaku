import React from 'react';

const ArticleAbstractFooter: React.FunctionComponent<{ time: string }> = ({time}) => {
  return (
    <footer>
      <time>{time}</time>
    </footer>
  );
};

export default ArticleAbstractFooter;
