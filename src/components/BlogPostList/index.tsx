import { Link, Redirect } from 'react-router-dom';
import { IBlogPost } from 'services/BlogPostService'; 
import { formatTitle, formateDate } from 'services/FormatterService';
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

  if (!blogPostListItems.length) {
    return (
      <Redirect to='/' />
    );
  }

  return (
    <section className={styles.blogPostList}>
      {blogPostListItems}
    </section>
  );
}

function BlogPostListItem({ title, time, imgUrl }: { title: string, time: string, imgUrl: string }) {
  const formatedTitle = formatTitle(title);
  const formatedTime = formateDate(time);

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
