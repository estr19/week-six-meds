import React, {useState} from 'react';
import {data} from './data';
import Buttons from './Buttons';
import axios from 'axios';
import './App.css';

function Medications() {
  const [meds, setMeds] = useState(data);
  const [cart, setCart] = useState([]);
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // const chosenMeds = (keyword) => {
  //   const newMeds = data.filter(element => element.keyword === keyword);
  //   setMeds(newMeds);
  //   document.getElementById('search').style.display = 'block';
  // }

  const isClicked = (e) => {
    const checked = e.target.checked;
    if (checked) {
      console.log('checked!');
      setIsChecked(true);
    } else {
      console.log('unchecked!');
      setIsChecked(true);
    }
  }

  const startOver = () => {
    setMeds(data);
    document.getElementById('search').style.display = 'none';
  }

  const multipleFilter = () => {
    const checkedValues = [...document.querySelectorAll('.storesCheckBox')]
      .filter(input => input.checked)
      .map(input => input.value);
    const filteredStores = data.filter(({ keyword }) => checkedValues.includes(keyword));
    setMeds(filteredStores);
    document.getElementById('search').style.display = 'block';
    console.log(filteredStores);
  }

  const showQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(res => {
      setQuote(res.data.content);
      setAuthor(res.data.author);
    })
    setShow(true);
  }

  const addItem = (id) => {
    const drug = data.find(drug => drug.id === id);
    if (!cart.includes(drug)) {
      document.getElementById('items').style.display = "block";
      setCart([...cart, drug]);
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

  const removeItem = (id) => {
    const drug = data.find(drug => drug.id === id);
    if (cart.length > 0) {
      if (cart.includes(drug)) {
        const newList = [...cart];
        newList.splice(newList.indexOf(drug), 1);
        setCart(newList);
      }
    }
    if (cart.length === 0) {
      document.getElementsById('items').style.display = "none";
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

  return(
    <div>
      <div id='displayCart' className='cart notification' onClick={() => showList()}>
        <span><i id='icon' className="fas fa-shopping-cart"></i></span>
        <span className='badge'> {cart.length} </span>
      </div>
      <div className='shipping' style={{cursor: 'pointer'}} onClick={() => showQuote()}>
        <h3><i className="fas fa-quote-left"></i>{show ? `${quote} ${author}` : 'Click here to get inspirational quotes!'}<i className="fas fa-quote-right"></i></h3>
      </div>
      <div className='container'><span className='opaque'>
        <div className='gradient-text'>
          <h1>Brand-new medications.</h1>
        </div></span>
      </div>
      <div id='items' style={{display: 'none'}}>
        <ul>
          {cart.map((newElement => {
            const {name, id} = newElement;
            return(
              <li key={newElement.id}><span><i className="fas fa-times" style={{cursor: 'pointer', color: '#d31334'}} onClick={() => removeItem(id)}></i></span>&nbsp;&nbsp;&nbsp;{name}</li>
            )
          }))}
        </ul>
      </div>
     <Buttons multiFilter={multipleFilter} setWhatever={setMeds} startEver={startOver} clicked={isClicked} whatever={meds} data={data} checkClicked={isChecked} />  {/* filteredMeds={chosenMeds} */}
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