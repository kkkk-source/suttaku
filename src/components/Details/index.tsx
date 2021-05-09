import style from './Details.module.scss';
import { useAppSelector } from 'app/hooks';

function Details(): JSX.Element {
  const theme = useAppSelector(state => state.theme.value);

  return (
    <div className={`${theme === 'dark' ? style.detailsDark : style.detailsLight} ${style.details}`}>
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
