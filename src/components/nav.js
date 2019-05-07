import React, {Component} from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom';

class Nav extends Component {
	render () {
		return (
			<nav>
			  <div className="navWide">
			      <div className="wideDiv">
			          <a href="#">Link 1</a>
			          <a href="#">Link 2</a>
			          <a href="#">Link 3</a>
			        </div>
			    </div>
			    <div className="navNarrow">
			      <i className="fa fa-bars fa-2x"></i>
			        <div className="narrowLinks">
			            <a href="#">Link 1</a>
			            <a href="#">Link 2</a>
			            <a href="#">Link 3</a>
			        </div>
			  </div>
			</nav>
		)
	}
};
// ReactDOM.render(<NavComponent />, document.querySelector('navbar'));




export default Nav;
