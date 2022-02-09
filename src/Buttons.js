import React from 'react';
import './App.css';

function Buttons({multiFilter, setWhatever, whatever, startEver, clicked, checkClicked}) {
  return(
    <div>
      <div className='btn header'>
        <button className='special' onClick={() => startEver()}>Start Over</button>
        <label className={checkClicked ? 'filtered checked' : 'filtered'}>Breathing<input type="checkbox" name="breathing" value="breathing" className="storesCheckBox" onChange={() => multiFilter()} onClick={(e) => {clicked(e)}} /></label>
        <label className='filtered'>Cancer<input type="checkbox" name="cancer" value="cancer" className="storesCheckBox" onChange={() => multiFilter()} onClick={(e) => {clicked(e)}} /></label>
        <label className='filtered'>Depression<input type="checkbox" name="depression" value="depression" className="storesCheckBox" onChange={() => multiFilter()} onClick={(e) => {clicked(e)}} /></label>
        <label className='filtered'>Diabetes<input type="checkbox" name="diabetes" value="diabetes" className="storesCheckBox" onChange={() => multiFilter()} /></label>
        <label className='filtered'>HIV/AIDS<input type="checkbox" name="hiv" value="hiv" className="storesCheckBox" onChange={() => multiFilter()} /></label>
        <label className='filtered'>Migraine<input type="checkbox" name="migraine" value="migraine" className="storesCheckBox" onChange={() => multiFilter()} /></label>
        <label className='filtered'>MS/UC<input type="checkbox" name="ms-uc" value="ms-uc" className="storesCheckBox" onChange={() => multiFilter()} /></label>
        <label className='filtered'>Other<input type="checkbox" name="other" value="other" className="storesCheckBox" onChange={() => multiFilter()} /></label>
        <label className='filtered'>Psoriasis<input type="checkbox" name="psoriasis" value="psoriasis" className="storesCheckBox" onChange={() => multiFilter()} /></label>
        <label className='filtered'>Sleep<input type="checkbox" name="sleep" value="sleep" className="storesCheckBox" onChange={() => multiFilter()} /></label>
        <button className='special' onClick={() => setWhatever([])}>Clear All</button>
        {/* <button className='filtered' onClick={() => filteredMeds('breathing')}>Breathing</button>
        <button className='filtered' onClick={() => filteredMeds('cancer')}>Cancer</button>
        <button className='filtered' onClick={() => filteredMeds('depression')}>Depression</button>
        <button className='filtered' onClick={() => filteredMeds('diabetes')}>Diabetes</button>
        <button className='filtered' onClick={() => filteredMeds('hiv')}>HIV/AIDS</button>
        <button className='filtered' onClick={() => filteredMeds('migraine')}>Migraine</button>
        <button className='filtered' onClick={() => filteredMeds('ms-uc')}>MS/UC</button>
        <button className='filtered' onClick={() => filteredMeds('other')}>Other</button>
        <button className='filtered' onClick={() => filteredMeds('psoriasis')}>Psoriasis</button>
        <button className='filtered' onClick={() => filteredMeds('sleep')}>Sleep</button> */}
      </div>
      <div id='search' className='container'>
        <h3><span className='opaque'>We have found <span style={{color: '#d31334'}}>{whatever.length}</span> medications that match your selection:</span></h3>
      </div>
    </div>
  )
}

export default Buttons;