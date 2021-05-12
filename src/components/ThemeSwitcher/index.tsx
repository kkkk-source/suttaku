import { Dispatch, SetStateAction } from 'react';
import style from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  theme:    string
  setTheme: Dispatch<SetStateAction<string>>
}

function ThemeSwitcher(themeSwitcherProps: ThemeSwitcherProps): JSX.Element {
  const onClickHandler = (): void => {
    // Toggle between dark and light themes
    const newTheme = themeSwitcherProps.theme === 'dark' ? 'light' : 'dark';
    themeSwitcherProps.setTheme(newTheme);
  };

  return (
    <div className={style.themeSwitcher}>
      <label className={style.switch}>
        <input 
          type="checkbox"
          className={style.input}
        />
        <span 
          onClick={() => onClickHandler()}
          className={style.span}
        ></span>
      </label>
      <span className={style.label}>
        Dark Mode
      </span>
    </div>
  );
}

export default ThemeSwitcher;
