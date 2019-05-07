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
        <h3></h3>
        <ResultsTable />
      </div>
		);
	}
};

class SearchForm extends Component{
	render(){
		return(
			<div>
			</div>
		)
	}
}

class ResultsTable extends Component{
	render(){
		return(
			<form>
				<label>From</label>
				<input type="text"/>
				<label>To</label>
				<input type="text"/>
				<input type="submit" value="Search"/>
				//TODO make this search Flights
			</form>
		)
	}
}

export default Search;
