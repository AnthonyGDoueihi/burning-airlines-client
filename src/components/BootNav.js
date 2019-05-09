import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavLink from 'react-bootstrap/NavLink'
import Nav from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios'

const SERVER_USER_URL = 'https://dougmaxi-airlines.herokuapp.com/users.json'

class BootNav extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: []
		}

		const getUsers = () => {
			axios.get(SERVER_USER_URL).then( (results) => {
				this.setState( {
					users: results.data,
				 } );

				if( this.props.checkAdmin ){
					let admins = [];

					results.data.forEach( (user) => {
						if (user.admin){
							admins.push(user.name);
						}
					})

					if( admins.indexOf(this.props.user) === -1 ){
						this.props.checkAdmin(false);
					}else{
						this.props.checkAdmin(true);
					}

				}


			});
		};

		getUsers();

	};

	render () {
			return (
				<Navbar bg="dark" variant="dark">
					<NavbarBrand href="#">Burning Airlines</NavbarBrand>
					<Nav className="mr-auto">
						<NavLink href={ `#/${ this.props.user }/Search` }>Search</NavLink>
						<NavLink href={ `#/${ this.props.user }/Airplanes` }>Airplanes</NavLink>
						<NavLink href={ `#/${ this.props.user }/Flights` }>Flights</NavLink>
					</Nav>
					<h3 className="username">{ this.props.user }</h3>
					<NavDropdown title="Change User" id="collasible-nav-dropdown">
					 {this.state.users.map( (u) => <NavDropdown.Item key={ u.id } href={ `#/${ u.name }` } users={ u.name }>{ u.name } </NavDropdown.Item>
					)}

				</NavDropdown>
				</Navbar>
			)
		}
};

export default BootNav;
