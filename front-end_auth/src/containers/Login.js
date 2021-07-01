import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login, removeError } from "../actions/auth";
import axios from "axios";
import login_main_image from "../img/Icon/login.jpg";
import fb from "../img/Icon/fb-icon.png";
import google from "../img/Icon/google-icon.png";
import logo from "../img/logo.png";
const Login = ({
  login,
  removeError,
  isAuthenticated,
  isError,
  error_message,
}) => {
  const [redirection, setRedirect] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [login_attempt, setLoginAttempt] = useState(false);
  const [error, setError] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [signup_redirect, setSignUpRedirect] = useState(false);
  const [email_error, setEmailError] = useState(false);
  const [error_email_exist, setErrorEmailExist] = useState("");
  const [empty_password, setEmptyPassword] = useState(false);
  useEffect(() => {
    console.log(isError, error_message);
    if (error_message !== undefined) {
      setErrorEmailExist(error_message["detail"]);
    }
    if (isError) {
      setError(true);

      // console.log('there is an error')
    }
  }, [isError, error]);

  const { email, password } = formData;

  const onChange = (e) => {
    console.log(e.target.value, e.target.name, formData)
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(false);
    setEmailError(false);
    removeError();
    setEmptyPassword(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setLoginAttempt(true);
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(email)) {
      console.log("invalid email");
      setEmailError(true);
    } else if (password === "") {
      setEmptyPassword(true);
    } else {
      login(email, password);
    }
  };

  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  const continueWithFacebook = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_API_URL}/facebook`
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      <div className="container h-100" style={{ marginTop: "100px" }}>
        {redirection ? <Redirect to="/" /> : null}
        {resetPassword ? <Redirect to="/reset-password" /> : null}
        {signup_redirect ? <Redirect to="/signup" /> : null}

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
                      onClick={(e) => setRedirect(true)}
                      style={{ cursor: "pointer" }}
                      alt="Logo Here"
                    />
                  </div>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className="input-field">
                      <label>Email Address</label>
                      <input
                        className="form-controls"
                        style={
                          (error || email_error) &&
                          login_attempt &&
                          error_email_exist !==
                            "No active account found with the given credentials"
                            ? { border: "2px solid red" }
                            : null
                        }
                        // type='email'
                        placeholder="john@xyz.com"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                        // required
                      />
                      <div style={{ display: "inline-block" }}>
                        {email_error && login_attempt ? (
                          <div
                            className="pull-left"
                            style={{ display: "block" }}
                          >
                            <p
                              style={{
                                fontSize: "12px",
                                textAlign: "center",
                                color: "red",
                              }}
                            >
                              Enter a valid email address.
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="input-field" style={{ marginTop: "-15px" }}>
                      <label>Password</label>
                      <input
                        style={
                          (error && login_attempt) || empty_password
                            ? { border: "2px solid red" }
                            : null
                        }
                        className="form-controls"
                        type="password"
                        placeholder="*********"
                        name="password"
                        value={password}
                        onChange={(e) => onChange(e)}
                        // minLength='6'
                        // required
                      />
                    </div>
                    <div style={{ display: "block !important" }}>
                      {empty_password ? (
                        <p
                          style={{
                            fontSize: "12px",
                            textAlign: "left",
                            color: "red",
                          }}
                        >
                          Please enter the password.
                        </p>
                      ) : null}
                      {error && login_attempt && !empty_password ? (
                        <div
                          className="pull-left"
                          style={{ textAlign: "center" }}
                        >
                          {error_email_exist !==
                            "No active account found with the given credentials" &&
                          error_email_exist !==
                            "Please activate your account for login." ? (
                            <p
                              style={{
                                fontSize: "12px",
                                textAlign: "center",
                                color: "red",
                              }}
                            >
                              The email you entered doesn't belong to an
                              account. Please check your login information and
                              try again.
                            </p>
                          ) : error_email_exist ===
                            "Please activate your account for login." ? (
                            <p
                              style={{
                                fontSize: "12px",
                                textAlign: "center",
                                color: "red",
                                display: "block",
                              }}
                            >
                              {error_email_exist}
                            </p>
                          ) : (
                            <p
                              style={{
                                fontSize: "12px",
                                textAlign: "center",
                                color: "red",
                                display: "block",
                              }}
                            >
                              The password that you've entered is incorrect{" "}
                              <span> </span>
                              <a
                                href="#"
                                style={{
                                  textDecoration: "underline",
                                  cursor: "pointer",
                                  color: "#042f54",
                                }}
                                onClick={(e) => setResetPassword(true)}
                              >
                                Forgot password?
                              </a>
                            </p>
                          )}
                        </div>
                      ) : null}
                    </div>
                    <div className="checkbox custom-checkbox pull-left">
                      <label className="label">
                        <input type="checkbox" />
                        <span className="checkbox-decorator">
                          <span className="check"></span>
                        </span>
                        <span
                          style={{ display: "inline-block", marginLeft: "5px" }}
                        >
                          {" "}
                          Remember me
                        </span>
                      </label>
                    </div>

                    <div className="pull-right">
                      <a
                        style={{
                          cursor: "pointer",
                          color: "#042f54",
                        }}
                        onClick={(e) => setResetPassword(true)}
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Login"
                        className="btn btn-info btn-lg btn-block login-btn "
                      />
                    </div>
                    <div className="header-title">
                      <h2>
                        <span className="tile-login">Login With</span>
                      </h2>
                    </div>
                    <div className="social-login-btns">
                      <ul>
                        <li>
                          <a>
                            <img
                              src={fb}
                              style={{ cursor: "pointer" }}
                              alt="Facebook"
                              onClick={continueWithFacebook}
                            />
                          </a>
                        </li>
                        <li>
                          <a>
                            <img
                              src={google}
                              style={{ cursor: "pointer" }}
                              alt="Google"
                              onClick={continueWithGoogle}
                            />
                          </a>
                        </li>
                      </ul>
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
          Don't have an account?<span> </span>
          <a
            href="#"
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "#042f54",
            }}
            onClick={(e) => setSignUpRedirect(true)}
          >
            Sign up
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isError: state.auth.isError,
  error_message: state.auth.error_message,
});

export default connect(mapStateToProps, { login, removeError })(Login);
