import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Ads from './Ads';
import ContactUs from './ContactUs';
import Medications from './Medications';
import './App.css';

function App() {
  

  return(
    <div>
      <Router>
        <nav>
          <Link to='/ads' className='link' >TV Ads</Link>
          <Link to='/' className='link' >Home</Link>
          <Link to='/contact' className='link' >Contact Us</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Medications />}></Route>
          <Route path='/ads' element={<Ads />}></Route>
          <Route path='/home' element={<Medications />}></Route>
          <Route path='/contact' element={<ContactUs />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;