import React, { Component } from 'react'
import axios from 'axios'

import Nav from './Nav'
import Header from './Header'

const SERVER_PLANE_URL = 'http://localhost:3000/airplanes.json'

class Airplanes extends Component{
  constructor(){
    super();
    this.state = { rows: 1 , columns: 1 }

  }

  updateRows(r){
    this.setState( { rows: r } );
  }

  updateColumns(c){
    this.setState( { columns: c } );
  }


  render(){
    return(
      <div class='container'>
        <Nav />
        <Header />
        <PlaneForm onRowChange={ this.updateRows } onColumnChange={ this.updateColumns } />
        <h3></h3>
        <SeatsTable rows={ this.state.rows } columns={ this.state.columns } />
      </div>
    )
  }
}

class PlaneForm extends Component{

  _handleRow(event){
    this.props.updateRows( event.target.value );
  };

  _handleColumn(event){
    this.props.updateColumns( event.target.value );
  };

  render(){
    return(
      <form>
        <label>Plane Model</label>
        <input type="text"/>
        <label>Rows</label>
        <input type="number" min="1" onChange={ this._handleRow }/>
        <label>Columns</label>
        <input type="number" min="1" max="8" onChange={ this._handleColumn }/>
        <input type="submit" value="Create"/>
      </form>
    )
  }
}

class SeatsTable extends Component{
  render(){
    return(
      <div>
        <p>{this.props.rows}</p>
        <p>{this.props.columns}</p>
        </div>
      )
  }
}

export default Airplanes
