import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App'
import Main from './components/Landing/Main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/login' component={Login} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);