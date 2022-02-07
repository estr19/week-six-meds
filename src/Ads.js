import React, {useState} from "react";
// import {useEffect, useRef} from 'react';
import {links} from "./links";
import axios from 'axios';
import './App.css';

function Ads() {
  const videos = links;
  // const delay = 2500;
  const [index, setIndex] = useState(0);
  // const timeoutRef = useRef(null);
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

  // function resetTimeout() {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  // }

  // useEffect(() => {
  //   resetTimeout();
  //   timeoutRef.current = setTimeout(
  //     () =>
  //       setIndex((prevIndex) =>
  //         prevIndex === videos.length - 1 ? 0 : prevIndex + 1
  //       ),
  //     delay
  //   );

  //   return () => {
  //     resetTimeout();
  //   };
  // });

  return (
    <div>
      <div className='shipping' style={{cursor: 'pointer'}} onClick={() => showQuote()}>
        <h3><i className="fas fa-quote-left"></i>{show ? `${quote} ${author}` : 'Click here to get inspirational quotes!'}<i className="fas fa-quote-right"></i></h3>
      </div>
      <div className='container'><span className='opaque'>
        <div className='gradient-text'>
          <h1>TV Ads and Commercials</h1>
        </div></span>
      </div>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {videos.map((videoLink, index) => (
            <iframe className="slide" key={index} width="100%" height='400px' src={videoLink} title="YouTube video player" frameBorder="0" controlls='0'
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
            ></iframe>
          ))}
        </div>

        <div className="slideshowDots">
          {videos.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ads;