import { ComponentType } from 'react';
import { Redirect } from 'react-router-dom';

interface WithRedirectProps<T> {
  data: Array<T>;
}

export function withRedirect<T, P extends WithRedirectProps<T>, C>(
  WrappedComponent: ComponentType<P & C>,
  data: Array<T> | undefined
) {

  type Props = JSX.LibraryManagedAttributes<C, Omit<P, 'data'>>;

  return function(props: Props) {
    if (!data) {
      return <Redirect to='/' />;
    }

    return (
      <WrappedComponent 
        data={data} 
        {...(props as any)} />
    );
  }
}
