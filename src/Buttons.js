import React from 'react';
import './App.css';

function Buttons({multiFilter, whatever, startEver, checkClicked}) {
  return(
    <div>
      <div className='btn header'>
        <button className='special' onClick={() => startEver()}>Clear All</button>
        <label className={checkClicked ? 'filtered checked' : 'filtered'} htmlFor='breathing' >Breathing<input type="checkbox" id='breathing' name="types" value="breathing" className="storesCheckBox" onClick={(e) => multiFilter(e)} /></label>
        <label className={checkClicked ? 'filtered checked' : 'filtered'} htmlFor='cancer' >Cancer<input type="checkbox" id='cancer' name="types" value="cancer" className="storesCheckBox" onClick={(e) => multiFilter(e)} /></label>
        <label className={checkClicked ? 'filtered checked' : 'filtered'} htmlFor='depression' >Depression<input type="checkbox" id='depression' name="types" value="depression" className="storesCheckBox" onClick={(e) => multiFilter(e)} /></label>
        <label className={checkClicked ? 'filtered checked' : 'filtered'} htmlFor='diabetes' >Diabetes<input type="checkbox" id='diabetes' name="types" value="diabetes" className="storesCheckBox" onClick={(e) => multiFilter(e)} /></label>
        <label className={checkClicked ? 'filtered checked' : 'filtered'} htmlFor='hiv' >HIV/AIDS<input type="checkbox" id='hiv' name="types" value="hiv" className="storesCheckBox" onClick={(e) => multiFilter(e)} /></label>
        <label className={checkClicked ? 'filtered checked' : 'filtered'} htmlFor='migraine' >Migraine<input type="checkbox" id='migraine' name="types" value="migraine" className="storesCheckBox" onClick={(e) => multiFilter(e)} /></label>
        <label className={checkClicked ? 'filtered checked' : 'filtered'} htmlFor='ms-uc' >MS/UC<input type="checkbox" id='ms-uc' name="types" value="ms-uc" className="storesCheckBox" onClick={(e) => multiFilter(e)} /></label>
        <label className={checkClicked ? 'filtered checked' : 'filtered'} htmlFor='other' >Other<input type="checkbox" id='other' name="types" value="other" className="storesCheckBox" onClick={(e) => multiFilter(e)} /></label>
        <label className={checkClicked ? 'filtered checked' : 'filtered'} htmlFor='psoriasis' >Psoriasis<input type="checkbox" id='psoriasis' name="types" value="psoriasis" className="storesCheckBox" onClick={(e) => multiFilter(e)} /></label>
        <label className={checkClicked ? 'filtered checked' : 'filtered'} htmlFor='sleep' >Sleep<input type="checkbox" id='sleep' name="types" value="sleep" className="storesCheckBox" onClick={(e) => multiFilter(e)} /></label>
      </div>
      <div id='search' className='container'>
        <h3><span className='opaque'>We have found <span style={{color: '#d31334'}}>{whatever.length}</span> medications that match your selection:</span></h3>
      </div>
    </div>
  )
}

export default Buttons;