import React from 'react';
import {useState} from 'react';
import {data} from './data';
import Buttons from './Buttons';
import './App.css';

function Medications() {
  const [meds, setMeds] = useState(data);
  const [cart, setCart] = useState([]);
    

  const chosenMeds = (keyword) => {
    const newMeds = data.filter(element => element.keyword === keyword);
    setMeds(newMeds);
  }

  const addItem = (id) => {
    const drug = data.find(drug => drug.id === id);
    if (!cart.includes(drug)) {
      setCart([...cart, drug]);
    }
    if (cart.includes(drug)) {
      const newList = [...cart];
      newList.splice(newList.indexOf(drug), 1);
      setCart(newList);
    }
  }

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

  const showList = () => {
    const x = document.getElementById('items');
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
  }

  return(
    <div>
      <div id='displayCart' className='cart notification' onClick={() => showList()}>
        <span><i id='icon' className="fas fa-shopping-cart"></i></span>
        <span className='badge'> {cart.length} </span>
      </div>
      <div className='container'>
        <h5 className='shipping'><i className="fas fa-truck flip"></i> FREE SHIPPING ON ORDERS OVER $100! <i className="fas fa-truck"></i></h5>
      </div>
      <div className='gradient-text'>
        <h1>A list of <u>{meds.length}</u> brand-new medications.</h1>
      </div>
      <div id='items' style={{display: 'none'}}>
        <ul>
          {cart.map((newElement => {
            const {name} = newElement;
            return(
              <li key={newElement.id}><span><i className="fas fa-check"></i></span>&nbsp;&nbsp;&nbsp;{name}</li>
            )
          }))}
        </ul>
      </div>
      <br></br>
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
                <p>{showMore ? purpose : purpose.substring(0, 90) + "..."}<span className="btn-more" onClick={() => setShowMore(id)}>{showMore ? ' collapse' : 'expand'}</span></p>
                
              </div>
              <div className='container'>
                <button onClick={() => addItem(id)}>Add to Cart</button>
              </div>
            </div>
          )
        }))}
      </div>
    </div>
  )
}

export default Medications;