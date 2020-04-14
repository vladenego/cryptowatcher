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


export default function Header() {
  return(
   
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
        <div className="header__btn">
          <button className="login hvr-grow-shadow">LOGIN</button>
          <button className="register hvr-grow-shadow">Register</button>
        </div>
      </div>
      </div>

      

    </header>
  
  )
}
