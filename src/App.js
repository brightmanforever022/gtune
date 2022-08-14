import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import Faq from './components/faq';

import './styles/app.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/faq' element={<Faq />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
