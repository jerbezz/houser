import {Route, Switch} from 'react-router-dom';
import React from 'react';
import Dashboard from './components/Dashboard';
import Wizard from './components/Wizard';
import WizStep2 from './components/WizStep2'
import WizStep3 from './components/WizStep3'


export default (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route exact path='/wizard' component={Wizard} />
    <Route path='/wizard/steptwo' component={WizStep2} />
    <Route path='/wizard/stepthree' component={WizStep3} />

 
  </Switch>
)