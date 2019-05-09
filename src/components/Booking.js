import React, {Component} from 'react'
import axios from 'axios'
import BootNav from './BootNav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const SERVER_FLIGHT_URL = 'https://dougmaxi-airlines.herokuapp.com/flights.json'
const SERVER_RESERVATION_URL = 'https://dougmaxi-airlines.herokuapp.com/reservations.json'
const SERVER_USER_URL = 'https://dougmaxi-airlines.herokuapp.com/users.json'

class Booking extends Component {
	constructor(props){
		super(props);
		this.state = {
			user: this.props.match.params.user,
			flight: {},
			flight_number: this.props.match.params.flight,
			counter: 0
		}


		const fetchFlightInfo = () => {
			axios.get(SERVER_FLIGHT_URL).then((results) => {
				results.data.forEach( (flight) => {
					if ( flight.flight_number == this.state.flight_number ){
						this.setState({
								flight: flight,
								counter: this.state.counter + 1
							});
						}
					});
					setTimeout(fetchFlightInfo, 500);
				});
		}

		fetchFlightInfo();

	}

	render () {
		return (
			<div>
				<BootNav user={ this.state.user } />
				<br/>
				<h3>{this.state.flight_number}</h3>
				<h5>{this.state.flight.date} &nbsp;&nbsp;&nbsp; {this.state.flight.origin} > {this.state.flight.destination} &nbsp;&nbsp;&nbsp; {this.state.flight.plane_model}</h5>

				<BookingTable user={this.state.user} rows={this.state.flight.rows} flightid={this.state.flight.id} columns={this.state.flight.columns} res={this.state.flight.reservation} counter={this.state.counter}/>
			</div>
		);
	}
};

class BookingTable extends Component{
	constructor(props){
		super(props)

		this.state = {
			reservations: [],
			user_id: -1
		}

		axios.get(SERVER_USER_URL).then((results) => {
			results.data.some ( (user) => {
				if ( user.name === this.props.user ){
					this.setState({ user_id: user.id });
					return true;
				}else{
					return false;
				}
			})
		})


	}


	createGrid(){
    const grid = [];

    for (let i = 1; i <= this.props.rows; i++){

      const column = [];

      for (let j = 0; j < this.props.columns; j++){
				let found = false;

				this.props.res.some( (chair) => {

					if( chair.row === i && chair.column === j + 1 ){
						column.push(<Chair flightid={this.props.flightid} user={this.props.user} key={j} row={i} column={j + 1} owner={chair.name} userid={this.state.user_id} deleteid={chair.id}/> );

						found = true;
						return true;

					}else{
						return false;
					}
				})

				if( !found ){
        	column.push(<Chair flightid={this.props.flightid} user={this.props.user} key={j} row={i} column={j + 1} owner="null" userid={this.state.user_id} deleteid='-1'/> );
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
			row: this.props.row,
			column: this.props.column,
			deleteid: this.props.deleteid
		}

		this._selectSeat = this._selectSeat.bind(this);
		this._deselectSeat = this._deselectSeat.bind(this);

	}

	_selectSeat(){
		const toSubmit = {
			row: this.state.row,
			column: this.state.column,
			user_id: this.props.userid,
			flight_id: this.props.flightid
		}

		axios.post(SERVER_RESERVATION_URL, toSubmit).then( (result) => {
			this.setState({
				owner: this.props.user,
		 		deleteid: result.data.id
			})
		});
	}

	_deselectSeat(){

		axios.delete(`https://dougmaxi-airlines.herokuapp.com/reservations/${this.state.deleteid}.json`).then( (result) => {
			console.log(result);
			this.setState({
				owner: 'null',
				deleteid: -1
			});
		})
	}

	getLetter(num){
		const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
		return letters[num - 1];
	}

	buttonCheck(){
		if ( this.props.owner === 'null' ){

			return <Button className="chairButton" onClick={this._selectSeat} variant="primary">{this.getLetter(this.state.column)} {this.state.row}</Button>

		}else if( this.props.owner === this.props.user){

			return <Button className="chairButton" onClick={this._deselectSeat} variant="success">{this.props.owner}</Button>

		}else{

			return <Button className="chairButton" variant="danger">{this.props.owner}</Button>

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
