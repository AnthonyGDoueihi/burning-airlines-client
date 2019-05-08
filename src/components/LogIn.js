import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavLink from 'react-bootstrap/NavLink'
import Nav from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios'

const SERVER_USER_URL = 'https://dougmaxi-airlines.herokuapp.com/users.json'

class LogIn extends Component {
	constructor() {
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
	};

	render () {
			return (
				<Navbar bg="dark" variant="dark">
					<NavbarBrand href="#">Login Page</NavbarBrand>
					<NavDropdown title="Change User" id="collasible-nav-dropdown">
					 {this.state.users.map( (u) => <NavDropdown.Item href="#" users={ u.name }>{ u.name } </NavDropdown.Item>
					)}

				</NavDropdown>

				</Navbar>
			)

}
};

export default LogIn;
