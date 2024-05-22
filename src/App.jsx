import React from 'react';
import reactLogo from './assets/react.svg'
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {

  return (
    <div className="App">
      <Router>
       
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
