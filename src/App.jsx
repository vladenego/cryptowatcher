import React from 'react';
import logo from './logo.svg';
import './App.css';
import './hover.css';
import { render } from 'react-dom';
import Item from "./Item.jsx"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import List from "./List.jsx"
import Converter from "./Converter.jsx"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      news: [],
  
    };
  }

  componentDidMount(){
    fetch('https://rest.coinapi.io/v1/assets?apikey=4EF2A239-DE2E-479C-B802-5E1B306ACE7E')
    .then((response) => response.json())
    .then((data) => {
  
    
      this.setState({
        news: data
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
 
render(){
  console.log(this.state.news);
  
  return ( 
    <div className = "App" >

    <Router>
    <Header />
     <Switch>
      <Route  path="/сonverter">
          <Converter currency={this.state.news} />   
      </Route>
          <Route path="/chart">
       
      </Route>
          <Route  exact path="/">
     <List news={this.state.news} />       
      </Route>
          
        </Switch>

    

    </Router>
    <Footer />
    
    </div>
    );
}
  
}

