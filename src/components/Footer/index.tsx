import styles from './Footer.module.scss';

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div>
        © 2020 - 2021 Example Site
      </div>
      <p>
        Built with{' '}
        <a 
          href="https://reactjs.org" 
          target="_blank" 
          rel="noreferrer"
        >
          React
        </a>
        <br/>
        Original theme{' '}
        <a 
          href="https://github.com/CaiJimmy/hugo-theme-stack" 
          target="_blank" 
          rel="noreferrer"
        >
          Stack
        </a>
        {' '}designed by{' '}
        {/* The real author of the awesome Stack theme, Jimmy Cai. */}
        <a 
          href="https://jimmycai.com"
          target="_blank"
          rel="noreferrer"
        >
          Jimmy
        </a>
      </p>
    </footer>
  );
};
