import { FunctionComponent } from 'react';
import '../../App.scss';
import './Sypnosis.module.scss';

interface SypnosisProps {
  imgURL:   string
  title:    string
  subtitle: string
  time:     string
}

const Sypnosis: FunctionComponent<SypnosisProps> = ({ title, subtitle, imgURL, time }) => {
  return (
    <article>
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
        fill="none" stroke-linecap="round" stroke-linejoin="round" >
        <path stroke="none" d="M0 0h24v24H0z"></path>
        <circle cx="12" cy="12" r="9"></circle>
        <polyline points="12 7 12 12 15 15"></polyline>
      </svg>
      <time>{time}</time>
    </footer>
  );
};

export default Sypnosis;
