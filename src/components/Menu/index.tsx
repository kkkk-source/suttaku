import { NavLink } from 'react-router-dom';
import HomeSVG from 'components/svg/HomeSVG';
import AboutSVG from 'components/svg/AboutSVG';
import style from './Menu.module.scss';

export default function Menu(): JSX.Element {
  return (
    <ul className={style.menu}>
      {MENU_ITEMS}
    </ul>
  );
};

const MENU_ITEMS: Array<JSX.Element> = [
  <MenuItem key={0} to={'/'} children={<Home />} />,
  <MenuItem key={1} to={'/about'} children={<About />} />,
];

function MenuItem({ to, children }: { to: string, children: JSX.Element }): JSX.Element {
  return (
    <li>
      <NavLink 
        exact 
        to={to}
        activeClassName={style.menu__active}
      >
        {children}
      </NavLink>
    </li>
  );
};

function Home(): JSX.Element {
  return (
    <>
      <HomeSVG className={''} />
      <span>Home</span>
    </>
  );
};

function About(): JSX.Element {
  return (
    <>
      <AboutSVG className={''} />
      <span>About</span>
    </>
  );
};
