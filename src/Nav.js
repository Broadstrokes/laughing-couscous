import React, { Component } from 'react'
import { IndexLink } from 'react-router'
import NavLink from './NavLink'

export default class Nav extends Component {
  render() {
    return (
      <nav id="mainnav" className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid container-nav">
      <div className="navbar-header">

        <a className="navbar-brand"><IndexLink to="/"><img src="/img/yu_icon4.jpg" alt="MC2 Dentistry" className="nav-logo"></img></IndexLink></a>

      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav" role="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><NavLink to="/dentists">Our Dentists</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/patient">Patient Info</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
      </div>
    </div>
  </nav>
    )
  }
}