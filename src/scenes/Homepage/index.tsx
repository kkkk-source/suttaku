import { Dispatch, SetStateAction } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import SiteFact from 'components/SiteFact';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import ToggleMenu from 'components/ToggleMenu';
import About from 'pages/About';
import Archives from 'pages/Archives';
import BlogPosts from 'pages/BlogPosts';
import BlogPost from 'pages/BlogPost';
import Category from 'pages/Category';
import styles from './Homepage.module.scss';

interface HomepageProps {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
  expandedMenu: boolean
  setExpandedMenu: Dispatch<SetStateAction<boolean>>
}

export default function Homepage({ theme, setTheme, expandedMenu, setExpandedMenu }: HomepageProps): JSX.Element {
  return (
    <section className={styles.homepage}>
      <HashRouter>
        <aside>
          <ToggleMenu 
            expandedMenu={expandedMenu}
            setExpandedMenu={setExpandedMenu}
          />
          <SiteFact />
          <Menu 
            theme={theme} 
            setTheme={setTheme} 
            expandedMenu={expandedMenu}
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
