import React, { useContext } from 'react';
import './styles/main.scss';
import ThemeContext from './store/theme-context';
import Header from './components/layout/Header/Header';
import Socials from './components/utilities/Socials/Socials';
import Footer from './components/layout/Footer/Footer';
import Switch from './components/utilities/Switch/Switch';
import Herobox from './components/layout/Herobox/Herobox';

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  const headerFooterBGColor = isDarkMode
    ? 'bg-color__dark--accent-dark'
    : 'bg-color__light--accent-dark';

  return (
    <>
      <Header backgroundColor={headerFooterBGColor} />
      <Socials type='sticky' backgroundColor={headerFooterBGColor} />
      <main>
        <Herobox />
      </main>
      <Switch />
      <Footer backgroundColor={headerFooterBGColor} />
    </>
  );
}

export default App;
