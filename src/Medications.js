import React, {useState} from 'react';
import {data} from './data';
import Buttons from './Buttons';
import './App.css';

function Medications() {
  const [meds, setMeds] = useState(data);
  const [cart, setCart] = useState([]);

  const startOver = () => {
    let checkboxes = document.getElementsByName('types');
    const labels = document.querySelectorAll('label');
    labels.forEach(item => {
      item.classList.remove('checked');
    });
    for (let checkbox of checkboxes) {
      checkbox.checked = false;
    }
    setMeds(data);
    document.getElementById("search").style.display = "none";
  }

  const clickLabel = (e) => {
    const checked = e.target;
    checked.classList.toggle('checked');
  }

  const multipleFilter = () => {
    const checkedValues = [...document.querySelectorAll('.storesCheckBox')]
      .filter(input => input.checked)
      .map(input => input.value);
    const filteredStores = data.filter(({keyword}) => checkedValues.includes(keyword));
    setMeds(filteredStores);
    document.getElementById('search').style.display = 'block';
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

  const addItem = (id) => {
    const drug = data.find(drug => drug.id === id);
    if (!cart.includes(drug)) {
      document.getElementById('items').style.display = "block";
      document.getElementById('removeAll').style.display = "block";
      setCart([...cart, drug]);
    }
  }

  const removeItem = (id) => {
    const drug = data.find(drug => drug.id === id);
    if (cart.includes(drug)) {
      const newList = [...cart];
      newList.splice(newList.indexOf(drug), 1);
      setCart(newList);
      if (cart.length -1 === 0) {
        document.getElementById('items').style.display = "none";
      }
    }
  }

  const showList = () => {
    const x = document.getElementById('items');
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
  }

  const emptyCart = () => {
    setCart([]);
    document.getElementById('removeAll').style.display = "none";
    document.getElementById('items').style.display = "none";
  }

  return(
    <div>
      <div id='displayCart' className='cart notification' onClick={() => showList()}>
        <span><i id='icon' className="fas fa-shopping-cart"></i></span>
        <span className='badge'> {cart.length} </span>
      </div>
      <div className='container'>
        <span className='opaque' style={{padding: '2em'}}>
          <h1 className='gradient-text'>Discover new medications.</h1>
        </span>
      </div>
      <div id='items' style={{display: 'none'}}>
        <div style={{backgroundColor: 'rgba(250, 250, 250, 0.5)', padding: '1em', margin: '1em'}} className='container'>
          <h3><span className='opaque' >Here are the items you have selected:</span></h3>
        </div>
        <ul>
          {cart.map((newElement => {
            const {name, id} = newElement;
            return(
              <li key={newElement.id}><span><i className="fas fa-times" style={{cursor: 'pointer', color: '#d31334'}} onClick={() => removeItem(id)}></i></span>&nbsp;&nbsp;&nbsp;{name}</li>
            )
          }))}
        </ul>
        <div id='removeAll' style={{display: 'none', backgroundColor: 'rgba(250, 250, 250, 0.5)', padding: '1em', margin: '1em 9em', cursor: 'pointer'}} className='container' onClick={() => emptyCart()}>
          <h3><span className='opaque'>Empty cart</span></h3>
        </div>
      </div>
      <Buttons multiFilter={multipleFilter} startEver={startOver} whatever={meds} data={data} clkLbl={clickLabel} />  {/* filteredMeds={chosenMeds} */}
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