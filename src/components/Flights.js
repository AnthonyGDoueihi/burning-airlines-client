import React, { Component } from 'react'
import axios from 'axios'

import Nav from './Nav'
import Header from './Header'

const SERVER_FLIGHT_URL = 'http://localhost:3000/flights.json'
const SERVER_PLANE_URL = 'http://localhost:3000/airplanes.json'

class Flights extends Component {
	constructor(){
		super();

		this.state = {
			flights: [],
			planes: []
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
			<div className='container'>
        <Nav />
        <Header />
        <FlightForm planes={ this.state.planes } />
        <h3>Flights</h3>
        <FlightTable flights={ this.state.flights }/>
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
			<div>
				{ this.props.flights.map( (f) =>
					<div key={ f.id }>
						<label>Date</label>
						<p>{ f.date }</p>
						<label>Flight</label>
						<p>{ f.flight_number }</p>
						<label>Origin</label>
						<p>{ f.origin }</p>
						<label>Destination</label>
						<p>{ f.destination }</p>
						<label>Seats</label>
					</div>  ) }
			</div>
		)
	}
}
// TODO Seats


export default Flights;
