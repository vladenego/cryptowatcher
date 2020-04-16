import React from 'react';

import './App.css';
import './hover.css';

import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import List from "./List.jsx"
import Chart from "./Chart.jsx"


import Converter from "./Converter.jsx"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Socials from './Socials';

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

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      news: [],
  
    };
  }

 
render(){
  
  return ( 
    <div className = "App" >

    <Router>
    <Header />
     <Switch>

     <Route  path="/contact">
        <Socials />   
      </Route>

      <Route  path="/сonverter">
        <Converter currency={this.state.news} />   
      </Route>
        
      <Route path="/chart">
        <Chart />
      </Route>

      <Route  exact path="/">
        {/* <Sort /> */}
        <List />       
      </Route>
          
        </Switch>

    

    </Router>
    <Footer />
    
    </div>
    );
}
  
}

