import CardLayout from 'components/CardLayout';
import CategoryLink from 'components/CategoryLink';
import ClockSVG from 'components/svg/ClockSVG';
import styles from './Sypnosis.module.scss';

export interface SypnosisProps {
  title:      string
  subtitle:   string
  categories: Array<string>
  imgUrl:     string
  time:       string
}

export default function Sypnosis({ 
  title, 
  subtitle, 
  categories,
  imgUrl, 
  time, 
}: SypnosisProps): JSX.Element {
  return (
    <CardLayout>
      <div className={styles.sypnosis}>
        <Header
          url={imgUrl} 
          alt={title} 
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
    </CardLayout>
  );
};

function Header({ url, alt }: { url: string, alt: string }): JSX.Element {
  return (
    <header>
      <a href="/#">
        <img 
          src={url} 
          alt={alt} 
        />
      </a>
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
