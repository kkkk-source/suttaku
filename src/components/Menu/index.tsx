import { NavLink } from 'react-router-dom';
import ArchiveSVG from 'components/svg/ArchiveSVG';
import AboutSVG from 'components/svg/AboutSVG';
import HomeSVG from 'components/svg/HomeSVG';
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
  <MenuItem key={2} to={'/archives'} children={<Archives />} />,
];

function MenuItem({ to, children }: { to: string, children: JSX.Element }): JSX.Element {
  return (
    <li>
      <NavLink 
        exact 
        to={to}
        activeClassName={style.menu__active}
        onClick={() => window.scrollTo(0, 0)}
      >
        {children}
      </NavLink>
    </li>
  );
};

function Home(): JSX.Element {
  return (
    <>
      <HomeSVG />
      <span>Home</span>
    </>
  );
};

function About(): JSX.Element {
  return (
    <>
      <AboutSVG />
      <span>About</span>
    </>
  );
};

function Archives(): JSX.Element {
  return (
    <>
      <ArchiveSVG />
      <span>Archives</span>
    </>
  );
};
