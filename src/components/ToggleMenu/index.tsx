import { Dispatch, SetStateAction } from 'react';
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
      <span className={styles.hamburger}>
        <span className={styles.hamburgerInner}>
        </span>
      </span>
    </button>
  );
}
