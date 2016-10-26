import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (

    <section className="container-fluid container-outer">

      <div className="page-header">
          <h1>Contact Us</h1>
        </div>

      <div className="container-fluid container-contact-top">
        <div className="row">

          <div className="col-md-5">

            <h3>We'd love to hear from you!</h3>

            <hr></hr>

            <h3>Call us: (604) 266 - 8602 </h3>
            <br></br>
            <h4><strong>MC2 Dental Clinic</strong></h4>
            <hr className="hr-services"></hr>
            <p>#115-809 West 41st Ave.</p>
            <p>Vancouver, B.C. V5Z 2N6</p>
            <br></br>
            <div className="contact-hours">
              <h4><strong>Clinic Hours</strong></h4>
                <hr className="hr-services"></hr>
                  <ul>
                    <li><span>Monday:</span> 9:30 am - 6:00 pm</li>
                    <li><span>Tuesday:</span> 9:30 am - 6:00 pm</li>
                    <li><span>Wednesday:</span> 9:30 am - 6:00 pm</li>
                    <li><span>Thursday:</span> CLOSED</li>
                    <li><span>Friday:</span> 9:30 am - 6:00 pm</li>
                    <li><span>Saturday:</span> 9:30 am - 6:00 pm</li>
                    <li><span>Sunday:</span> CLOSED</li>
                  </ul>
            </div>

          </div>

          <div className="col-md-7">

            <h3>Or send us a message!</h3>

            <hr></hr>

            <form id="contact-form" method="post" action="contact.php" role="form">

              <div className="messages"></div>

              <div className="controls">

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_name">First name *</label>
                      <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your first name" required="required" data-error="First name is required."></input>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_lastname">Last name *</label>
                      <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your last name" required="required" data-error="Last name is required."></input>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_email">Email *</label>
                      <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email" required="required" data-error="Valid email is required."></input>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_phone">Phone</label>
                      <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Please enter your phone number"></input>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="form_message">Message *</label>
                      <textarea id="form_message" name="message" className="form-control" placeholder="Please enter a message" rows="4" required="required" data-error="Please leave us a message."></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <input type="submit" className="btn btn-send" value="Send message"></input>
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-md-12">
                    <p className="text-muted"><strong>*</strong> These fields are required.</p>
                  </div>
                </div>
              </div>

            </form>

          </div>

        </div>
      </div>


      <div className="map-overlay" onClick="style.pointerEvents='none'"></div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.230407141898!2d-123.12650304848933!3d49.23412067922456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548674784b15bc01%3A0xae34069b5daad2f9!2sYu+Jui-Feng+Dr!5e0!3m2!1sen!2sus!4v1472004274023" 
      width="100%" height="500" frameBorder="0" styles="border:0" allowFullScreen></iframe>

    </section>

    );
  }
}
