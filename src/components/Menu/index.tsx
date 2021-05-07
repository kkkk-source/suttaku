import { FunctionComponent } from 'react';
import {
  NavLink,
  HashRouter,
} from 'react-router-dom';
import AboutSVG from 'components/svg/AboutSVG';
import HomeSVG from 'components/svg/HomeSVG';
import style from './Menu.module.scss';

const Menu: FunctionComponent = () => {
  return (
    <HashRouter>
      <ol className={style.menu}>
        <li className={`${style.menu__item} ${style.menu__itemSelected}`}>
          <NavLink to='/'>
            <Home />
          </NavLink>
        </li>
        <li className={style.menu__item}>
          <NavLink to='/about'>
            <About />
          </NavLink>
        </li>
      </ol>
    </HashRouter>
  );
};

const Home: FunctionComponent = () => {
  return (
    <a className={style.menu__link} href="/">
      <HomeSVG className={style.menu__icon} />
      <span className={style.menu__label}>Home</span>
    </a>
  );
};

const About: FunctionComponent = () => {
  return (
    <a className={style.menu__link} href="/about">
      <AboutSVG className={style.menu__icon} />
      <span className={style.menu__label}>About</span>
    </a>
  );
};

export default Menu;
