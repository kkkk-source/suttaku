import { Link } from 'react-router-dom';
import { fmtTitle, fmtDate } from 'services/FmtService';
import RoundBox from 'components/RoundBox';
import CategoryLinkList from 'components/CategoryLinkList';
import ClockSVG from 'components/svg/ClockSVG';
import styles from './BlogPostShort.module.scss';

export interface BlogPostShortProps {
  title:      string
  subtitle:   string
  categories: Array<string>
  imgUrl:     string
  time:       string
}

export default function BlogPostShort({ 
  title, 
  subtitle, 
  categories,
  imgUrl, 
  time, 
}: BlogPostShortProps): JSX.Element {
  const paramTitle = fmtTitle(title);
  const formatedDate = fmtDate(time);
  return (
    <RoundBox>
      <div className={styles.blogPostShort}>
        <Header
          url={imgUrl} 
          title={title} 
          paramTitle={paramTitle} 
        />
        <div>
          <CategoryLinkList
            categories={categories} 
          />
          <Resume 
            title={title} 
            subtitle={subtitle} 
            paramTitle={paramTitle} 
          />
          <Footer 
            time={formatedDate} 
          />
        </div>
      </div>
    </RoundBox>
  );
};

function Header({ paramTitle, title, url }: { paramTitle: string, title: string, url: string }): JSX.Element {
  return (
    <header>
      <Link to={`p/${paramTitle}`} onClick={() => window.scrollTo(0, 0)}>
        <img 
          src={url} 
          alt={title} 
        />
      </Link>
    </header>
  );
};

function Resume({ paramTitle, title, subtitle }: { paramTitle: string, title: string, subtitle: string }): JSX.Element {
  return (
    <>
      <h2>
        <Link to={`p/${paramTitle}`} onClick={() => window.scrollTo(0, 0)}>
          {title}
        </Link>
      </h2>
      <h3>{subtitle}</h3>
    </>
  );
};

function Footer({ time }: { time: string }): JSX.Element {
  return (
    <footer>
      <ClockSVG />
      <time>{time}</time>
    </footer>
  );
};
