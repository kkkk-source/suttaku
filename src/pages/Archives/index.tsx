import { getBlogPostsOfYear } from 'services/PostService';
import CategoryList from 'components/CategoryList';
import Timelapse from 'components/Timelapse';
import Snapshot from 'components/Snapshot';
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
    const snaptshots: Array<JSX.Element> = [];
    const posts = getBlogPostsOfYear(years[i]);

    if (posts.length === 0) {
      continue;
    }

    for (let j = 0; j < posts.length; j++) {
      const post = posts[j];

      snaptshots.push(
        <Snapshot 
          key={post.title}
          title={post.title} 
          date={post.time} 
          imgUrl={post.imgUrl} 
        />
      );
    }
    timelapses.push(
      <Timelapse 
        key={years[i]}
        year={years[i]} 
        snaptshots={snaptshots} 
      />
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
