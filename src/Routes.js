import React from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Home from './components/Home'
import Search from './components/Search'
import Airplanes from './components/Airplanes'
import Flights from './components/Flights'
import Booking from './components/Booking'

const Routes = (
  <Router>
    <div>
      <Route exact path='/' component={ Home } />
      <Route path='/:user/Airplanes' component={ Airplanes } />
      <Route path='/:user/Flights' component={ Flights } />
      <Route path='/:user/Flight/:flight' component={ Booking } />
      <Switch>
        <Route path='/:user/Search' component={ Search } />
        <Redirect from='/:user' to='/:user/Search' />
      </Switch>
    </div>
  </Router>
);

export default Routes;
