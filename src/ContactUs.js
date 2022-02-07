import React from "react";
import {useState} from "react";
import axios from 'axios';

function ContactUs() {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [show, setShow] = useState(false);

  const showQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(res => {
      setQuote(res.data.content);
      setAuthor(res.data.author);
      console.log(quote);
    })
    setShow(true);
  }

  return (
    <div>
      <div className='shipping' style={{cursor: 'pointer'}} onClick={() => showQuote()}>
        <h3><i className="fas fa-quote-left"></i>{show ? `${quote} ${author}` : 'Click here to get inspirational quotes!'}<i className="fas fa-quote-right"></i></h3>
      </div>
      <div className='container'><span className='opaque'>
        <div className='gradient-text'>
          <h1>Contact Us</h1>
        </div></span>
      </div>
      <div className="container">
        <form id="form" action="https://formspree.io/f/mgedarra" method="POST" className="topBefore opaque">
          <label><span className='opaque' style={{textAlign: 'center'}}>NAME</span></label>
          <input className='opaque' id="name" type="text" name="name" placeholder="your Name" required="" />
          <label><span className='opaque'>E-MAIL</span></label>
          <input className='opaque' id="email" type="email" name="_replyto" placeholder="your e-mail" required="" />
          <label><span className='opaque'>MESSAGE</span></label>
          <textarea className='opaque' id="message" type="text" name="message" placeholder="a brief message" required=""></textarea>
          <input id="submit" type="submit" value="SUBMIT" />
        </form>
      </div>
    </div>
  )
}

export default ContactUs;