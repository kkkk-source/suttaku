import { FunctionComponent } from 'react';
import ClockSVG from 'components/svg/Clock';
import Category from 'components/Category';
import style from './Sypnosis.module.scss';

export interface SypnosisProps {
  imgUrl:     string
  title:      string
  subtitle:   string
  time:       string
  categories: Array<string>
}

const Sypnosis: FunctionComponent<SypnosisProps> = ({ title, subtitle, imgUrl, time, categories }) => {
  return (
    <article className={style.sypnosis}>
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

const Header: FunctionComponent<{ url: string, alt: string }> = ({ url, alt }) => {
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

const Categories: FunctionComponent<{ categories: Array<string> }> = ({ categories }) => {
  const categoryComponents: Array<JSX.Element> = [];
  for (let i = 0; i < categories.length; i++) {
    categoryComponents.push( <Category name={categories[i]} />);
  }

  return (
    <ul className={style.sypnosis__categories}>
      {categoryComponents}
    </ul>
  );
};

const Resume: FunctionComponent<{ title: string, subtitle: string }> = ({ title, subtitle }) => {
  return (
    <>
      <h2 className={style.sypnosis__title}>
        <a className={style.sypnosis__titleLink}
          href="/" >
          {title}
        </a>
      </h2>
      <h3 className={style.sypnosis__subtitle}>
        {subtitle}
      </h3>
    </>
  );
};

const Footer: FunctionComponent<{ time: string }> = ({ time }) => {
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
