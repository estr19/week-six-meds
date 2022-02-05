import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Ads from './Ads';
// import Cart from './Cart';
import ContactUs from './ContactUs';
import Medications from './Medications';
import './App.css';


function App() {
  return(
    <div>
      <Router>
        <nav>
          <Link to='/' className='link' >Home</Link>
          <Link to='/ads' className='link' >As Seen on TV</Link>
          <Link to='/contact' className='link' >Contact Us</Link>
          {/* <Link to='/cart' className='link' >Cart</Link> */}
        </nav>
        <Routes>
          <Route path='/' element={<Medications />}></Route>
          <Route path='/ads' element={<Ads />}></Route>
          {/* <Route path='/cart' element={<Cart />}></Route> */}
          <Route path='/contact' element={<ContactUs />}></Route>
          <Route path='/home' element={<Medications />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;