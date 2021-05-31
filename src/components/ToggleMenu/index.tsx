import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './ToggleMenu.module.scss';

interface ToggleMenuProps {
  toggleMenu: boolean
  onToggleMenu: (arg0: boolean) => void
}

export default function ToggleMenu({ toggleMenu, onToggleMenu }: ToggleMenuProps) {
  const nodeRef = useRef(null);

  const handleToggleMenu = () => {
    onToggleMenu(!toggleMenu);
  }

  return (
    <CSSTransition 
      nodeRef={nodeRef}
      in={toggleMenu} 
      timeout={400}
      classNames={{
        enterActive: styles.enterActive,
        enterDone: styles.enterDone,
        exitActive: styles.leaveActive,
        exitDone: styles.leaveDone
      }}
    >
      <button 
        onClick={handleToggleMenu} 
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
