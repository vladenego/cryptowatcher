import React from 'react';
import './Header.css';
import { render } from 'react-dom';
import Item from "./Item.jsx"
import Sort from './Sort';

let readyArr = []
let arrForSort = []

export default class List extends React.Component {
  constructor(props){
    super(props)
    


    this.state = {
      sortType: null
    }
  }
  
  handleSortList = (e) => {
    console.log(e.target.value);
    this.setState({
      sortType: e.target.value
    })
    
  }

 

  
  render(){
    
    
    return(
      <main>
      
      <Sort  methodforSort={(e) => { this.handleSortList(e)}}  />

      { this.props.news.map((element, index) => {
        
        if(element.price_usd != undefined && element.name == "Bitcoin" || element.name == "Ethereum" || element.name == "Ripple" ||element.name == "Bitcoin Cash" ||element.name == "Tether" ||element.name == "Litecoin" ||element.name == "EOS" ||element.name == "Binance Coin"  || element.name == "Stellar") {
          let arrForSort = [];
          arrForSort.push(element)

          return <Item data={element}  />
          }})

          }
        
      

      </main>
    )
  }
}
