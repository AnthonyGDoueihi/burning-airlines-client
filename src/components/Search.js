import React, {Component} from 'react'

import Nav from './Nav'
import Header from './Header'


class Search extends Component {
	constructor(){
		super();
	}

	render () {
		return (
			<div className='container'>
        <Nav />
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
