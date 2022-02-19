import React, {useState} from "react";
import {videos} from "./videos";
import './App.css';

function Ads() {
  const [file, setFile] = useState(0);
  const {name, videoLink} = videos[file];

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
      <div className='container'>
        <span className='opaque' style={{padding: '2em'}}>
          <h1 className='gradient-text'>TV Ads and Commercials</h1>
        </span>
      </div>
      <div className='slideshow'>
        <div className='slideshowSlider'>
          <div className='container'>
          <iframe className='slide' width='100%' height='400px' src={videoLink} title="YouTube video player" frameBorder='0' controlls='0'
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