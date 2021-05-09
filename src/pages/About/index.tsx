import ClockSVG from 'components/svg/ClockSVG';
import style from './About.module.scss';
import { useAppSelector } from 'app/hooks';

function About(): JSX.Element {
  const theme = useAppSelector(state => state.theme.value);

  return (
    <div className={`${ theme === 'dark' ? style.aboutDark : style.aboutLight } ${style.about}`}>
      <div className={style.about__resume}>
        <Resume 
          title={'About'} 
          subtitle={"Hugo, the world's fastest framework for building websites"} 
        />
        <Footer time={'Feb 28, 2019'} />
        <p className={style.about__copy}>
          Written in Go, Hugo is an open source static site generator available under the Apache Licence 2.0. Hugo supports TOML, YAML and JSON data file types, Markdown and HTML content files and uses shortcodes to add rich content. Other notable features are taxonomies, multilingual mode, image processing, custom output formats, HTML/CSS/JS minification and support for Sass SCSS workflows.
        </p>
      </div>
    </div>
  );
};

function Resume({ title, subtitle }: { title: string, subtitle: string }): JSX.Element {
  return (
    <>
      <h2 className={style.about__title}>
        <a 
          href="/"
          className={style.about__titleLink}
        >
          {title}
        </a>
      </h2>
      <h3 className={style.about__subtitle}>
        {subtitle}
      </h3>
    </>
  );
};

function Footer({ time }: { time: string }): JSX.Element {
  return (
    <footer className={style.about__footer}>
      <ClockSVG className={style.about__svg} />
      <time className={style.about__time}>
        {time}
      </time>
    </footer>
  );
};

export default About;
