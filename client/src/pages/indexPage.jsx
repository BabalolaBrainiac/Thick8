import React, { Component } from 'react';
import Navigation from '../components/navigation/navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './navbar/home';
import Signup from './navbar/signup';
import Login from './navbar/login';
import How from './navbar/how'

function IndexNav() {
    return (
        <Router>
            <Navigation/>
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/how' exact component={How} />
            <Route path='/signup' exact component={Signup} />
            <Route path='/login' exact component={Login} />
            </Switch>
        </Router>
    )
}


export default IndexNav;  