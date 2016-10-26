import React, { Component } from 'react';
import { IndexLink } from 'react-router'
import NavLink from './NavLink'

export default class Footer extends Component {
  render() {
    return (

      <footer className="footer-distributed">

        <div className="footer-left">

          <a className="footer-logo"><IndexLink to="/"><img src="/img/yu_icon3_cropped.jpg" alt="MC2 Dentistry"></img></IndexLink></a>

          <p className="footer-links">
            <IndexLink to="/">Home</IndexLink>
            · 
            <NavLink to="/dentists">Our Dentists</NavLink>
            · 
            <NavLink to="/services">Services</NavLink>
            · 
            <NavLink to="/patient">Patient Info</NavLink>
            · 
            <NavLink to="/contact">Contact Us</NavLink>
          </p>

          <p className="footer-company-name">MC2 Dental &copy; 2016</p>
        </div>

        <div className="footer-center">

          <div>
            <i className="fa fa-map-marker"></i>
            <p><span>#115-809 West 41st Ave.</span> Vancouver, B.C. V5Z 2N6</p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p className="footer-phone">(604) 266 - 8602<span className="fax-number">Fax: (604) 266 - 8670</span></p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:support@mc2dental.com">support@mc2dental.com</a></p>
          </div>

        </div>

        <div className="footer-right">

          <div className="footer-hours">
                
                    <div className="clinic-hours">
                      <h3>Clinic Hours</h3>

                      <ul>
                        <li><span className="hours-day">Monday</span> <span className="hours-time">9:30 am - 6:00 pm</span></li>
                        <li><span className="hours-day">Tuesday</span> <span className="hours-time">9:30 am - 6:00 pm</span></li>
                        <li><span className="hours-day">Wednesday</span> <span className="hours-time">9:30 am - 6:00 pm</span></li>
                        <li><span className="hours-day">Thursday</span> <span className="hours-time">CLOSED</span></li>
                        <li><span className="hours-day">Friday</span> <span className="hours-time">9:30 am - 6:00 pm</span></li>
                        <li><span className="hours-day">Saturday</span> <span className="hours-time">9:30 am - 6:00 pm</span></li>
                        <li><span className="hours-day">Sunday</span> <span className="hours-time">CLOSED</span></li>
                      </ul>
                    </div>

                  </div>

          <div className="footer-icons">

          </div>

        </div>

      </footer>
      );
  }
}