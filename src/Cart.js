import React from "react";
import './App.css';

function Cart({value}) {
  return (
    <div>
      <div className='container'>
        <h5 className='shipping'><i className="fas fa-truck flip"></i> FREE SHIPPING ON ORDERS OVER $100! <i className="fas fa-truck"></i></h5>
      </div>
      <div className='gradient-text'>
        <h1>YOUR CART</h1>
      </div>
      <div className='container'>
        <ul>
          {value.map((newElement => {
            const {name} = newElement;
            return(
              <li key={newElement.id}><span><i className="fas fa-check"></i></span>&nbsp;&nbsp;&nbsp;{name}</li>
            )
          }))}
        </ul>
      </div>
    </div>
  )
}

export default Cart;