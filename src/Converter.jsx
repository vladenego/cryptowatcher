import React from 'react';
import './Converter.css';
import { render } from 'react-dom';

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


export default class Converter extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      result: null,
      curs: null,
      dataForSelect: []

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

  componentDidMount(){
   
    
    
    fetch('https://rest.coinapi.io/v1/assets?apikey=4EF2A239-DE2E-479C-B802-5E1B306ACE7E')
    .then((response) => response.json())
    .then((data) => {
    
      this.setState({
        ...this.state,
        dataForSelect: data.filter((item) => validCrypto.has(item.name)),
        
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }

  
  render(){

    return(
      <div className="converter">
        <h1>Currency converter</h1>
        <input placeholder="Type here..." type="tel" onChange={(e) => {this.printPrice(e)}}/>
        <select name="Valuta" id="" onChange={(e) => {this.handleSelectChange(e)}}>
        
           <option value="Bitcoin" selected disabled hidden >Select Crypto</option>
          
          {this.state.dataForSelect.map((element, index) => {
            return <option className="selectOption" key={index} value={element.price_usd}> {element.name} </option>}
          )}
        </select>
        
        <div className="resultSum">
        <h2>{this.state.result * (this.state.curs != null ? Number(this.state.curs).toFixed(2) : this.state.curs)} $ </h2>
        </div>
        
      </div>
    )
  }
  
}
