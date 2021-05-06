import { FunctionComponent } from 'react';
import ClockSVG from 'components/svg/Clock';
import style from './Sypnosis.module.scss';

export interface SypnosisProps {
  imgUrl:   string
  title:    string
  subtitle: string
  time:     string
}

const Sypnosis: FunctionComponent<SypnosisProps> = ({ title, subtitle, imgUrl, time }) => {
  return (
    <article className={style.sypnosis}>
      <Header
        url={imgUrl} 
        alt={title} 
      />
      <Resume 
        title={title} 
        subtitle={subtitle} 
      />
      <Footer time={time} />
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

const Resume: FunctionComponent<{ title: string, subtitle: string }> = ({ title, subtitle }) => {
  return (
    <div className={style.sypnosis__resume}>
      <h2 className={style.sypnosis__title}>
        <a className={style.sypnosis__titleLink}
          href="/" >
          {title}
        </a>
      </h2>
      <h3 className={style.sypnosis__subtitle}>
        {subtitle}
      </h3>
    </div>
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
