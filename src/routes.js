import {Route, Switch} from 'react-router-dom';
import React from 'react';
import Dashboard from './components/Dashboard';


import Wizard from './components/Wizard';


export default (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route path='/wizard' component={Wizard} />
 />
  </Switch>
)