import { Component } from 'react';
import style from './ThemePicker.module.scss';

type Props = {
  theme:    string
  onToggleTheme: (arg0: string) => void
};

type State = { 
  active: boolean 
};

export default class ThemePicker extends Component<Props, State> {
  state = { active: (this.props.theme === 'dark') };

  onClickHandler = () => {
    // Toggle between dark and light themes
    const newTheme = this.props.theme === 'dark' ? 'light' : 'dark';
    this.props.onToggleTheme(newTheme);

    if (newTheme === 'dark') {
      this.setState(() => ({ active: true }));
    } else {
      this.setState(() => ({ active: false }));
    }
  };

  render() {
    return (
      <div className={style.themePicker}>
        <label className={style.switch}>
          <input 
            type="checkbox"
            className={style.input}
          />
          <span 
            onClick={this.onClickHandler}
            className={style.span}
          ></span>
        </label>
        <span 
          className={`${style.label} 
            ${this.state.active ? style.labelActive : '' }`}
        >
          Dark Mode
        </span>
      </div>
    );
  }
}
