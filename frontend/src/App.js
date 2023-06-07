import './App.css';
import React, {Fragment, useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//COMPONENTS
import SplashPage from './components/SplashPage';
import Home from './components/Home';

import CurrentUserContext from './context/CurrentUser';

function App() {


  return (
    <CurrentUserContext className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<SplashPage />}/>
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
      
    </CurrentUserContext>
  );
}

export default App;
