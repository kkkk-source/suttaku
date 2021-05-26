import { getBlogPostsOfYear } from 'services/PostService';
import BlogPostList, { BlogPost } from 'components/BlogPostList';
import CategoryList from 'components/CategoryList';
import styles from './Archives.module.scss';

const years: Array<string> = [ '2021', '2020' ];

export default function Archives() {
  const timelapses: Array<JSX.Element> = years.map((year: string) => {
    return (
      <Timelapse 
        key={year} 
        year={year}
      >
        <BlogPostList 
          fn={() => ((): Array<BlogPost> => getBlogPostsOfYear(year))()} 
        />
      </Timelapse>
    );
  });

  return (
    <div className={styles.archives}>
      <h2>Categories</h2>
      <CategoryList />
      {timelapses}
    </div>
  );
}

function Timelapse({ year, children }: { year: string, children: JSX.Element }) {
  return (
    <div>
      <h3>{year}</h3>
      {children}
    </div>
  );
}
