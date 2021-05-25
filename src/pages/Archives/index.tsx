import { getBlogPostsOfYear } from 'services/PostService';
import CategoryList from 'components/CategoryList';
import BlogPostList from 'components/BlogPostList';
import styles from './Archives.module.scss';

const years: Array<string> = [
  '2021',
  '2020',
  '2019',
  '2018',
  '2017',
  '2016',
  '2015',
];

export default function Archives() {
  const timelapses: Array<JSX.Element> = [];

  for (let i = 0; i < years.length; i++) {
    const posts = getBlogPostsOfYear(years[i]);

    if (posts.length === 0) {
      continue;
    }

    timelapses.push(
      <Timelapses year={years[i]}>
        <BlogPostList blogPosts={posts} />
      </Timelapses>
    );
  }

  return (
    <div className={styles.archives}>
      <h2>Categories</h2>
      <CategoryList />
      {timelapses}
    </div>
  );
}

function Timelapses({ year, children }: { year: string, children: JSX.Element }) {
  return (
    <div>
      <h3>{year}</h3>
      {children}
    </div>
  );
}
