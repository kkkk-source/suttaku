import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import AboutSVG from 'components/svg/AboutSVG';
import HomeSVG from 'components/svg/HomeSVG';
import style from './Menu.module.scss';

const Menu: FunctionComponent = () => {
  return (
    <ol className={style.menu}>
      <li className={`${style.menu__item} ${style.menu__itemSelected}`}>
        <NavLink exact to='/'>
          <Home />
        </NavLink>
      </li>
      <li className={style.menu__item}>
        <NavLink to='/about'>
          <About />
        </NavLink>
      </li>
    </ol>
  );
};

const Home: FunctionComponent = () => {
  return (
    <div className={style.menu__link}>
      <HomeSVG className={style.menu__icon} />
      <span className={style.menu__label}>Home</span>
    </div>
  );
};

const About: FunctionComponent = () => {
  return (
    <div className={style.menu__link}>
      <AboutSVG className={style.menu__icon} />
      <span className={style.menu__label}>About</span>
    </div>
  );
};

export default Menu;
