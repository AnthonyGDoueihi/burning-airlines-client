import React, {Component} from 'react'
import Header from './Header'
import Navbar from 'react-bootstrap/Navbar'
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
		    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
		    <Nav className="mr-auto">
		      <Nav.Link href="#home">Home</Nav.Link>
		      <Nav.Link href="#features">Features</Nav.Link>
		      <Nav.Link href="#pricing">Pricing</Nav.Link>
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
