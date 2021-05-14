import RoundedContainer from 'components/RoundedContainer';
import ClockSVG from 'components/svg/ClockSVG';
import styles from './About.module.scss';

export default function About(): JSX.Element {
  return (
    <RoundedContainer>
      <div className={styles.about}>
        <h2>
          <a href="/#">About</a>
        </h2>
        <h3>
          Hugo, the world's fastest framework for building websites
        </h3>
        <div>
          <ClockSVG />
          <time>Feb 28, 2019</time>
        </div>
        <p>
          Written in Go, Hugo is an open source static site generator available 
          under the Apache Licence 2.0. Hugo supports TOML, YAML and JSON data 
          file types, Markdown and HTML content files and uses shortcodes to add 
          rich content. Other notable features are taxonomies, multilingual mode, 
          image processing, custom output formats, HTML/CSS/JS minification and 
          support for Sass SCSS workflows.
        </p>
      </div>
    </RoundedContainer>
  );
};
