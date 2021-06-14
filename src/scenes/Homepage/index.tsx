import { useState } from 'react';
import { 
  HashRouter, 
  Switch,
  Route, 
  Redirect
} from 'react-router-dom';
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

export default function Homepage(): JSX.Element {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleToggleMenu = (toggleMenu: boolean) => {
    setToggleMenu(toggleMenu);
  };

  return (
    <section className={styles.homepage}>
      <HashRouter>
        <aside>
          <ToggleMenu 
            toggleMenu={toggleMenu}
            onToggleMenu={handleToggleMenu} />
          <SiteFact />
          <Menu 
            toggleMenu={toggleMenu} />
        </aside>
        <main>
          <Switch>
            <Route 
              exact
              path='/about' 
              component={About} />
            <Route 
              exact
              path='/archives' 
              component={Archives} />
            <Route
              exact
              path='/p/:title'
              component={BlogPost} />
            <Route
              exact
              path='/c/:name'
              component={Category} />
            <Route 
              exact 
              path='/' 
              component={BlogPosts} />
            <Redirect to='/' />
          </Switch>
          <Footer />
        </main>
      </HashRouter>
    </section>
  );
};
