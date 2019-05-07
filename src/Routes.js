import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Search from './components/Search'
import Airplanes from './components/Airplanes'
import Flights from './components/Flights'
import Booking from './components/Booking'

const Routes = (
  <Router>
    <div>
      <Route exact path='/Search' component={ Search } />
      <Route exact path='/Airplanes' component={ Airplanes } />
      <Route exact path='/Flights' component={ Flights } />
      <Route path='/Flight/:name' component={ Booking } />
    </div>
  </Router>
);

export default Routes;
