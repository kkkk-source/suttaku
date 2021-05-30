import { Link } from 'react-router-dom';
import { IBlogPost } from 'services/BlogPostService'; 
import { titleFormatter, dateFormatter } from 'services/FormatterService';
import styles from './BlogPostList.module.scss';

export default function BlogPostList({ fn }: { fn: () => Array<IBlogPost> }) {
  const blogPostListItems: Array<JSX.Element> = fn().map((blogPost: IBlogPost) => {
    return (
      <BlogPostListItem 
        key={blogPost.title} 
        time={blogPost.time} 
        imgUrl={blogPost.imgUrl} 
        title={blogPost.title} 
      />
    );
  });

  if (blogPostListItems.length === 0) {
    return (<></>);
  } else {
    return (
      <section className={styles.blogPostList}>
        {blogPostListItems}
      </section>
    );
  }
}

function BlogPostListItem({ title, time, imgUrl }: { title: string, time: string, imgUrl: string }) {
  const formatedTitle = titleFormatter(title);
  const formatedTime = dateFormatter(time);

  function handleClick() {
    window.scrollTo(0, 0);
  }

  return (
    <article>
      <Link to={`/p/${formatedTitle}`} onClick={handleClick}>
        <div>
          <h4>{title}</h4>
          <time>{formatedTime}</time>
        </div>
        <img src={imgUrl} alt={title} />
      </Link>
    </article>
  );
}
