import React, { Component } from 'react'
import BootNav from './BootNav'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../index.css'

const SERVER_FLIGHT_URL = 'https://dougmaxi-airlines.herokuapp.com/flights.json'

class Search extends Component {

	constructor(props){


		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this._handleOriginChange = this._handleOriginChange.bind(this);
		this._handleDestinationChange = this._handleDestinationChange.bind(this);

		this.state = {
			user: this.props.match.params.user,
			origin: "",
			destination: "",
			flights: []
		};

	}

	fetchFlights() {
		axios.get(`${SERVER_FLIGHT_URL}?origin=${this.state.origin}&destination=${this.state.destination}`).then( (results) => {
			this.setState( { flights: results.data } );
			console.log(results)
		});
	};

	_handleOriginChange(e) {
		this.setState({origin: e.target.value});
	}

	_handleDestinationChange(e) {
		this.setState({destination: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.fetchFlights();
	}

	render () {
		return (
			<div>
				<BootNav user={ this.state.user } />
					<br/>
        <h3>Flight Search Results</h3>
					<br/>
				<form onSubmit={this.handleSubmit}>
					<label>&nbsp;Origin:&nbsp;&nbsp;
						<input onInput={this._handleOriginChange} />
					</label>
					<label>&nbsp;Destination:&nbsp;&nbsp;
						<input onInput={this._handleDestinationChange}/>
					</label>

					<input type="submit" value="Search"/>

				</form>
				<br/>
        <ResultsTable user={this.props.match.params.user} flights={ this.state.flights } />
			</div>
		);
	}
};

class ResultsTable extends Component{
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

export default Search;
