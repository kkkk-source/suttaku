import { Dispatch, SetStateAction } from 'react';
import style from './ThemeSwitcher.module.scss';

interface IProps {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

function ThemeSwitcher(themeSwitcherProps: IProps): JSX.Element {
  const onClickHandler = (): void => {
    const newTheme = themeSwitcherProps.theme === 'dark' 
      ? 'light' : 'dark';
      themeSwitcherProps.setTheme(newTheme);
  };

  return (
    <div className={style.themeSwitcher}>
      <label className={style.switch}>
        <input className={style.input}type="checkbox"/>
        <span className={style.span}onClick={() => onClickHandler() }></span>
      </label>
      <span className={style.label}>Dark Mode</span>
    </div>
  );
}

export default ThemeSwitcher;
