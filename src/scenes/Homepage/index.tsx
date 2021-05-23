import { Dispatch, SetStateAction } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import BlogPost from 'components/BlogPost';
import SiteFact from 'components/SiteFact';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import ThemeSwitcher from 'components/ThemeSwitcher';
import Category from 'components/Category';
import About from 'pages/About';
import Archives from 'pages/Archives';
import BlogPosts from 'pages/BlogPosts';
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
              component={BlogPosts} 
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
              component={BlogPost}
            />
            <Route
              path='/c/:name'
              component={Category}
            />
          </Switch>
          <Footer />
        </main>
      </HashRouter>
    </section>
  );
};
