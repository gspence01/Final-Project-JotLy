import './App.css';
import React, {Fragment, useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//COMPONENTS
import SplashPage from './components/SplashPage';
import Home from './components/Home';

function App() {

  const [data, setData] = useState([])

  useEffect (() => {
    let api_URL = 'http://localhost:3001/'

    fetch(api_URL)
    .then((response) => {
      if(!response.ok){
        throw new Error("uh oh")
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
