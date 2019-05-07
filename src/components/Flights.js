import React, { Component } from 'react'
import axios from 'axios'

import Nav from './Nav'
import Header from './Header'

const SERVER_FLIGHT_URL = 'http://localhost:3000/flights.json'

class Flights extends Component {
	constructor(){
		super();

		this.state = {
			flights: [],
		};

		const fetchFlights = () => {
			axios.get(SERVER_FLIGHT_URL).then( (results) => {
				this.setState( { flights: results.data } );
			});
		};

		fetchFlights();
	}

	render () {
		return (
			<div className='container'>
        <Nav />
        <Header />
        <FlightForm />
        <h3>Flights</h3>
        <FlightTable />
      </div>
		);
	}
};

class FlightForm extends Component{
	constructor(){
		super();

		this.state = {
			
			// t.text "flight_number"
			// t.text "origin"
			// t.text "destination"
			// t.date "date"
			// t.integer "airplane_id"

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

	}

	_handleFlightNumber(event){

	}

	_handleDate(event){

	}

	_handleFrom(event){

	}

	_handleTo(event){

	}

	_handlePlane(event){

	}

	render(){
		return(
			<form>
				<label>Flight Number</label>
				<input type="text"/>

				<label>Date</label
				<input type="date" />

				<label>From</label>
				<input type="text"/>

				<label>To</label>
				<input type="text"/>

				<label>Plane</label>
				<select>
					<option value="temp">Temp</option>
					<option value="temp2">Temp2</option>
					//TODO get all planes as options
				</select>

				<input type="submit" value="Create"/>
			</form>
		)
	}
}

class FlightTable extends Component{
	render(){
		return(
			<div>
			</div>
		)
	}
}

export default Flights;
