import React, {useState} from "react";
import {videos} from "./videos";
import axios from 'axios';
import './App.css';

function Ads() {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(0);
  const {name, videoLink} = videos[file];

  const showQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(res => {
      setQuote(res.data.content);
      setAuthor(res.data.author);
      console.log(quote);
    })
    setShow(true);
  }
  const prevFile = () => {
    setFile((file => {
      file--;
      if (file < 0) {
        file = videos.length - 1;
      }
      return file;
    }))
  }

  const nextFile = () => {
    setFile((file => {
      file++;
      if (file > videos.length - 1) {
        file = 0;
      }
      return file;
    }))
  }

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
      <div className='slideshow'>
        <div className='slideshowSlider'>
          <div className='container'>
          <iframe className="slide" width="100%" height='400px' src={videoLink} title="YouTube video player" frameBorder="0" controlls='0'
            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope;"
            ></iframe>
          </div>
          <div className='container' style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(250, 250, 250, 0.75)', padding: '1em', margin: '1em'}}>
            <button onClick={() => prevFile()}>Prev</button>
            <p style={{fontSize: '3em', fontWeight: 'bold', margin: '.5em'}}>{name}</p>
            <button onClick={() => nextFile()}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ads;