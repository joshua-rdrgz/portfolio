import React, { useContext } from 'react';
import './styles/main.scss';
import ThemeContext from './store/theme-context';
import Header from './components/layout/Header/Header';
import Socials from './components/utilities/Socials/Socials';
import Footer from './components/layout/Footer/Footer';
import Switch from './components/utilities/Switch/Switch';
import Herobox from './components/layout/Herobox/Herobox';
import Skills from './components/layout/Skills/Skills';
import About from './components/layout/About/About';
import Contact from './components/layout/Contact/Contact';

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  const headerFooterBGColor = isDarkMode
    ? 'bg-color__dark--accent-dark'
    : 'bg-color__light--accent-dark';

  return (
    <>
      <Header backgroundColor={headerFooterBGColor} />
      <Socials type='sticky' backgroundColor={headerFooterBGColor} />
      <main className={isDarkMode ? 'bg-color--black-90' : 'bg-color--black-15'}>
        <Herobox />
        <Skills />
        <About />
        <Contact />
      </main>
      <Switch />
      <Footer backgroundColor={headerFooterBGColor} />
    </>
  );
}

export default App;
