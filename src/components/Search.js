import React, {Component} from 'react'
import Header from './Header'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>

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
		    <Form inline>
		      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
		      <Button variant="outline-info">Search</Button>
		    </Form>
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
