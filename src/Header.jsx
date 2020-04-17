import React from 'react';
import './Header.css';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./Converter.jsx"
import { slide as Menu } from 'react-burger-menu'




export default class Header extends React.Component {


  showSettings (event) {
    event.preventDefault();
  
  }

  myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  render(){

    return(


      <header >
        <div className="header">
        <Link className="header__title-link" to="/">
          <img className="hvr-rotate" src="img/logo.png" alt=""/>
          <span className="header__title">CRYPTOWATCHER</span>
        </Link>
        </div>

        <div class="topnav" id="myTopnav">
          <a href="/"  ><Link className="active2" to="/">Home</Link></a>
          <a href=""><Link to="/сonverter">Converter</Link></a>
          <a href=""><Link to="/chart">Chart</Link></a>
          <a href=""><Link to="/contact">Contact</Link></a>
          <a href="javascript:void(0);" class="icon" onClick={this.myFunction}>
            <i class="fa fa-bars"></i>
          </a>
        </div>

    
      </header>   
        
        

    )
  }
  
}

