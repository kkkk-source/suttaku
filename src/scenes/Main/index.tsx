import { useState } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Details from 'components/Details';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import ThemeSwitcher from 'components/ThemeSwitcher';
import About from 'pages/About';
import Home from 'pages/Home';
import style from './Main.module.scss';

function Main(): JSX.Element {
  const [theme, setTheme] = useState<string>('light');

  return (
    <div className={theme}>
      <div className={style.mainContent}>
        <main className={style.mainScene}>
          <HashRouter>
            <aside className={style.mainScene__aside}>
              <Details />
              <Menu />
              <ThemeSwitcher theme={theme} setTheme={setTheme} />
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
              <Footer />
            </div>
          </HashRouter>
        </main>
      </div>
    </div>
  );
};

export default Main;
