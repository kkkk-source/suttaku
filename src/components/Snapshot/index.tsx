import { fmtDate } from 'services/FmtService';
import styles from './Snapshot.module.scss';

export default function Snapshot({ title, date, imgUrl }: { title: string, date: string, imgUrl: string }) {
  const formatedDate = fmtDate(date);
  return (
    <article className={styles.snapshot}>
      <a href="/#">
        <div>
          <h4>{title}</h4>
          <time>{formatedDate}</time>
        </div>
        <img src={imgUrl} alt={title} />
      </a>
    </article>
  );
}
