import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer mt-5">
      <div className="container"> 
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h1>Naz Health Center</h1>
            <h6 className="list-unstyled">
              <li>We Care, We Live</li>
              
            </h6>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Health Services</h4>
            <ui className="list-unstyled">
              <li>Basic Magical Checkup</li>
              <li>Mental Heath consulting</li>
             
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Follow us On</h4>
            <ui className="list-unstyled">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>GitHub</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Naz365 | ©  All rights reserved |
            Terms Of Service || Privacy 2021.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;