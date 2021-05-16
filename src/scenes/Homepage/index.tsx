import { Dispatch, SetStateAction } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Post from 'components/Post';
import SiteFact from 'components/SiteFact';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import ThemeSwitcher from 'components/ThemeSwitcher';
import About from 'pages/About';
import Archives from 'pages/Archives';
import Posts from 'pages/Posts';
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
          <SiteFact />
          <Menu />
          <ThemeSwitcher 
            theme={theme} 
            setTheme={setTheme} 
          />
        </aside>
        <main>
          <Switch>
            <Route 
              exact 
              path='/' 
              component={Posts} 
            />
            <Route 
              path='/about' 
              component={About} 
            />
            <Route 
              path='/archives' 
              component={Archives} 
            />
            <Route
              path='/p/:title'
              component={Post}
            />
          </Switch>
          <Footer />
        </main>
      </HashRouter>
    </section>
  );
};
