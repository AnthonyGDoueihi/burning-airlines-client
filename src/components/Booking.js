import React, {Component} from 'react'
import BootNav from './BootNav'


class Booking extends Component {
	constructor(props){
		super(props);
		this.state = {
			user: this.props.match.params.user
		}

	}

	render () {
		return (
			<div>
				<BootNav user={ this.state.user } />
			<br/>
			</div>
		);
	}
};

export default Booking;
