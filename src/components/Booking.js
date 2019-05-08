import React, {Component} from 'react'
import axios from 'axios'
import BootNav from './BootNav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const SERVER_FLIGHT_URL = 'https://dougmaxi-airlines.herokuapp.com/flights.json'
const SERVER_RESOURCE_URL = 'https://dougmaxi-airlines.herokuapp.com/resources.json'

class Booking extends Component {
	constructor(props){
		super(props);
		this.state = {
			user: this.props.match.params.user,
			flight: {},
			flight_number: this.props.match.params.flight,
		}

		axios.get(SERVER_FLIGHT_URL).then((results) => {
			results.data.forEach( (flight) => {
				if ( flight.flight_number == this.state.flight_number ){
					this.setState({
							flight: flight
						});

				}
			})
		});

	}



	render () {
		return (
			<div>
				<BootNav user={ this.state.user } />
				<br/>
				<h3>{this.state.flight_number}</h3>
				<h5>{this.state.flight.date} \o.o/ {this.state.flight.origin} > {this.state.flight.destination} \o.o/ {this.state.flight.plane_model}</h5>

				<BookingTable user={this.state.user} rows={this.state.flight.rows} flightid={this.state.flight.id} columns={this.state.flight.columns} res={this.state.flight.reservation} />
			</div>
		);
	}
};

class BookingTable extends Component{
	constructor(){
		super()

		this.state = {
			reservations: []
		}

	}


	createGrid(){
    const grid = [];

    for (let i = 1; i <= this.props.rows; i++){

      const column = [];

      for (let j = 0; j < this.props.columns; j++){
				let found = false;

				this.props.res.some( (chair) => {
					if( chair.row === i && chair.column === j + 1 ){
						column.push(<Chair flightid={this.props.flightid} user={this.props.user} key={j} row={i} column={j} owner={chair.name} /> );
						found = true;
						return true;
					}else{
						return false;
					}
				})

				if( !found ){
        	column.push(<Chair flightid={this.props.flightid} user={this.props.user} key={j} row={i} column={j} owner="null"/> );
				}
      }
      grid.push(<Row key={i} >{column}</Row>);
    }

    return grid;
  }

  render(){
    return(
      <div>
        <Container>
          { this.createGrid() }
        </Container>
      </div>
    )
  }
}

class Chair extends Component{
	constructor(props){
		super(props);

		this.state = {
			owner: this.props.owner,
			row: this.props.row,
			column: this.props.column,
			deleteid: -1
		}

		this._selectSeat = this._selectSeat.bind(this);
		this._deselectSeat = this._deselectSeat.bind(this);

	}

	_selectSeat(){
		// const toSubmit = {
			// row: this.state.row,
			// column: this.state.column,
			// user_id: , This needs to be id, can get earleir
			// flight_id: this.props.flightid
		// }

		// axios.post(SERVER_RESOURCE_URL, toSubmit);
		// get id that is returned to destroy them
		this.setState({ owner: this.props.user });
	}

	_deselectSeat(){
//		axios.post(SERVER_RESOURCE_URL, toSubmit);
// axios.delete
		this.setState({ owner: 'null' });
	}

	getLetter(num){
		const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
		return letters[num];
	}

	buttonCheck(){
		if ( this.state.owner === 'null' ){

			return <Button className="chairButton" onClick={this._selectSeat} variant="primary">{this.getLetter(this.state.column)} {this.state.row}</Button>

		}else if( this.state.owner === this.props.user){

			return <Button className="chairButton" onClick={this._deselectSeat} variant="success">{this.state.owner}</Button>

		}else{

			return <Button className="chairButton" variant="danger">{this.state.owner}</Button>

		}
	}

  render(){
		return(
			<div>
				{ this.buttonCheck() }
			</div>
		)
	}
}

export default Booking;
