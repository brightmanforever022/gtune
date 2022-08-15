import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import Faq from './components/faq';
import Settings from './components/settings/index';

import './styles/app.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <div className='main-container'>
          <Routes>
            <Route path='/settings' element={<Settings />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
