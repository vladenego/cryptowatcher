import React from 'react';
import './Converter.css';
import { render } from 'react-dom';

export default class Converter extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      result: null,
      curs: null
    };
    
  }

   printPrice = (e) => {
    console.log(e.target.value);
    this.setState({
      result: e.target.value,
   
    })
  }

  handleSelectChange = (e) => {
    console.log(e.target.value);
    console.log(this.props.currency);

    this.setState({
      curs: e.target.value
    })
    
  }

  
  
  
 
  render(){

    return(
      <div className="converter">
        <h1>Currency converter</h1>
        <input placeholder="Type here..." type="tel" onChange={(e) => {this.printPrice(e)}}/>
        <select name="Valuta" id="" onChange={(e) => {this.handleSelectChange(e)}}>
        
           <option value="Bitcoin" selected disabled hidden >Select Crypto</option>
          
          {this.props.currency.map((element, index) => {
            if(element.price_usd != undefined && element.name == "Bitcoin" || element.name == "Ethereum" || element.name == "Ripple" ||element.name == "Bitcoin Cash" ||element.name == "Tether" ||element.name == "Litecoin" ||element.name == "EOS" ||element.name == "Binance Coin"  || element.name == "Stellar"){
            return <option className="selectOption" key={index} value={element.price_usd}>{element.name}</option>}
          })}
        </select>
        
        <div className="resultSum">
        <h2>{this.state.result * (this.state.curs != null ? Number(this.state.curs).toFixed(2) : this.state.curs)} $ </h2>
        </div>
        
      </div>
    )
  }
  
}
