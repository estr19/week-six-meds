import React from 'react';
import './App.css';

function Buttons({filteredMeds, setWhatever, whatever, data}) {
  const startOver = () => {
    setWhatever(data);
    document.getElementById('search').style.display = 'none';
  }

  return(
    <div>
      <div className='btn'>
        <button className='special' onClick={() => startOver()}>Start Over</button>
        <button onClick={() => filteredMeds('breathing')}>Breathing</button>
        <button onClick={() => filteredMeds('cancer')}>Cancer</button>
        <button onClick={() => filteredMeds('depression')}>Depression</button>
        <button onClick={() => filteredMeds('diabetes')}>Diabetes</button>
        <button onClick={() => filteredMeds('hiv')}>HIV/AIDS</button>
        <button onClick={() => filteredMeds('migraine')}>Migraine</button>
        <button onClick={() => filteredMeds('ms-uc')}>MS/UC</button>
        <button onClick={() => filteredMeds('other')}>Other</button>
        <button onClick={() => filteredMeds('psoriasis')}>Psoriasis</button>
        <button onClick={() => filteredMeds('sleep')}>Sleep</button>
        <button className='special' onClick={() => setWhatever([])}>Clear All</button>
      </div>
      <div id='search' className='container'>
        <h3>We have found <span>{whatever.length}</span> medications that match your selection:</h3>
      </div>
    </div>
  )
}

export default Buttons;