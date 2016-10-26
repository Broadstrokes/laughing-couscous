import React, { Component } from 'react';

export default class Dentists extends Component {
  render () {
    return (

      <div className="container-fluid container-dentists">
  
        <div className="page-header">
          <h1>Meet Our Dentists</h1>
        </div>
        
        <div className="container-fluid container-dentists-info">

          <section className="row dentists-section-left">
            <div className="col-md-4">
              <img src="http://www.stephensondds.com/images/eugene%20dentist%20dr.%20bob.jpg" />

            </div>
            <div className="col-md-8">
              <h3>Jui-Feng Yu</h3>
              <h4>D.D.S, General Dentist</h4>
              <hr className="dentist-hr-left"></hr>
              <p>
                  Dr. Jui-Feng (Ray) Yu was born and raised in Taiwan. He attended the prestigious Jianguo High School in Taipei, 
                and proceeded to study dentistry at Kaohsiung Medical University and graduated in 1987. While working in Taipei, 
                he received an offer to attend Northwestern University in Chicago to complete a 3-year Doctor of Dental Surgery 
                program. Graduating in 1994 from NUDS and successfully completing the American NERB and the American NBDE, he 
                then moved to beautiful Vancouver and completed the Canadian NDEB requirements. Since 1998, he’s been practicing 
                general dentistry in Vancouver while holding an active dental license in Illinois. He is passionate about learning 
                and using the newest techniques and biomaterials used in dentistry by attending study clubs of different disciplines. 
              </p>
              <p>
                  He is extremely proud to provide quality dentistry with a smile and a light-hearted attitude. In his spare time, 
                he enjoys watching movies, day hikes, and his wife’s fantastic cooking. He has previously been invited onto 
                Fairchild Radio and Talentvision across multiple years to give Q&As regarding dentistry. Dr. Yu is an active member 
                of the CDA, BCDA, and the CDSBC. 
              </p>
            </div>
          </section>

          <hr></hr>

          <section className="row dentists-section-right">
            <div className="col-md-8">
              <h3>Chi-Cheng Yu</h3>
              <h4>B.Sc, D.M.D, General Dentist</h4>
              <hr className="dentist-hr-right"></hr>
              <p>
                  Dr. Chi-Cheng (Joey) Yu was born in Taiwan and moved to Chicago at the age of 3 when his dad attended NUDS. He then 
                moved to Vancouver and graduated from Lord Byng Secondary in 2006, then studied Chemistry at UBC and received a B.Sc 
                in 2010. He then moved to the east coast to attend Boston University’s Henry M. Goldman School of Dental Medicine for 
                four years and graduated magna cum laude (high honours) and received his DMD degree. In his final year of dental school, 
                he successfully completed the American WREB, granting him licensure access to 16 American states, the American NBDE, 
                and also the Canadian NDEB. 
              </p>
              <p>
                  He enjoys providing welcome care to patients through a friendly and inviting manner. Dr. Joey is an active member of 
                  the CDA, BCDA, CDSBC, and the ADA. On his days off, he enjoys watching Korean dramas, staying “relatively” fit, and 
                  sharing funny moments with family and friends. 
              </p>
            </div>
            <div className="col-md-4">
              <img src="http://kemmetdental.com/wp-content/uploads/2015/11/Dr.Kemmet.jpg" />

            </div>
          </section>

        </div>
      </div>

    );
  }
}
