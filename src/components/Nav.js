import React, {Component} from 'react'
import axios from 'axios'
import './ham.css'

class Nav extends Component {
	constructor() {
		super();
	};

	burgerToggle() {
  let linksEl = document.querySelector('.narrowLinks');
  if (linksEl.style.display === 'block') {
            linksEl.style.display = 'none';
        } else {
            linksEl.style.display = 'block';
        }
}

	render () {
		return (
			<nav>
			  <div>
			      <div>
			          <a href="#" onClick={this.burgerToggle}>
								<svg class="ham hamRotate ham1"
								viewBox="0 0 100 100"
								width="80"
								onclick="this.classList.toggle('active')">
								<path
        				class="line top"
        				d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
								</svg>
								</a>
			        </div>
			    </div>
			    <div>
			        <div className="narrowLinks">
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
