import style from './Details.module.scss';

function Details(): JSX.Element {
  return (
    <div className={style.details}>
      <figure className={style.details__figure}>
        <img 
          className={style.details__avatar} 
          src="https://avatars.githubusercontent.com/u/68973000?v=4" 
          alt="" 
        />
        <span className={style.details__emoji}>
          🍥
        </span>
      </figure>
      <h1 className={style.details__title}>
        <a 
          href="/"
          className={style.details__link}
        >
          Example Site
        </a>
      </h1>
      <p className={style.details__copy}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

export default Details;
