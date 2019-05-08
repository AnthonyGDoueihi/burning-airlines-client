import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import Search from './components/Search'
import Airplanes from './components/Airplanes'
import Flights from './components/Flights'
import Booking from './components/Booking'

const Routes = (
  <Router>
    <div>
      <Route exact path='/' component={ Home } />
      <Route path='/:users/Search' component={ Search } />
      <Route path='/:users/Airplanes' component={ Airplanes } />
      <Route path='/:users/Flights' component={ Flights } />
      <Route path='/:users/Flight/:name' component={ Booking } />
    </div>
  </Router>
);

export default Routes;
