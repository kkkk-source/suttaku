import { useState, useEffect } from 'react';
import { IBlogPost, getBlogPostsOfYear } from 'services/BlogPostService';
import BlogPostList from 'components/BlogPostList';
import CategoryList from 'components/CategoryList';
import styles from './Archives.module.scss';

const years: Array<string> = [ '2021', '2018', '2020', '2019' ];

export default function Archives(): JSX.Element {
  const [ timelapses, setTimelapses ] = useState<Array<JSX.Element>>([]);
  useEffect(() => {
    const tmp: Array<JSX.Element> = [];
    for (let i = 0; i < years.length; i++) {
      const blogPosts: Array<IBlogPost> | undefined = getBlogPostsOfYear(years[i]);
      if (!blogPosts) {
        continue;
      }
      tmp.push(
        <Timelapse 
          key={years[i]} 
          year={years[i]} >
          <BlogPostList 
            blogPosts={blogPosts} />
        </Timelapse>
      );
    };
    setTimelapses(tmp);
  }, []);

  return (
    <div className={styles.archives}>
      <h2>Categories</h2>
      <CategoryList />
      {timelapses}
    </div>
  );
}

function Timelapse({ 
  year, 
  children 
}: { year: string, children: JSX.Element }): JSX.Element {
  return (
    <div>
      <h3>{year}</h3>
      {children}
    </div>
  );
}
