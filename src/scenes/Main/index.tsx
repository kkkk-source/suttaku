import { Route, HashRouter } from 'react-router-dom';
import ToggleButton from 'components/ToggleButton';
import Details from 'components/Details';
import Menu from 'components/Menu';
import About from 'pages/About';
import Home from 'pages/Home';
import style from './Main.module.scss';
import { useAppSelector } from 'app/hooks';

function Main(): JSX.Element {
  const theme = useAppSelector(state => state.theme.value);
  return (
    <div className={`${style.mainContainer} ${theme === 'dark' ? style.mainDark : style.mainLight }`}>
      <main className={style.mainScene}>
        <HashRouter>
          <aside className={style.mainScene__aside}>
            <Details />
            <Menu />
            <ToggleButton />
          </aside>
          <div className={style.mainScene__main}>
            <Route 
              exact 
              path='/' 
              component={Home} 
            />
            <Route 
              path='/about' 
              component={About} 
            />
          </div>
        </HashRouter>
      </main>
    </div>
  );
};

export default Main;
