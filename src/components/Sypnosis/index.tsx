import CardLayout from 'components/CardLayout';
import ClockSVG from 'components/svg/ClockSVG';
import Category from 'components/Category';
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
          <Categories 
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

function Categories({ categories }: { categories: Array<string> }): JSX.Element {
  const categoryComponents: Array<JSX.Element> = [];
  for (let i = 0; i < categories.length; i++) {
    categoryComponents.push(<Category key={i} name={categories[i]} />);
  }
  return <ul>{categoryComponents}</ul>;
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
      <ClockSVG className={''} />
      <time>{time}</time>
    </footer>
  );
};
