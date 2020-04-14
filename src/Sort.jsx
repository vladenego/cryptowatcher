import React from 'react';
import './Header.css';
import { render } from 'react-dom';
import "./Sort.css"


export default class Sort extends React.Component {
  constructor(props){
    super(props);



  }

  render(){
    return(
      <div className="sort">
        <p>Sort by: </p>
        <select name="" id="" onChange={(e) => { this.props.methodforSort(e)}}>
        <option value="" selected disabled hidden >select by</option>
          <option value="name">name</option>
          <option value="price">price</option>
        </select>
      </div>
    )
  }
}
