import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { verify } from "../actions/auth";

import login_main_image from "../img/Icon/login.jpg";
import logo from "../img/logo.jpg";
const Activate = ({ verify, match }) => {
  const [verified, setVerified] = useState(false);

  const verify_account = (e) => {
    const uid = match.params.uid;
    const token = match.params.token;

    verify(uid, token);
    setVerified(true);
  };

  if (verified) {
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      {/* <div className='container'>
            <div 
                className='d-flex flex-column justify-content-center align-items-center'
                style={{ marginTop: '200px' }}
            >
                <h1>Verify your Account:</h1>
                <button
                    onClick={verify_account}
                    style={{ marginTop: '50px' }}
                    type='button'
                    className='btn btn-primary'
                >
                    Verify
                </button>
            </div>
        </div> */}

      <div className="container h-100" style={{ marginTop: "100px" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="login-panel">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div
                  className="login-banner"
                  style={{
                    backgroundImage: `url(${login_main_image})`,
                    backgroundRepeat: "no-repeat",
                    height: "400px",
                    borderRadius: "20px 0 0 20px",
                    background: "cover",
                    backgroundPosition: "right",
                  }}
                ></div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="login-form">
                  <div className="login-logo">
                    <img
                      style={{ cursor: "pointer" }}
                      src={logo}
                      alt="Logo Here"
                    />
                  </div>

                  <div
                    className="form-group btn_inline"
                    style={{ marginTop: "90px", textAlign: "center" }}
                  >
                    <p style={{ textAlign: "center", marginTop: "5px" }}>
                      Please click on the button to verify your account and
                      perform login!
                    </p>

                    <button
                      onClick={verify_account}
                      className="btn btn-info btn-lg btn-block login-btn "
                    >
                      Verify
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default connect(null, { verify })(Activate);
