import { Route, HashRouter } from 'react-router-dom';
import Details from 'components/Details';
import Menu from 'components/Menu';
import About from 'pages/About';
import Home from 'pages/Home';
import style from './Main.module.scss';

function Main(): JSX.Element {
  return (
    <main className={style.mainScene}>
      <HashRouter>
        <aside className={style.mainScene__aside}>
          <Details />
          <Menu />
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
  );
};

export default Main;
