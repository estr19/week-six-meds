import React, {useState, useEffect, useRef} from "react";
import './App.css';

function Ads() {
  const colors = ['https://www.youtube.com/embed/COjNWNoOWy0', 'https://www.youtube.com/embed/7G-J3EbVqhM', 'https://www.youtube.com/embed/6Z3Ch5C_lBU'];
  const delay = 2500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

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
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div>
      <div className="container">
        <h5 className="shipping">
          <i className="fas fa-truck flip"></i>&nbsp;FREE SHIPPING ON ORDERS
          OVER $100!&nbsp;<i className="fas fa-truck"></i>
        </h5>
      </div>
      <div className="gradient-text">
        <h1>TV ADS AND COMMERCIALS</h1>
      </div>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((backgroundColor, index) => (
            <div className="slide" key={index} >
              <iframe width="100%" height='400px' src={backgroundColor} title="YouTube video player" frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
              ></iframe>
            </div>
          ))}
        </div>

        <div className="slideshowDots">
          {colors.map((_, idx) => (
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