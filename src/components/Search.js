import React, { Component } from 'react'
import BootNav from './BootNav'
import axios from 'axios';


class Search extends Component {
	constructor(props){
		super(props);

		this.state = {
			user: this.props.match.params.user
		};
	}

	render () {
		return (
			<div>
				<BootNav user={ this.state.user } />
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
