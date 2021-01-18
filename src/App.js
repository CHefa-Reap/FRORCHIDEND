import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Navigation} from './Components/Navigation';
import {Register} from './Components/Register';
import {Login} from './Components/Login';
import {Home} from './Components/Home';
import OrchidNew from './Components/OrchidNew'
import Customer from './Components/Customer'
import Employee from './Components/Employee'

function App() {
  return (
    <div className ="bgcr">
    <BrowserRouter>
    <Navigation/>
      <div className ="container-fluid">
        <Switch>
          <Route exact path ='/' component = {Home}/>
          <Route exact path ='/register' component = {Register}/>
          <Route exact path = '/login' component = {Login}/>
          <Route exact path = '/orchidnew' component = {OrchidNew}/>
          <Route exact path = '/customer' component = {Customer}/>
          <Route exact path ='/employee' component = {Employee}/>

          

        </Switch>

    </div>
    </BrowserRouter>
    </div>
  )
}

export default App;
