import React, { Component } from 'react'
import Header from './Header'
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
		    <NavbarBrand href="#home">Navbar</NavbarBrand>
		    <Nav className="mr-auto">
		      <NavLink href="#home">Home</NavLink>
		      <NavLink href="#features">Features</NavLink>
		      <NavLink href="#pricing">Pricing</NavLink>
		    </Nav>
		  </Navbar>
        <Header />
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
