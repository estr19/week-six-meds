import React, {useState, useEffect, useRef} from "react";
import {links} from "./links";
import {quotes} from './quotes';
import './App.css';

function Ads() {
  const videos = links;
  const delay = 2500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const [quote, setQuote] = useState();
  const [show, setShow] = useState(false);

  const showQuote = () => {
    setShow(true);
    setQuote((file => {
      file = quotes[Math.floor(Math.random() * quotes.length)];
      return file;
    }))
  }

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === videos.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  });

  return (
    <div>
      <div className='shipping' style={{cursor: 'pointer'}} onClick={() => showQuote()}>
        <i className="fas fa-quote-left"></i>{show ? `${quote.text} ${quote.author} ` : 'In skating over thin ice our safety is in our speed. Ralph Waldo Emerson'}<i className="fas fa-quote-right"></i>
      </div>
      <div className="gradient-text">
        <h1>TV Ads and Commercials</h1>
      </div>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {videos.map((videoLink, index) => (
            <div className="slide" key={index} >
              <iframe width="100%" height='400px' src={videoLink} title="YouTube video player" frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
              ></iframe>
            </div>
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