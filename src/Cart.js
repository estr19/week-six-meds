import React from "react";
import './App.css';

function Cart({medCart, removeMed, emptyMed}) {
  return (
    <div>
      <div className='container'><span className='opaque'>
        <div className='gradient-text'>
          <h1>Your Cart</h1>
        </div></span>
      </div>
      <div style={{backgroundColor: 'rgba(250, 250, 250, 0.5)', padding: '1em', margin: '1em'}} className='container'>
        <h3><span className='opaque' >Here are the items you have selected:</span></h3>
      </div>
      <div className='container'>
        <ul>
          {medCart.map((newElement => {
            const {name, id} = newElement;
            return(
              <li key={newElement.id}><span><i className="fas fa-times" style={{cursor: 'pointer', color: '#d31334'}} onClick={() => removeMed(id)}></i></span>&nbsp;&nbsp;&nbsp;{name}</li>
            )
          }))}
        </ul>
      </div>
      <div id='removeAll' style={{display: 'none', backgroundColor: 'rgba(250, 250, 250, 0.5)', padding: '1em', margin: '1em 9em', cursor: 'pointer'}} className='container' onClick={() => emptyMed()}>
          <h3><span className='opaque' >Empty cart</span></h3>
        </div>
    </div>
  )
}

export default Cart;