import React from "react";
import {useState} from "react";
import {quotes} from './quotes';

function ContactUs() {
  const [quote, setQuote] = useState();
  const [show, setShow] = useState(false);

  const showQuote = () => {
    setShow(true);
    setQuote((file => {
      file = quotes[Math.floor(Math.random() * quotes.length)];
      return file;
    }))
  }

  return (
    <div>
      <div className='shipping' style={{cursor: 'pointer'}} onClick={() => showQuote()}>
          <i className="fas fa-quote-left"></i>{show ? `${quote.text} ${quote.author} ` : 'In skating over thin ice our safety is in our speed. Ralph Waldo Emerson'}<i className="fas fa-quote-right"></i>
      </div>
      <div className='gradient-text'>
        <h1>Contact Us</h1>
      </div>
      <div className="container">
        <form id="form" action="https://formspree.io/f/mgedarra" method="POST" className="topBefore">
          <input id="name" type="text" name="name" placeholder="NAME" required="" />
          <input id="email" type="email" name="_replyto" placeholder="E-MAIL" required="" />
          <textarea id="message" type="text" name="message" placeholder="MESSAGE" required=""></textarea>
          <input id="submit" type="submit" value="SUBMIT" />
        </form>
      </div>
    </div>
  )
}

export default ContactUs;