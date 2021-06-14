import { useState } from 'react';
import style from './ThemePicker.module.scss';

export default function ThemePicker() {
  const [theme, setToggleTheme] = useState<string>('light');
  const [active, setActive] = useState<boolean>(theme === 'dark');

  const handleClick = () => {
    // Toggle between dark and light themes
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.className = newTheme;

    setToggleTheme(newTheme);
    setActive(newTheme === 'dark');
  };

  return (
    <div className={style.themePicker}>
      <label className={style.switch}>
        <input 
          type="checkbox"
          className={style.input}
        />
        <span 
          onClick={handleClick}
          className={style.span}
        ></span>
      </label>
      <span 
        className={`${style.label} 
          ${active ? style.labelActive : '' }`}
      >
        Dark Mode
      </span>
    </div>
  );
}
