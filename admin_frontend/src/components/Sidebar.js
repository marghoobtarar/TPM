import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import logo from "../img/logo.jpg";

const Sidebar = ({ logout, isAuthenticated }) => {
  const [redirect, setRedirect] = useState(false);

  return (
    <div className="left side-menu"  style={{overflowY:'scroll'}}>
      {redirect ? <Redirect to="/logout" /> : null}

      <div className="slimscroll-menu">
        <div className="topbar-left">
          <a href="index.html" className="logo">
            <span>
              <img src={logo} alt="" height="60" />
            </span>
            <i>
              <img src={logo} alt="" height="70" />
            </i>
          </a>
        </div>

        <div className="user-box">
          {/* <div className="user-img">
                <img src={logo} alt="user-img" title="Mat Helme" className="rounded-circle img-fluid"/>
            </div> */}
          <h5>
            <a href="#">TPM Solutions</a>{" "}
          </h5>
          <p className="text-muted">Admin Head</p>
        </div>

        <div id="sidebar-menu" 
          >
          <ul className="metismenu" id="side-menu">
            <li>
              <Link to="/">
                <a>
                  <i className="fi-air-play"></i> <span> Dashboard </span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/landing_page">
                <a>
                  <i className="dripicons-archive"></i> <span>Landing Page</span>{" "}
                </a>
              </Link>
            </li>
            <li>
              <Link to="/about_us">
                <a>
                  <i className="fi-layers"></i> <span> About Us </span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/privacy_policy">
                <a>
                  <i className="fi-layout"></i> <span> Privacy policy </span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/terms">
                <a>
                  <i className="fi-command"></i> <span> Terms of use </span>
                </a>
              </Link>
            </li>

            {/* <li>
              <Link to="/setting">
                <a>
                  <i className="fi-cog"></i> <span>Settings</span>{" "}
                </a>
              </Link>
            </li> */}
            {/* <li>
              <Link to="/blog">
                <a>
                  <i className="dripicons-align-justify"></i> <span>Blogs</span>{" "}
                </a>
              </Link>
            </li> */}
            {/* <li>
              <Link to="/data_methodology">
                <a>
                  <i className="dripicons-archive"></i> <span>Data Methodology</span>{" "}
                </a>
              </Link>
            </li> */}
            {/* <li>
              <Link to="/website_overview">
                <a>
                  <i className="dripicons-device-desktop"></i> <span>Website Overview</span>{" "}
                </a>
              </Link>
            </li> */}
            <li>
              <Link to="/faqs">
                <a>
                  <i className="dripicons-document-new"></i> <span>FAQs</span>{" "}
                </a>
              </Link>
            </li>

            <li>
              <Link to="/payment">
                <a>
                  <i className="dripicons-jewel"></i> <span>Packages</span>{" "}
                </a>
              </Link>
            </li>
            
          </ul>
        </div>

        <div className="clearfix"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Sidebar);
