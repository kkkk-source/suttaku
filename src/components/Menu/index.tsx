import { CSSTransition } from 'react-transition-group';
import { Dispatch, SetStateAction, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import ThemePicker from 'components/ThemePicker';
import ArchiveSVG from 'components/svg/ArchiveSVG';
import AboutSVG from 'components/svg/AboutSVG';
import HomeSVG from 'components/svg/HomeSVG';
import styles from './Menu.module.scss';

interface MenuProps {
  expMenu: boolean
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

export default function Menu({ theme, setTheme, expMenu }: MenuProps): JSX.Element {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={expMenu}
      timeout={200}
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
          <ThemePicker theme={theme} setTheme={setTheme} />
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
  return (
    <li>
      <NavLink 
        exact 
        to={to}
        activeClassName={styles.menu__active}
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
