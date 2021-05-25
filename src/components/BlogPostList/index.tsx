import { Link } from 'react-router-dom';
import { fmtTitle, fmtDate } from 'services/FmtService';
import styles from './BlogPostList.module.scss';

interface BlogPostList {
  title:  string
  imgUrl: string
  time:   string
}

export default function BlogPostList({ blogPosts }: { blogPosts: Array<{ title: string, imgUrl: string, time: string }> }) {
  const jsxElements: Array<JSX.Element> = [];
  for (let i = 0; i < blogPosts.length; i++) {
    const blogPost = blogPosts[i];
    jsxElements.push(
      <BlogPostListItem 
        title={blogPost.title}
        imgUrl={blogPost.imgUrl}
        date={blogPost.time}
      />
    );
  }
  return (
    <section className={styles.blogPostList}>
      {jsxElements}
    </section>
  );
}

function BlogPostListItem({ title, date, imgUrl }: { title: string, date: string, imgUrl: string }) {
  const formatedTitle = fmtTitle(title);
  const time = fmtDate(date);
  return (
    <article>
      <Link to={`/p/${formatedTitle}`} onClick={() => window.scrollTo(0, 0)}>
        <div>
          <h4>{title}</h4>
          <time>{time}</time>
        </div>
        <img src={imgUrl} alt={title} />
      </Link>
    </article>
  );
}
