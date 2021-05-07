import { FunctionComponent } from 'react';
import style from './Details.module.scss';

const Details: FunctionComponent = () => {
  return (
    <div className={style.details}>
      <figure className={style.details__figure}>
        <img className={style.details__avatar} src="https://d33wubrfki0l68.cloudfront.net/71ea12e296f1026c4195d92022f148f03439188b/9960c/img/avatar_huda2458f72ce188392d75c5d51cd8e24e_373_300x0_resize_box_2.png" alt="" />
        <span className={style.details__emoji}>🍥</span>
      </figure>
      <h1 className={style.details__title}>
        <a className={style.details__link} href="/">
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
