import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavLink from 'react-bootstrap/NavLink'
import Nav from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';



class Search extends Component {
	constructor(){
		super();
	}

	render () {
		return (
			<div className='container'>
			<Navbar bg="dark" variant="dark">
		    <NavbarBrand href="#home">Burning Airlines</NavbarBrand>
		    <Nav className="mr-auto">
		      <NavLink href="#Search">Search</NavLink>
		      <NavLink href="#Booking">Booking</NavLink>
		      <NavLink href="#Airplanes">Airplanes</NavLink>
					<NavLink href="#Flights">Flights</NavLink>
		    </Nav>
		  </Navbar>
        <SearchForm />
        <h3>Flight Search Results</h3>
        <ResultsTable />
      </div>
		);
	}
};

class SearchForm extends Component{
	render(){
		return(
			<form>
				<label>From</label>
				<input type="search"/>
				<label>To</label>
				<input type="search"/>

				<input type="submit" value="Search"/>
				//TODO make this search Flights
			</form>
		)
	}
}

class ResultsTable extends Component{
	render(){
		return(
			<div>
			</div>
		)
	}
}

export default Search;
