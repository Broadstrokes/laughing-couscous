import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (

      <div className="container-fluid container-home">

        <div className="home-header">

          <div className="row">

            <div className="col-md-4">
              <i className="fa fa-map-marker"></i>
              <p><span>#115-809 West 41st Ave.</span> Vancouver, B.C. V5Z 2N6</p>
            </div>

            <div className="col-md-4">
              <img src="/img/yu_icon3_cropped.jpg" className="home-logo" alt="MC2 Dentistry"></img>
            </div>

            <div className="col-md-4">
              <i className="fa fa-phone"></i>
              <p>(604) 266 - 8602<span className="fax-number">Fax: (604) 266 - 8670</span></p>
            </div>

          </div>

        </div>

        <div className="home-banner">

          <img src="http://wallstdentalspanyc.com/wp-content/uploads/section-dental-chair1-1500x500.jpg" className="home-pic" />

        </div>

        <div className="container-fluid container-home-info">

              <h1>Welcome to MC2 Dental Clinic</h1>
              <hr className="hr-home"></hr>
              <p>
                  Welcome to MC2 Dental Clinic. We are committed to providing comprehensive oral care to our patients while upholding outstanding ethics. 
                We have been providing dental services in the Greater Vancouver Region since 1998. Our office is conveniently located at 
                809 West 41st Ave in Vancouver with easy transit and parking access.
                Our mission statement is to provide individualized, patient-centered, exceptional care using the latest technologies 
                in order to improve the overall health and well-being of our patients. We are also dedicated to continuous education in order 
                to provide the best treatment options and techniques for our patients.
              </p>

        </div>

      </div>
    );
  }
}
