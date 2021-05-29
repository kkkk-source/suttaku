import { Dispatch, SetStateAction, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './ToggleMenu.module.scss';

interface ToggleMenuProps {
  expMenu: boolean
  setExpMenu: Dispatch<SetStateAction<boolean>>
}

export default function ToggleMenu({ expMenu, setExpMenu }: ToggleMenuProps) {
  const nodeRef = useRef(null);
  return (
    <CSSTransition 
      nodeRef={nodeRef}
      in={expMenu} 
      timeout={400}
      classNames={{
        enterActive: styles.enterActive,
        enterDone: styles.enterDone,
        exitActive: styles.leaveActive,
        exitDone: styles.leaveDone
      }}
    >
      <button 
        onClick={() => setExpMenu(!expMenu)} 
        className={styles.toggleMenu}
        ref={nodeRef}
      >
        <span className={styles.outer}>
          <span className={styles.inner}></span>
        </span>
      </button>
    </CSSTransition>
  );
}
