import React from 'react';
import Layout from './components/layout/Layout';
import { Routes, Route } from 'react-router-dom';
import './css/index.css';
import MAIN_PAGE from './components/main-page/MAIN_PAGE';

function App() {
  return (
    <Layout>

      <Routes>

        <Route path='/' element={ <MAIN_PAGE /> } />
        
      </Routes>

    </Layout>
  );
}

export default App;
