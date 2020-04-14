import React from 'react';
import './Item.css';

export default function Item(props) {

  return (
    <div className="item hvr-grow-shadow">
      <div className="logo">
     
        <img src={"/img/" + props.data.name + ".png"} alt=""/>
        {/* <img src="/img/EOS.png" alt=""/> */}
      </div>
      <div className="name">
        {props.data.name}
      </div>
      <div className="currency">
      {props.data.price_usd.toFixed(2)} $
      </div>

    </div>
    
    
  )
  
}

