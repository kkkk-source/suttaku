import { Link } from 'react-router-dom';
import { fmtDate, fmtTitle } from 'services/FmtService';
import styles from './Snapshot.module.scss';

export default function Snapshot({ title, date, imgUrl }: { title: string, date: string, imgUrl: string }) {
  const formatedTitle = fmtTitle(title);
  const formatedDate = fmtDate(date);
  return (
    <article className={styles.snapshot}>
      <Link to={`p/${formatedTitle}`} onClick={() => window.scrollTo(0, 0)}>
        <div>
          <h4>{title}</h4>
          <time>{formatedDate}</time>
        </div>
        <img src={imgUrl} alt={title} />
      </Link>
    </article>
  );
}
