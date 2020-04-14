import React from 'react';
import './Header.css';
import { render } from 'react-dom';
import Item from "./Item.jsx"
import Sort from './Sort';

let readyArr = []
let arrForSort = []
const validCrypto = new Set([
  "Bitcoin",
  "Ethereum",
  "Ripple",
  "Bitcoin Cash",
  "Tether",
  "Litecoin",
  "EOS",
  "Binance Coin",
  "Stellar"
])

export default class List extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      sortedList: [],
      news: []
    }
  }

  componentDidMount(){
    console.log("допа вася");
    
    fetch('https://rest.coinapi.io/v1/assets?apikey=4EF2A239-DE2E-479C-B802-5E1B306ACE7E')
    .then((response) => response.json())
    .then((data) => {
    
      this.setState({
        sortedList: data.filter((item) => validCrypto.has(item.name)),
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  
  handleSortList = (e) => {

     const sortType = e.target.value;
  
    if (sortType === "price") {
      console.log("price");

      this.setState({
       
        sortedList: this.state.sortedList.sort((a,b) => b.price_usd - a.price_usd)
      })
      
    } else {
      console.log("vasia");
      
      this.setState({
       
        sortedList: this.state.sortedList.sort((a,b) => {
          const nameA = a.name.toLowerCase()
          const nameB = b.name.toLowerCase()  

          if (nameA < nameB) {
            return -1
          } 

          if (nameA > nameB) {
            return 1
          }
          return 0
        

        })
      })
      
    }
    
  }


  
  render(){
    
    
    return(
      <main>
      
      <Sort  methodforSort={(e) => { this.handleSortList(e)}}  />


      {this.state.sortedList.map((element,index) =>  <Item key={index} data={element} /> )}

      </main>
    )
  }
}
