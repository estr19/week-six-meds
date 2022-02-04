import React from 'react';
import './App.css';

function Buttons({filteredMeds, setWhatever, data}) {

  return(
    <div className='btn'>
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
      <button className='special' onClick={() => setWhatever(data)}>Restore All</button>
    </div>
  )
}

export default Buttons;