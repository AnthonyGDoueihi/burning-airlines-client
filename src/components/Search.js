import React, { Component } from 'react'
import BootNav from './BootNav'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SERVER_FLIGHT_URL = 'https://dougmaxi-airlines.herokuapp.com/flights.json'

class Search extends Component {

	constructor(props){
		super(props);
		// this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			user: this.props.match.params.user,
			origin: "",
			destination: "",
			flights: []
		};

		const handleSubmit = (e) => {
			e.preventDefault();
			console.log("rhdueihdiw");
			this.setState({
				origin: this.origin.value,
				destination: this.destination.value
			})
			fetchFlights();
		}

		const fetchFlights = () => {
			axios.get(`${SERVER_FLIGHT_URL}?origin=${this.state.origin}&destination=${this.state.destination}`).then( (results) => {
				this.setState( { flights: results.data } );
				console.log(results)
			});
		};
	}

	render () {
		return (
			<div>
				<BootNav user={ this.state.user } />
			<br/>
			<br/>
        <h3>Flight Search Results</h3>

				<form onSubmit={this.handleSubmit}>
					<label>Origin
						<input ref={origin => this.origin = origin} />
					</label>
					<label>Destination
						<input ref={destination => this.destination = destination} />
					</label>

					<input type="submit" value="Search"/>
					//TODO make this search Flights
				</form>

        <ResultsTable flights={ this.state.flights } />
			</div>
		);
	}
};

// class SearchForm extends Component{
//
//
// 	render(){
// 		return(
// 			<form >
// 				<label>Origin</label>
// 				<input
// 					ref={input => this.origin = input}
// 					onChange={this.handleInputChange}
// 				/>
// 				<label>Destination</label>
// 				<input
// 					ref={input => this.destination = input}
// 					onChange={this.handleInputChange}
// 				/>
//
// 				<input type="submit" value="Search"/>
// 				//TODO make this search Flights
// 			</form>
// 		)
// 	}
// }


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
