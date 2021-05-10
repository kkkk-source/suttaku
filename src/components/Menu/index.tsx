import { NavLink } from 'react-router-dom';
import AboutSVG from 'components/svg/AboutSVG';
import HomeSVG from 'components/svg/HomeSVG';
import style from './Menu.module.scss';

function Menu(): JSX.Element {
  return (
    <ol className={style.menu}>
      <li className={style.menu__item}>
        <NavLink 
          className={style.menu__link} 
          activeClassName={style.menu__active} 
          exact to='/'
        >
          <Home />
        </NavLink>
      </li>
      <li className={style.menu__item}>
        <NavLink 
          className={style.menu__link} 
          activeClassName={style.menu__active} 
          to='/about'
        >
          <About />
        </NavLink>
      </li>
    </ol>
  );
};

function Home(): JSX.Element {
  return (
    <>
      <HomeSVG className={style.menu__icon} />
      <span className={style.menu__label}>
        Home
      </span>
    </>
  );
};

function About(): JSX.Element {
  return (
    <>
      <AboutSVG className={style.menu__icon} />
      <span className={style.menu__label}>
        About
      </span>
    </>
  );
};

export default Menu;
