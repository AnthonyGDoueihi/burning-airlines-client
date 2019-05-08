import React, { Component } from 'react';
import axios from 'axios';
import BootNav from './BootNav';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const SERVER_FLIGHT_URL = 'https://dougmaxi-airlines.herokuapp.com/flights.json'
const SERVER_PLANE_URL = 'https://dougmaxi-airlines.herokuapp.com/airplanes.json'

class Flights extends Component {
	constructor(props){
		super(props);

		this.state = {
			flights: [],
			planes: [],
			user: this.props.match.params.user
		};

		const fetchFlights = () => {
			axios.get(SERVER_FLIGHT_URL).then( (results) => {
				this.setState( { flights: results.data } );
				setTimeout(fetchFlights, 4000);
			});
		};

		axios.get(SERVER_PLANE_URL).then((results) => {
			this.setState( { planes : results.data } );
		});

		fetchFlights();
	}

	render () {
		return (
			<div>
				<BootNav user={ this.state.user } />
						<br/>
        <FlightForm planes={ this.state.planes } />
						<br/>
        <h3>Flights</h3>
        <FlightTable flights={ this.state.flights } user={ this.state.user } />
      </div>
		);
	}
};

class FlightForm extends Component{
	constructor(props){
		super(props);

		this.state = {
			flight_number: "",
			origin: "",
			destination: "",
			date: Date.now,
			airplane_id: 0
		}

		this._handleSubmit = this._handleSubmit.bind(this);
		this._handleFlightNumber = this._handleFlightNumber.bind(this);
		this._handleDate = this._handleDate.bind(this);
		this._handleFrom = this._handleFrom.bind(this);
		this._handleTo = this._handleTo.bind(this);
		this._handlePlane = this._handlePlane.bind(this);
	}

	_handleSubmit(event){
		event.preventDefault();

		if( this.state.airplane_id === '0') { return; }
		//TODO make this return an error

		const toSubmit = {
			flight_number: this.state.flight_number,
			origin: this.state.origin,
			destination: this.state.destination,
			date: this.state.date,
			airplane_id: this.state.airplane_id
			};

			this.state = {
				flight_number: "",
				origin: "",
				destination: "",
				date: Date.now,
				airplane_id: 0
			}

		axios.post(SERVER_FLIGHT_URL, toSubmit);
	}

	_handleFlightNumber(event){
		this.setState({ flight_number : event.target.value });
	}

	_handleDate(event){
		this.setState({ date : event.target.value });
	}

	_handleFrom(event){
		this.setState({ origin : event.target.value });
	}

	_handleTo(event){
		this.setState({ destination : event.target.value });
	}

	_handlePlane(event){
		this.setState({ airplane_id : event.target.value });
	}

	render(){
		return(
			<form onSubmit={ this._handleSubmit } >
				<label>Flight Number</label>
				<input type="text" onChange={ this._handleFlightNumber } value={ this.state.flight_number } required/>

				<label>Date</label>
				<input type="date" onChange={ this._handleDate } value={ this.state.date } required/>

				<label>Origin</label>
				<input type="text"onChange={ this._handleFrom } value={ this.state.origin } required/>

				<label>Destination</label>
				<input type="text"onChange={ this._handleTo } value={ this.state.destination } required/>

				<label>Plane</label>
				<select onChange={ this._handlePlane } value={ this.state.plane_model } required>
					<option key='0' value='0'>Please Select a Plane </option>
					 { this.props.planes.map( (p) => <option key={ p.id } value={ p.id }>{ p.plane_model }</option> ) }
				</select>

				<input type="submit" value="Create"/>
			</form>
		)
	}
}

class FlightTable extends Component{
	render(){
		return(

			<Table striped bordered hover size="sm">
  			<thead>
    		<tr>
      		<th>Date</th>
      		<th>Flight</th>
      		<th>From > To</th>
      		<th>Plane</th>
      		<th>Seats</th>
    		</tr>
  			</thead>
  			<tbody>

					{ this.props.flights.map( (f) =>
					<tr key={ f.id }>
						<td>{ f.date }</td>
						<td><Link to={ `/${ this.props.user }/Flight/${ f.flight_number }`}>{ f.flight_number }</Link></td>
						<td>{ f.origin } > { f.destination }</td>
						<td>{ f.plane_model }</td>
						<td>{ f.rows * f.columns }</td>
					</tr>)}

  			</tbody>
			</Table>
		)
	}
}
// TODO Seats and plane name


export default Flights;
