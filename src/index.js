import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App';
import './index.css';
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import Dentists from './Dentists'
import Services from './Services'
import Patient from './Patient'
import Contact from './Contact'

render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/dentists" component={Dentists}/>
      <Route path="/services" component={Services}/>
      <Route path="/patient" component={Patient}/>
      <Route path="/contact" component={Contact}/>
   </Route>
  </Router>,
  document.getElementById('root')
);
