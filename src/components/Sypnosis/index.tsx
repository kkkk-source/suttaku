import { useAppSelector } from 'app/hooks';
import Category from 'components/Category';
import ClockSVG from 'components/svg/ClockSVG';
import style from './Sypnosis.module.scss';

export interface SypnosisProps {
  title:      string
  subtitle:   string
  imgUrl:     string
  time:       string
  categories: Array<string>
}

function Sypnosis({ title, subtitle, imgUrl, time, categories }: SypnosisProps): JSX.Element {
  const theme = useAppSelector(state => state.theme.value);

  return (
    <article className={`${theme === 'dark' ? style.sypnosisDark : style.sypnosisLight } ${style.sypnosis}`}>
      <Header
        url={imgUrl} 
        alt={title} 
      />
      <div className={style.sypnosis__resume}>
        <Categories categories={categories} />
        <Resume 
          title={title} 
          subtitle={subtitle} 
        />
        <Footer time={time} />
      </div>
    </article>
  );
};

function Header({ url, alt }: { url: string, alt: string }): JSX.Element {
  return (
    <header className={style.sypnosis__header}>
      <a className={style.sypnosis__bannerLink}
        href="/"
      >
        <img className={style.sypnosis__banner}
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
    categoryComponents.push( <Category key={i} name={categories[i]} />);
  }

  return (
    <ul className={style.sypnosis__categories}>
      {categoryComponents}
    </ul>
  );
};

function Resume({ title, subtitle }: { title: string, subtitle: string }): JSX.Element {
  return (
    <>
      <h2 className={style.sypnosis__title}>
        <a 
          href="/" 
          className={style.sypnosis__titleLink}
        >
          {title}
        </a>
      </h2>
      <h3 className={style.sypnosis__subtitle}>
        {subtitle}
      </h3>
    </>
  );
};

function Footer({ time }: { time: string }): JSX.Element {
  return (
    <footer className={style.sypnosis__footer}>
      <ClockSVG className={style.sypnosis__svg} />
      <time className={style.sypnosis__time}>
        {time}
      </time>
    </footer>
  );
};

export default Sypnosis;
