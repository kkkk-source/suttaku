import { FunctionComponent } from 'react';
import style from './Sypnosis.module.scss';

interface SypnosisProps {
  imgURL:   string
  title:    string
  subtitle: string
  time:     string
}

const Sypnosis: FunctionComponent<SypnosisProps> = ({ title, subtitle, imgURL, time }) => {
  return (
    <article className={style.sypnosis} >
      <Header 
        url={imgURL} 
        alt={title} 
      />
      <Body 
        title={title} 
        subtitle={subtitle} 
      />
      <Footer time={time} />
    </article>
  );
};

const Header: FunctionComponent<{ url: string, alt: string }> = ({ url, alt }) => {
  return (
    <header className={style.header} >
      <a className={style.imageLink} href="/">
        <img 
          className={style.image}
          src={url} 
          alt={alt} 
        />
      </a>
    </header>
  );
};

const Body: FunctionComponent<{ title: string, subtitle: string }> = ({ title, subtitle }) => {
  return (
    <div className={style.body} >
      <h2 className={style.title}>{title}</h2>
      <h3 className={style.subtitle}>{subtitle}</h3>
    </div>
  );
};

const Footer: FunctionComponent<{ time: string }> = ({ time }) => {
  return (
    <footer className={style.footer} >
      <time>{time}</time>
    </footer>
  );
};

export default Sypnosis;
