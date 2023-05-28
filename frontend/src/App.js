import './App.css';
import React, {Fragment, useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//COMPONENTS
import SplashPage from './components/SplashPage';
import Home from './components/Home';

function App() {

  const [data, setData] = useState([])

  useEffect (() => {

    fetch('http://localhost:8801/')
    .then((response) => {
      if(!response.ok){
        throw new Error("ERROR")
      }
      return response.json()
    })
    .then((resData) => {
      setData(resData.hello)
    })
    .catch((error) => console.log("error", error))
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <Fragment>
              <SplashPage />
              <h1>{data}</h1>
            </Fragment>} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
