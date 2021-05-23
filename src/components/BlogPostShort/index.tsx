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
  const link = fmtTitle(title);
  const date = fmtDate(time);
  return (
    <RoundBox>
      <div className={styles.blogPostShort}>
        <Header
          url={imgUrl} 
          title={title} 
          link={link} 
        />
        <div>
          <CategoryLinkList
            categories={categories} 
          />
          <Resume 
            title={title} 
            subtitle={subtitle} 
            link={link} 
          />
          <Footer 
            time={date} 
          />
        </div>
      </div>
    </RoundBox>
  );
};

function Header({ link, title, url }: { link: string, title: string, url: string }): JSX.Element {
  return (
    <header>
      <Link to={`p/${link}`} onClick={() => window.scrollTo(0, 0)}>
        <img 
          src={url} 
          alt={title} 
        />
      </Link>
    </header>
  );
};

function Resume({ link, title, subtitle }: { link: string, title: string, subtitle: string }): JSX.Element {
  return (
    <>
      <h2>
        <Link to={`p/${link}`} onClick={() => window.scrollTo(0, 0)}>
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
