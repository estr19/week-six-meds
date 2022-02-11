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
        <nav className='top'>
          <Link to='/' className='link' >Home</Link>
          <Link to='/ads' className='link' >As Seen on TV</Link>
          <Link to='/contact' className='link' >Contact Us</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Medications />}></Route>
          <Route path='/ads' element={<Ads />}></Route>
          <Route path='/contact' element={<ContactUs />}></Route>
          <Route path='/home' element={<Medications />}></Route>
        </Routes>
        <nav className='bottom'>
          <p className='disclaimer'>DISCLAIMER: THIS WEBSITE DOES NOT PROVIDE MEDICAL ADVICE<br></br>
            The information, including but not limited to, text, graphics, images and other material contained on this website are for informational purposes only. No material on this site is intended to be a substitute for professional medical advice, diagnosis or treatment. Always seek the advice of your physician or other qualified health care provider with any questions you may have regarding a medical condition or treatment and before undertaking a new health care regimen, and never disregard professional medical advice or delay in seeking it because of something you have read on this website.</p>
        </nav>
      </Router>
    </div>
  )
}

export default App;