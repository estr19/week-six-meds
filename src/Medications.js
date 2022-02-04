import React from 'react';
import {useState} from 'react';
import {data} from './data';
import Buttons from './Buttons';
import './App.css';

function Medications() {
  const [meds, setMeds] = useState(data);

  const chosenMeds = (keyword) => {
    const newMeds = data.filter(element => element.keyword === keyword);
    setMeds(newMeds);
  }

  // const removeItem = (id) => {
  //   let newmeds = meds.filter(item => item.id !== id)
  //   setMeds(newmeds);
  // }

  const setShowMore = (id) => {
    const newMeds = [];
    meds.forEach(med => {
        if (med.id === id) {
            const changedMeds = {...med, showMore: !med.showMore};
            newMeds.push(changedMeds);
        } else {
            newMeds.push(med);
        }
    });
    setMeds(newMeds); 
}

  return(
    <div>
      <div className='container'>
        <h5 className='shipping'><i className="fas fa-truck flip"></i> FREE SHIPPING ON ORDERS OVER $100! <i className="fas fa-truck"></i></h5>
      </div>
      <div className='gradient-text'>
        <h1>A list of <u>{meds.length}</u> medications.</h1>
      </div>
      <Buttons filteredMeds={chosenMeds} setWhatever={setMeds} data={data} />
      <div className='list'>
        {meds.map((element => {
          const {id, name, medical, image, purpose, showMore} = element;
          return(
            <div className='item' key={id}>
              <div className='container'>
                <h2>{id} - {name}</h2>
              </div>
              <div className='container'>
                <img src={image} alt={name} width='300px'/>
              </div>
              <div className='container'>
                <h3>{medical}</h3>
              </div>
              <div className='container'>
                {/* <p>{purpose}</p> */}
                <p>{showMore ? purpose : purpose.substring(0, 90) + "..."}<span className="btn-more" onClick={() => setShowMore(id)}>{showMore ? ' less' : 'more'}</span></p>
                
              </div>
              {/* <div className='container'>
                <button className='remove-each' onClick={() => removeItem(id)}>Remove Item</button>
              </div> */}
            </div>
          )
        }))}
      </div>
    </div>
  )
}

export default Medications;