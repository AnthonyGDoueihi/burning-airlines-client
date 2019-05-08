import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavLink from 'react-bootstrap/NavLink'
import Nav from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';

class Booking extends Component {
	render () {
		return (
			<div>
			<Navbar bg="dark" variant="dark">
		    <NavbarBrand href="#home">Burning Airlines</NavbarBrand>
		    <Nav className="mr-auto">
		      <NavLink href="#Search">Search</NavLink>
		      <NavLink href="#Booking">Booking</NavLink>
		      <NavLink href="#Airplanes">Airplanes</NavLink>
					<NavLink href="#Flights">Flights</NavLink>
		    </Nav>
		  </Navbar>
			</div>
		);
	}
};

export default Booking;
