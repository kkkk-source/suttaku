import { useState } from 'react';
import style from './ThemePicker.module.scss';

type ThemePickerProps = {
  theme: string
  onToggleTheme: (arg0: string) => void
};

export default function ThemePicker({ theme, onToggleTheme }: ThemePickerProps) {
  const [active, setActive] = useState<boolean>(theme === 'dark');

  const handleClick = () => {
    // Toggle between dark and light themes
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    onToggleTheme(newTheme);
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
