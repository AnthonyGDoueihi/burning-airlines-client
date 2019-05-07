import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Search from './components/Search'
import Airplanes from './components/Airplanes'
import Flights from './components/Flights'
import Booking from './components/Booking'

const Routes = (
  <Router>
    <div>
      <Route exact path='/' component={ Search } />
      <Route exact path='/airplanes' component={ Airplanes } />
      <Route exact path='/flights' component={ Flights } />
      <Route path='/flight/:name' component={ Booking } />
    </div>
  </Router>
);

export default Routes;
