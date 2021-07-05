import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password } from "../actions/auth";
import login_main_image from "../img/Icon/login.jpg";
import logo from "../img/logo.jpg";
const ResetPassword = ({ reset_password, is_reset_password }) => {
  useEffect(() => {
    console.log("there is my reset password", is_reset_password);
  }, [is_reset_password]);
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });
  const [email_error, setEmailError] = useState(false);
  const [message, setMessage] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [login, setLogin] = useState(false);
  const { email } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage("");
    setEmailError(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(email)) {
      setEmailError(true);
    } else {
      reset_password(email);

      setMessage(
        "The instruction to reset the password has been emailed to you."
      );
      setFormData({ email: "" });
    }

    // setRequestSent(true);
  };

  if (requestSent) {
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      {redirect ? <Redirect to="/" /> : null}
      {login ? <Redirect to="/login" /> : null}

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
                    height: "100%",
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
                      src={logo}
                      style={{ cursor: "pointer" }}
                      onClick={(e) => setRedirect(true)}
                      alt="Logo Here"
                    />
                  </div>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <strong style={{ color: "#042f54" }}>
                      {" "}
                      Forgot Password
                    </strong>
                    <div className="input-field">
                      <label>Email Address</label>
                      <input
                        style={email_error ? { border: "2px solid red" } : null}
                        className="form-controls"
                        // type='email'
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    {email_error ? (
                      <div>
                        <p style={{ color: "red", fontSize: "10px" }}>
                          Please enter the valid email address.
                        </p>
                      </div>
                    ) : null}
                    <div>
                      {message !== "" ? (
                        <p
                          style={{
                            fontSize: "10px",
                            textAlign: "center",
                            color: "black",
                          }}
                        >
                          The instructions to reset the password have been
                          emailed to you.{" "}
                        </p>
                      ) : null}
                    </div>
                    {/* <div>
                                        <p style={{fontSize:'10px',color:'green'}}>Make sure you provided the registered email address</p>
                                    </div> */}
                    <div className="form-group mt-3 btn_inline">
                      <button
                        type="submit"
                        className="btn btn-info btn-lg btn-block login-btn "
                      >
                        Forgot Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Already registered? Please <span> </span>
          <a
            href="#"
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "#042f54",
            }}
            onClick={(e) => setLogin(true)}
          >
            Login
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  is_reset_password: state.auth.is_reset_password,
});

export default connect(mapStateToProps, { reset_password })(ResetPassword);
// export default connect(mapStateToProps, { login,removeError })(Login);
