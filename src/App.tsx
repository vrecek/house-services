import React from 'react';
import './css/index.css';
import MAIN_PAGE from './components/main-page/MAIN_PAGE';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>

      <Nav />

      <MAIN_PAGE />

      <Footer />

    </>
  );
}

export default App;
