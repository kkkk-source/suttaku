import { Dispatch, SetStateAction } from 'react';
import styles from './ToggleMenu.module.scss';

interface ToggleMenuProps {
  expandedMenu: boolean
  setExpandedMenu: Dispatch<SetStateAction<boolean>>
}

export default function ToggleMenu({ expandedMenu, setExpandedMenu }: ToggleMenuProps) {
  const onClickHandler = () => {
    setExpandedMenu(!expandedMenu);
  }

  return (
    <button 
      onClick={() => onClickHandler()} 
      className={styles.toggleMenu}
    >
      <span className={styles.hamburger}>
        <span className={styles.hamburgerInner}>
        </span>
      </span>
    </button>
  );
}
