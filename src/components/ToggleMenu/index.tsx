import { Dispatch, SetStateAction } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './ToggleMenu.module.scss';

interface ToggleMenuProps {
  expMenu: boolean
  setExpMenu: Dispatch<SetStateAction<boolean>>
}

export default function ToggleMenu({ expMenu, setExpMenu }: ToggleMenuProps) {
  return (
    <button 
      onClick={() => setExpMenu(!expMenu)} 
      className={styles.toggleMenu}
    >
      <CSSTransition 
        in={expMenu} 
        timeout={400}
        classNames={{
          enterActive: styles.enterActive,
          enterDone: styles.enterDone,

          exitActive: styles.leaveActive,
          exitDone: styles.leaveDone
        }}
      >
        <span className={styles.hamburger}>
          <span className={styles.hamburgerInner}></span>
        </span>
      </CSSTransition>
    </button>
  );
}
