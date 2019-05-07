import React, {Component} from 'react'
import axios from 'axios'

class Nav extends Component {
	constructor() {
		super();
	};

	burgerToggle() {
  let linksEl = document.querySelector('.narrowLinks');
  if (linksEl.style.display === 'none') {
            linksEl.style.display = 'block';
        } else {
            linksEl.style.display = 'none';
        }
}

	render () {
		return (
			<nav>
			  <div>
			      <div>
			          <a href="#" onClick={this.burgerToggle}>MENU</a>
			        </div>
			    </div>
			    <div>
			        <div className="narrowLinks" style={{display: 'none'}}>
			           <a href="./Search" onClick={this.burgerToggle}>Search</a>
										<br/>
			            <span><a href="./Flights" onClick={this.burgerToggle}>Flights</a></span>
										<br/>
			            <a href="./Booking" onClick={this.burgerToggle}>Booking</a>
										<br/>
								  <a href="./Airplanes" onClick={this.burgerToggle}>Airplanes</a>
			        </div>
			  </div>
			</nav>
		)
	}
};

export default Nav;
