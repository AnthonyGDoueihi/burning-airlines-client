import React, { Component } from 'react'
import LogIn from './LogIn'
import '../index.css'

class Home extends Component{
  render(){
    return(
      <div className="loginBackground">
				<LogIn />
      </div>
    )
  }
}

export default Home
