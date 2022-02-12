import React from "react";

function ContactUs() {
  const clearInput = () => {
    window.onbeforeunload = () => {
      for(const form of document.getElementsByTagName('form')) {
        form.reset();
      }
    }
  }

  return (
    <div>
      <div className='container'>
        <span className='opaque' style={{padding: '2em 0.5em'}}>
          <h1 className='gradient-text'>Contact Us!</h1>
        </span>
      </div>
      <div className="container">
        <form id="form" action="https://formspree.io/f/mgedarra" method="POST" className="topBefore opaque">
          <label className="formLabel"><span className='opaque' style={{textAlign: 'center'}}>NAME</span></label>
          <input className='opaque' id="name" type="text" name="name" placeholder="your name" required="" />
          <label className="formLabel"><span className='opaque'>E-MAIL</span></label>
          <input className='opaque' id="email" type="email" name="_replyto" placeholder="your e-mail" required="" />
          <label className="formLabel"><span className='opaque'>MESSAGE</span></label>
          <textarea className='opaque' id="message" type="text" name="message" placeholder="a brief message" required=""></textarea>
          <input id="submit" type="submit" value="SUBMIT" onClick={() => clearInput()}/>
        </form>
      </div>
    </div>
  )
}

export default ContactUs;