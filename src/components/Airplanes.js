import React, { Component } from 'react'
import axios from 'axios'
import BootNav from './BootNav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SERVER_PLANE_URL = 'https://dougmaxi-airlines.herokuapp.com/airplanes.json'

//TODO only admins can use this page

class Airplanes extends Component{
  constructor(props){
    super(props);
    this.state = {
      rows: 1 ,
      columns: 1,
      user: this.props.match.params.user
    }

    this.updateRows = this.updateRows.bind(this);
    this.updateColumns = this.updateColumns.bind(this);

  }

  updateRows(r){
    this.setState( { rows: r } );
  }

  updateColumns(c){
    this.setState( { columns: c } );
  }


  render(){
    return(
      <div>
			<BootNav user={ this.state.user } />
			<br/>
        <PlaneForm onRowChange={ this.updateRows } onColumnChange={ this.updateColumns } />
        <h3></h3>
        <SeatsTable rows={ this.state.rows } columns={ this.state.columns } />
      </div>
    )
  }
}

class PlaneForm extends Component{
  constructor(){
    super();

    this.state = {
      plane_model: "",
      rows: 1,
      columns: 1
     }

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleModel = this._handleModel.bind(this);
    this._handleRow = this._handleRow.bind(this);
    this._handleColumn = this._handleColumn.bind(this);
  }

  _handleSubmit( event ){
    event.preventDefault();

    const toSubmit = {
        plane_model: this.state.plane_model,
        rows: this.state.rows,
        columns: this.state.columns
      };

    axios.post(SERVER_PLANE_URL, toSubmit);

    this.setState( {
      plane_model: "",
      rows: 1,
      columns: 1
     } );

     this.props.onRowChange( 1 );
     this.props.onColumnChange( 1 );
  }

  _handleRow(event){
    this.setState({ rows: event.target.value });
    this.props.onRowChange( event.target.value );
  };

  _handleColumn(event){
    this.setState({ columns: event.target.value });
    this.props.onColumnChange( event.target.value );
  };

  _handleModel(event){
    this.setState({ plane_model: event.target.value });
  }

  render(){
    return(
      <form onSubmit={ this._handleSubmit }>
        <label>Plane Model</label>
        <input type="text" onChange={ this._handleModel } value={ this.state.plane_model } required/>
        <label>Rows</label>
        <input type="number" min="1" onChange={ this._handleRow } value={ this.state.rows } required/>
        <label>Columns</label>
        <input type="number" min="1" max="8" onChange={ this._handleColumn } value={ this.state.columns } required/>
        <input type="submit" value="Create"/>
      </form>
    )
  }
}

class SeatsTable extends Component{
  createGrid(){
    const grid = [];
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];


    for (let i = 0; i < this.props.columns; i++){

      const row = [];

      for (let j = 1; j <= this.props.rows; j++){
        if (j < 14){
          row.push(<Col className="chair">{letters[i]} {j}</Col>);
        }else if ( j == this.props.rows ){
          row.push(<Col className="chair">{letters[i]} {j}</Col>);
        }else if ( j === 14 ){
          row.push(<Col className="chair">{letters[i]} ...</Col>);
        }
      }
      grid.push(<Row>{row}</Row>);
    }

    return grid;

  }

  render(){
    return(
      <div>
        <Container>
          { this.createGrid() }
        </Container>
      </div>
      )
  }
}

export default Airplanes
