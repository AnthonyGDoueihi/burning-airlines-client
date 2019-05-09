import React, { Component } from 'react'
import LogIn from './LogIn'
import '../index.css'
import logo from '../assets/burning-airlines.gif'

class Home extends Component{
  render(){
    return(
      <div className="loginBackground">
				<LogIn />
				<img src={logo} alt="Burning Airlines"/>
				<img src={logo} alt="Burning Airlines"/>
				<img src={logo} alt="Burning Airlines"/>
				<img src={logo} alt="Burning Airlines"/>
      </div>
    )
  }
}

export default Home
