import { useState } from 'react';
import Homepage from 'scenes/Homepage';
import styles from './App.module.scss';
import 'styles/theme.scss';

export default function App(): JSX.Element {
  const [theme, setTheme] = useState<string>('light');
  const [expandedMenu, setExpandedMenu] = useState<boolean>(false);

  return (
    <div className={`${styles.app} ${theme}`}>
      <Homepage 
        theme={theme} 
        setTheme={setTheme} 
        expandedMenu={expandedMenu}
        setExpandedMenu={setExpandedMenu}
      />
    </div>
  );
};
