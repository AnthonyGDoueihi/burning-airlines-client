import React, { Component } from 'react'
import axios from 'axios'

import Nav from './Nav'
import Header from './Header'


class Flights extends Component {
	constructor(){
		super();
	}

	render () {
		return (
			<div className='container'>
        <Nav />
        <Header />
        <FlightForm />
        <h3></h3>
        <FlightTable />
      </div>
		);
	}
};

class FlightForm extends Component{
	render(){
		return(
			<div>
			</div>
		)
	}
}

class FlightTable extends Component{
	render(){
		return(
			<form>
				<label>Plane Model</label>
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

export default Flights;
