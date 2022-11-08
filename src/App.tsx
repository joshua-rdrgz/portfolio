import React from 'react';
import './styles/main.scss';
import Header from './components/layout/Header/Header';
import Socials from './components/utilities/Socials/Socials';

function App() {
  return (
    <>
      <Header backgroundColor='bg-color__light--accent-dark' />
      <Socials type='sticky' backgroundColor='bg-color__light--accent-dark' />
    </>
  );
}

export default App;
