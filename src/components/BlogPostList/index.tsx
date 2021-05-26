import { Link } from 'react-router-dom';
import { fmtTitle, fmtDate } from 'services/FmtService';
import styles from './BlogPostList.module.scss';

export interface BlogPost {
  title:  string
  imgUrl: string
  time:   string
}

export default function BlogPostList({ fn }: { fn: () => Array<BlogPost> }) {
  const blogPostListItems: Array<JSX.Element> = fn().map((blogPost: BlogPost) => {
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
    return (
      <>
      </>
    );
  } else {
    return (
      <section className={styles.blogPostList}>
        {blogPostListItems}
      </section>
    );
  }
}

function BlogPostListItem({ title, time, imgUrl }: BlogPost) {
  const formatedTitle = fmtTitle(title);
  const date = fmtDate(time);
  return (
    <article>
      <Link to={`/p/${formatedTitle}`} onClick={() => window.scrollTo(0, 0)}>
        <div>
          <h4>{title}</h4>
          <time>{date}</time>
        </div>
        <img src={imgUrl} alt={title} />
      </Link>
    </article>
  );
}
