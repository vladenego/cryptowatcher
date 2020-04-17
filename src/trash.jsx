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

  // constructor(){

  // }

  showSettings (event) {
    event.preventDefault();
  
  }

  render(){

    return(
      <div id="outer-container">
        <header>
          hi
        </header>
        <button>

        </button>
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/converter">Converter</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu> 
      </div> 

    )
  }
  
}









<header>
      <div className="container">
      <div className="header">

      
        <div className="header__logo">
          <img className="hvr-rotate" src="img/logo.png" alt=""/>
          CRYPTOWATCHER
        </div>
        <div className="header__nav ">
          <ul>
            <li className="hvr-underline-from-left"><Link to="/">Home</Link></li>
            <li className="hvr-underline-from-left"><Link to="/сonverter">Converter</Link></li>
            <li className="hvr-underline-from-left"><Link to="/chart">Chart</Link></li>
            <li className="hvr-underline-from-left"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        {/* <div className="header__btn">
          <button className="login hvr-grow-shadow">LOGIN</button>
          <button className="register hvr-grow-shadow">Register</button>
        </div> */}
      </div>
      </div>

      

</header>
