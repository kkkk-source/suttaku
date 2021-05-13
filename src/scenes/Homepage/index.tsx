import { Dispatch, SetStateAction } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Details from 'components/Details';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import ThemeSwitcher from 'components/ThemeSwitcher';
import About from 'pages/About';
import Home from 'pages/Home';
import styles from './Homepage.module.scss';

interface HomepageProps {
  theme:    string
  setTheme: Dispatch<SetStateAction<string>>
}

export default function Homepage({ theme, setTheme }: HomepageProps): JSX.Element {
  return (
    <section className={styles.homepage}>
      <HashRouter>
        <aside>
          <Details />
          <Menu />
          <ThemeSwitcher 
            theme={theme} 
            setTheme={setTheme} 
          />
        </aside>
        <main>
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
        </main>
      </HashRouter>
    </section>
  );
};
