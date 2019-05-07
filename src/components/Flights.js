import React, { Component } from 'react'
import axios from 'axios'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>



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
			});
		};

		axios.get(SERVER_PLANE_URL).then((results) => {
			this.setState( { planes : results.data } );
			console.log(results.data)
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
        <FlightTable />
      </div>
		);
	}
};

class FlightForm extends Component{
	constructor(){
		super();

		this.state = {
			flight_number: "",
			origin: "",
			destination: "",
			date: 0 ,//Empty Date?
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
			<form>
				<label>Flight Number</label>
				<input type="text" onChange={ this._handleFlightNumber } value={ this.state.flight_number } />

				<label>Date</label>
				<input type="date" onChange={ this._handleDate } value={ this.state.date } />

				<label>Origin</label>
				<input type="text"onChange={ this._handleFrom } value={ this.state.origin } />

				<label>Destination</label>
				<input type="text"onChange={ this._handleTo } value={ this.state.destination } />

				<label>Plane</label>
				<select onChange={ this._handlePlane } value={ this.state.plane_model } >
					this.props.planes.reverse().map( (p) =>
						<option value={ p.id }>{ p.plane_model }</option> )
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
