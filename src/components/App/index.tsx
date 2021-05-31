import { useState } from 'react';
import Homepage from 'scenes/Homepage';
import styles from './App.module.scss';
import 'styles/theme.scss';

export default function App(): JSX.Element {
  const [theme, setToggleTheme] = useState<string>('light');

  const handleToggleTheme = (theme: string) => {
    setToggleTheme(theme);
  };

  return (
    <div className={`${styles.app} ${theme}`}>
      <Homepage 
        theme={theme} 
        onToggleTheme={handleToggleTheme} />
    </div>
  );
};
