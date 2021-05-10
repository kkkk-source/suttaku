import ClockSVG from 'components/svg/ClockSVG';
import style from './About.module.scss';

function About(): JSX.Element {
  return (
    <div className={style.about}>
      <div className={style.about__resume}>
        <Resume 
          title={'About'} 
          subtitle={"Hugo, the world's fastest framework for building websites"} 
        />
        <Footer time={'Feb 28, 2019'} />
        <p className={style.about__copy}>
          Written in Go, Hugo is an open source static site generator available under the Apache Licence 2.0. Hugo supports TOML, YAML and JSON data file types, Markdown and HTML content files and uses shortcodes to add rich content. Other notable features are taxonomies, multilingual mode, image processing, custom output formats, HTML/CSS/JS minification and support for Sass SCSS workflows.
        </p>
        <p className={style.about__copy}>
          Hugo makes use of a variety of open source projects including:
        </p>
        <ul className={style.about__list}>
          <li>https://github.com/yuin/goldmark</li>
          <li>https://github.com/alecthomas/chroma</li>
          <li>https://github.com/muesli/smartcrop</li>
          <li>https://github.com/spf13/cobra</li>
          <li>https://github.com/spf13/viper</li>
        </ul>
        <p className={style.about__copy}>
          Hugo is ideal for blogs, corporate websites, creative portfolios, online magazines, single page applications or even a website with thousands of pages.
        </p>
        <p className={style.about__copy}>
          Hugo is for people who want to hand code their own website without worrying about setting up complicated runtimes, dependencies and databases.
        </p>
        <p className={style.about__copy}>
          Websites built with Hugo are extremelly fast, secure and can be deployed anywhere including, AWS, GitHub Pages, Heroku, Netlify and any other hosting provider.
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
