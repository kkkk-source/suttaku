import { IBlogPost, getBlogPostsOfYear } from 'services/BlogPostService';
import { withRedirect } from 'components/WithRedirect';
import BlogPostList from 'components/BlogPostList';
import CategoryList from 'components/CategoryList';
import styles from './Archives.module.scss';

const years: Array<string> = [ '2021', '2020' ];

export default function Archives() {
  const timelapses: Array<JSX.Element> = years.map((year: string) => {
    function getBlogPostsOfYearX() {
      return function(): Array<IBlogPost> {
        return getBlogPostsOfYear(year);
      }
    }

    const BlogPostListWithRedirect = withRedirect(BlogPostList, getBlogPostsOfYearX());

    return (
      <Timelapse 
        key={year} 
        year={year}
      >
        <BlogPostListWithRedirect />
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
