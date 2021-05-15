import styles from './SiteFact.module.scss';

export default function SiteFact(): JSX.Element {
  return (
    <div className={styles.siteFact}>
      <figure>
        <img 
          src="https://avatars.githubusercontent.com/u/68973000?v=4" 
          alt="Avatar" 
        />
        <span>🍥</span>
      </figure>
      <h1>
        <a href="/#">
          Example Site
        </a>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};
