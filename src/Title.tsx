import React from 'react';

export const Title: React.FunctionComponent<{ title: string }> = ({title}) => {
  return (
    <div>
      {title}
    </div>
  );
};
