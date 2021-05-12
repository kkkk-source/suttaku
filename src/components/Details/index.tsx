import styles from './Details.module.scss';

export default function Details(): JSX.Element {
  return (
    <div className={styles.details}>
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
