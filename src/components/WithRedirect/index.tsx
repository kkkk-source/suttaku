import { ComponentType } from 'react';
import { Redirect } from 'react-router-dom';

interface WithRedirectProps<T> {
  data: Array<T>;
}

export function withRedirect<T, P extends WithRedirectProps<T>, C>(
  WrappedComponent: ComponentType<P & C>,
  getData: () => Array<T>
) {

  type Props = JSX.LibraryManagedAttributes<C, Omit<P, 'data'>>;

  return function(props: Props) {
    const data: Array<T> = getData(); 

    if (!data.length) {
      return <Redirect to='/' />;
    }

    return (
      <WrappedComponent 
        data={data} 
        {...(props as any)} />
    );
  }
}
