import './App.css';
import React, {Fragment, useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//COMPONENTS
import SplashPage from './components/SplashPage';
import Home from './components/Home';

import { DataContext } from './context/DataContext';

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SplashPage />}/>
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
