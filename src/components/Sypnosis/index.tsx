import { FunctionComponent } from 'react';
import clockSVG from 'assets/clock.svg';
import './Sypnosis.module.scss';

interface SypnosisProps {
  imgUrl:   string
  title:    string
  subtitle: string
  time:     string
}

const Sypnosis: FunctionComponent<SypnosisProps> = ({ title, subtitle, imgUrl, time }) => {
  return (
    <article>
      <Header 
        url={imgUrl} 
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
    <header>
      <a href="/">
        <img 
          src={url} 
          alt={alt} 
        />
      </a>
    </header>
  );
};

const Body: FunctionComponent<{ title: string, subtitle: string }> = ({ title, subtitle }) => {
  return (
    <div >
      <h2><a href="/">{title}</a></h2>
      <h3>{subtitle}</h3>
    </div>
  );
};

const Footer: FunctionComponent<{ time: string }> = ({ time }) => {
  return (
    <footer>
      <img src={clockSVG} alt="logo"/>
      <time>{time}</time>
    </footer>
  );
};

export default Sypnosis;
