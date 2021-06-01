import { Link } from 'react-router-dom';
import { formatTitle, formateDate } from 'services/FormatterService';
import RoundBox from 'components/RoundBox';
import CategoryLinkList from 'components/CategoryLinkList';
import ClockSVG from 'components/svg/ClockSVG';
import styles from './BlogPostShort.module.scss';

export interface BlogPostShortProps {
  title: string
  subtitle: string
  categories: Array<string>
  imgUrl: string
  time: string
}

export default function BlogPostShort({ 
  title, 
  subtitle, 
  categories,
  imgUrl, 
  time, 
}: BlogPostShortProps): JSX.Element {
  const link = formatTitle(title);
  const date = formateDate(time);
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

function Header({ 
  link, 
  title, 
  url 
}: { link: string, title: string, url: string }): JSX.Element {
  function handleClick() {
    window.scrollTo(0, 0);
  }

  return (
    <header>
      <Link to={`p/${link}`} onClick={handleClick}>
        <img 
          src={url} 
          alt={title} 
        />
      </Link>
    </header>
  );
};

function Resume({ 
  link, 
  title, 
  subtitle 
}: { link: string, title: string, subtitle: string }): JSX.Element {
  function handleClick() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <h2>
        <Link to={`p/${link}`} onClick={handleClick}>
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
