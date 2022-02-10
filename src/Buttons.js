import React from 'react';
import './App.css';

function Buttons({multiFilter, clkLbl, whatever, startEver}) {
  return(
    <div>
      <div className='btn header'>
        <button className='special' onClick={() => startEver()}>Clear All</button>
        <label onClick={(e) => clkLbl(e)} className='filtered' htmlFor='breathing' ><input type="checkbox" id='breathing' name="types" value="breathing" className="storesCheckBox" onClick={() => multiFilter()} />Breathing</label>
        <label onClick={(e) => clkLbl(e)} className='filtered' htmlFor='cancer' ><input type="checkbox" id='cancer' name="types" value="cancer" className="storesCheckBox" onClick={() => multiFilter()} />Cancer</label>
        <label onClick={(e) => clkLbl(e)} className='filtered' htmlFor='depression' ><input type="checkbox" id='depression' name="types" value="depression" className="storesCheckBox" onClick={() => multiFilter()} />Depression</label>
        <label onClick={(e) => clkLbl(e)} className='filtered' htmlFor='diabetes' ><input type="checkbox" id='diabetes' name="types" value="diabetes" className="storesCheckBox" onClick={() => multiFilter()} />Diabetes</label>
        <label onClick={(e) => clkLbl(e)} className='filtered' htmlFor='hiv' ><input type="checkbox" id='hiv' name="types" value="hiv" className="storesCheckBox" onClick={() => multiFilter()} />HIV/AIDS</label>
        <label onClick={(e) => clkLbl(e)} className='filtered' htmlFor='migraine' ><input type="checkbox" id='migraine' name="types" value="migraine" className="storesCheckBox" onClick={() => multiFilter()} />Migraine</label>
        <label onClick={(e) => clkLbl(e)} className='filtered' htmlFor='ms-uc' ><input type="checkbox" id='ms-uc' name="types" value="ms-uc" className="storesCheckBox" onClick={() => multiFilter()} />MS/UC</label>
        <label onClick={(e) => clkLbl(e)} className='filtered' htmlFor='other' ><input type="checkbox" id='other' name="types" value="other" className="storesCheckBox" onClick={() => multiFilter()} />Other</label>
        <label onClick={(e) => clkLbl(e)} className='filtered' htmlFor='psoriasis' ><input type="checkbox" id='psoriasis' name="types" value="psoriasis" className="storesCheckBox" onClick={() => multiFilter()} />Psoriasis</label>
        <label onClick={(e) => clkLbl(e)} className='filtered' htmlFor='sleep' ><input type="checkbox" id='sleep' name="types" value="sleep" className="storesCheckBox" onClick={() => multiFilter()} />Sleep</label>
      </div>
      <div id='search' className='container'>
        <h3><span className='opaque'>We have found <span style={{color: '#d31334'}}>{whatever.length}</span> medications that match your selection:</span></h3>
      </div>
    </div>
  )
}

export default Buttons;