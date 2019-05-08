import React, { Component } from 'react'
import BootNav from './BootNav'
import axios from 'axios';


class Search extends Component {
	constructor(){
		super();

		this.state = {
			users: [],
}
			const getUsers = () => {
				axios.get(SERVER_USER_URL).then( (results) => {
					this.setState( { users: results.data } );
				});
			};

			getUsers();

	}

	render () {
		return (
			<div className='container'>
				<BootNav />
			<br/>

        <SearchForm />
						<br/>
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
