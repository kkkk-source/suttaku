import { Link } from 'react-router-dom';
import { toParamTitle } from 'services/FmtService';
import RoundBox from 'components/RoundBox';
import CategoryLink from 'components/CategoryLink';
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
  return (
    <RoundBox>
      <div className={styles.blogPostShort}>
        <Header
          url={imgUrl} 
          title={title} 
        />
        <div>
          <CategoryLinkList
            categories={categories} 
          />
          <Resume 
            title={title} 
            subtitle={subtitle} 
          />
          <Footer 
            time={time} 
          />
        </div>
      </div>
    </RoundBox>
  );
};

function Header({ url, title }: { url: string, title: string }): JSX.Element {
  return (
    <header>
      <Link 
        to={`p/${toParamTitle(title)}`} 
      >
        <img 
          src={url} 
          alt={title} 
        />
      </Link>
    </header>
  );
};

function CategoryLinkList({ categories }: { categories: Array<string> }): JSX.Element {
  const categoryElements: Array<JSX.Element> = [];
  for (let i = 0; i < categories.length; i++) {
    categoryElements.push(<CategoryLink key={i} name={categories[i]} />);
  }
  return <ul>{categoryElements}</ul>;
};

function Resume({ title, subtitle }: { title: string, subtitle: string }): JSX.Element {
  return (
    <>
      <h2><a href="/#">{title}</a></h2>
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
