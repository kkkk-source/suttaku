import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import ThemePicker from 'components/ThemePicker';
import ArchiveSVG from 'components/svg/ArchiveSVG';
import AboutSVG from 'components/svg/AboutSVG';
import HomeSVG from 'components/svg/HomeSVG';
import styles from './Menu.module.scss';

interface MenuProps {
  toggleMenu: boolean
  theme: string
  onToggleTheme: (arg0: string) => void
}

export default function Menu({ theme, onToggleTheme, toggleMenu }: MenuProps): JSX.Element {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={toggleMenu}
      timeout={{ enter: 600, exit: 500 }}
      classNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        enterDone: styles.enterDone,
        exit: styles.exit,
        exitActive: styles.exitActive,
        exitDone: styles.exitDone
      }}
    >
      <ul ref={nodeRef} className={`${styles.menu}`}>
        {MENU_ITEMS}
        <li>
          <ThemePicker 
            theme={theme} 
            onToggleTheme={onToggleTheme} 
          />
        </li>
      </ul>
    </CSSTransition>
  );
};

const MENU_ITEMS: Array<JSX.Element> = [
  <MenuItem key={0} to={'/'} children={<Home />} />,
  <MenuItem key={1} to={'/about'} children={<About />} />,
  <MenuItem key={2} to={'/archives'} children={<Archives />} />,
];

function MenuItem({ to, children }: { to: string, children: JSX.Element }): JSX.Element {
  function handleClick() {
    window.scrollTo(0, 0);
  }

  return (
    <li>
      <NavLink 
        exact 
        to={to}
        activeClassName={styles.menu__active}
        onClick={handleClick}
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
