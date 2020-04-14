import React from 'react';
import './Header.css';
import { render } from 'react-dom';
import Item from "./Item.jsx"

export default function List(props) {
  console.log(props);
  
  return(
    <main>
   
    {props.news.map((element) => {
      if(element.price_usd != undefined && element.name == "Bitcoin" || element.name == "Ethereum" || element.name == "Ripple" ||element.name == "Bitcoin Cash" ||element.name == "Tether" ||element.name == "Litecoin" ||element.name == "EOS" ||element.name == "Binance Coin"  || element.name == "Stellar"){
        
      return <Item data={element} />
      }
     })} 
    </main>
  )
}
