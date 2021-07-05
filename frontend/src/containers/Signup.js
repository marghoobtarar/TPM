import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../actions/auth";
import axios from "axios";

import login_main_image from "../img/Icon/login.jpg";
import fb from "../img/Icon/fb-icon.png";
import google from "../img/Icon/google-icon.png";
import logo from "../img/logo.jpg";
// import '../build/css/demo.css'
// import '../build/css/intlTelInput.css'
// import '../build/js/intlTelInput'
// import '../build/js/utils'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Signup = ({ signup, isAuthenticated, isError }) => {
  const [error_signup, setErrorSignup] = useState(false);
  const [redirection, setRedirect] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const [process, setProcess] = useState(false);
  const [email_error, setEmailError] = useState(false);
  const [terms, setTerms] = useState(false);
  const [terms_error, setTermsError] = useState(false);
  const [submit_attempt, setSubmitAttempt] = useState(false);
  const [cell, setCell] = useState("");
  const [username_err, setUserNameErr] = useState(false);
  const [email_none_error, setEmailNoneError] = useState(false);
  const [error, setError] = useState(false);
  const [re_pass_error, setRePassError] = useState(false);
  const [error_message, setErrorMessage] = useState("");
  useEffect(() => {
    if (isError) {
      setErrorSignup(true);
      // alert(isError['password'], isError['email'])
      if (isError["password"]) {
        // alert(isError['password'])
        if (isError["password"].length > 0) {
          setRePassError(true);
          setErrorMessage(isError["password"][0]);
          // console.log('there is an error',isError['password'])
        }
      }
      if (isError["email"]) {
        // alert(isError['email'])

        if (isError["email"].length > 0) {
          setEmailError(true);
          setErrorMessage(isError["email"][0]);
          // console.log('there is an error',isError['email'])
        }
      }
    } else if (isError === undefined) {
      setErrorSignup(false);
    } else if (isError === false && process === true) {
      setAccountCreated(true);
      // alert('The activation link has been sent at your email.')
    }
  }, [isError]);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
    cell_number: "",
  });

  const { first_name, last_name, email, password, re_password, cell_number } =
    formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setRePassError(false);
    setError(false);
    setEmailError(false);
    setTermsError(false);
    setUserNameErr(false);
    setEmailNoneError(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, ["cell_number"]: cell });

    setSubmitAttempt(true);
    if (first_name === "") {
      setUserNameErr(true);
    } else if (email === "") {
      setEmailNoneError(true);
    } else if (password === re_password && password === "") {
      setRePassError(true);
      setErrorMessage("Please enter the password.");
    } else if (password !== re_password) {
      setRePassError(true);
      setErrorMessage("Passwords do not match.");
    } else if (!terms) {
      setTermsError(true);
    } else if (password === re_password && password !== "") {
      signup(first_name, last_name, email, password, re_password, cell_number);
      setProcess(true);
    } else {
      setRePassError(true);
      setErrorMessage("Passwords do not match.");
    }
  };
  const termsChange = (e) => {
    setTermsError(false);
    setTerms(!terms);
  };
  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `https://ubuntu.anms.pk/auth/o/google-oauth2/?redirect_uri=https://ubuntu.anms.pk/google`
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {
      console.log(err);
    }
  };

  const continueWithFacebook = async () => {
    try {
      const res = await axios.get(
        `https://ubuntu.anms.pk/auth/o/facebook/?redirect_uri=https://ubuntu.anms.pk/facebook`
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {
      console.log(err);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  if (accountCreated) {
    return <Redirect to="/login" />;
  }

  return (
    <React.Fragment>
      {/* <div className='container mt-5'>
            <h1>Sign Up</h1>
            <p>Create your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='First Name*'
                        name='first_name'
                        value={first_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Last Name*'
                        name='last_name'
                        value={last_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email*'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password*'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Confirm Password*'
                        name='re_password'
                        value={re_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Register</button>
            </form>
            <button className='btn btn-danger mt-3' onClick={continueWithGoogle}>
                Continue With Google
            </button>
            <br />
            <button className='btn btn-primary mt-3' onClick={continueWithFacebook}>
                Continue With Facebook
            </button>
            <p className='mt-3'>
                Already have an account? <Link to='/login'>Sign In</Link>
            </p>
        </div>
        */}

      <div className="container h-100" style={{ marginTop: "70px" }}>
        {redirection ? <Redirect to="/" /> : null}
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
                      onClick={(e) => setRedirect(true)}
                      src={logo}
                      style={{ cursor: "pointer" }}
                      alt="Logo Here"
                    />
                  </div>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className="input-field">
                      <label>Full Name</label>
                      <input
                        style={
                          username_err && submit_attempt
                            ? { border: "2px solid red" }
                            : null
                        }
                        className="form-controls"
                        type="text"
                        placeholder="John Smith"
                        name="first_name"
                        value={first_name}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    {username_err && submit_attempt ? (
                      <div>
                        <p style={{ color: "red", fontSize: "10px" }}>
                          Please enter the Full Name.
                        </p>
                      </div>
                    ) : null}

                    <div className="input-field">
                      <label>phone Number(optional)</label>
                      {/* <input
                        className='form-controls'
                        type='text'
                        placeholder='+10000000000'
                        name='cell_number'
                        value={cell_number}
                        onChange={e => onChange(e)}
                        
                    /> */}
                      <PhoneInput
                        className="outline_none"
                        name="cell_number"
                        inputExtraProps={{
                          name: "cell_number",
                          required: false,
                          autoFocus: false,
                          placeholder: "#####",
                        }}
                        country={"us"}
                        value={cell}
                        onChange={(e) => setCell(e)}
                      />
                    </div>
                    <div className="input-field">
                      <label>Email Address</label>
                      <input
                        style={
                          email_error && submit_attempt
                            ? { border: "2px solid red" }
                            : null
                        }
                        className="form-controls"
                        // type='email'
                        placeholder="john@xyz.com"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                        // required
                      />
                    </div>
                    {email_none_error && submit_attempt ? (
                      <div>
                        <p style={{ color: "red", fontSize: "10px" }}>
                          Please enter the email address.
                        </p>
                      </div>
                    ) : null}
                    {email_error && submit_attempt ? (
                      <div>
                        <p style={{ color: "red", fontSize: "10px" }}>
                          {error_message === "Enter a valid email address." ? (
                            <React.Fragment>Enter a valid email address.</React.Fragment>
                          ) : (
                            <React.Fragment>
                              User email already exists. Please{" "}
                              <a
                                style={{ cursor: "pointer", color: "#042f54" }}
                                onClick={(e) => setAccountCreated(true)}
                              >
                                {" "}
                                Login{" "}
                              </a>{" "}
                              to continue.
                            </React.Fragment>
                          )}
                        </p>
                      </div>
                    ) : null}
                    <div className="input-field">
                      <label>Password</label>
                      <input
                        style={
                          re_pass_error && submit_attempt
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
                      />{" "}
                    </div>
                    <div className="input-field">
                      <label>Confirm Password</label>
                      <input
                        style={
                          re_pass_error && submit_attempt
                            ? { border: "2px solid red" }
                            : null
                        }
                        className="form-controls"
                        type="password"
                        placeholder="*********"
                        name="re_password"
                        value={re_password}
                        onChange={(e) => onChange(e)}
                        // minLength='6'
                      />
                    </div>
                    {re_pass_error && submit_attempt ? (
                      <div>
                        <p style={{ color: "red", fontSize: "10px" }}>
                          {error_message === "This field may not be blank." ? (
                            <React.Fragment>This field cannot be empty.</React.Fragment>
                          ) : (
                            error_message
                          )}
                        </p>
                      </div>
                    ) : null}
                    <div className="checkbox custom-checkbox pull-left">
                      <label>
                        <input type="checkbox" onClick={(e) => termsChange()} />
                        <span className="checkbox-decorator">
                          <span className="check"></span>
                        </span>
                        <span
                          className="font-14"
                          style={{ display: "inline-block", marginLeft: "5px" }}
                        >
                          I accept the <span> </span>
                          <a
                            href={`https://ubuntu.anms.pk/terms`}
                            target="_blank"
                            style={{
                              cursor: "pointer",
                              color: "#042f54",
                              textDecoration: "underline",
                            }}
                          >
                            terms of use
                          </a>{" "}
                          and <span> </span>
                          <a
                            href={`https://ubuntu.anms.pk/privacy_policy`}
                            target="_blank"
                            style={{
                              cursor: "pointer",
                              color: "#042f54",
                              textDecoration: "underline",
                            }}
                          >
                            privacy policy
                          </a>
                        </span>
                      </label>
                    </div>

                    {terms_error && submit_attempt ? (
                      <div>
                        <p
                          style={{
                            color: "red",
                            fontSize: "10px",
                            display: "inline-block",
                          }}
                        >
                          Please accept Terms and Conditions to continue
                        </p>
                      </div>
                    ) : null}

                    <div className="form-group btn_inline">
                      <button className="btn btn-info btn-lg btn-block login-btn ">
                        Sign Up
                      </button>
                    </div>
                    <div className="header-title">
                      <h2>
                        <span className="tile-login">Signup With</span>
                      </h2>
                    </div>
                    <div className="social-login-btns">
                      <ul>
                        <li>
                          <a>
                            <img
                              src={fb}
                              style={{ cursor: "pointer" }}
                              onClick={continueWithFacebook}
                              alt="Facebook"
                            />
                          </a>
                        </li>
                        <li>
                          <a>
                            <img
                              src={google}
                              style={{ cursor: "pointer" }}
                              onClick={continueWithGoogle}
                              alt="Google"
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
          Already have an account? <span> </span>
          <a
            href="#"
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "#042f54",
            }}
            onClick={(e) => setAccountCreated(true)}
          >
            Login
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isError: state.auth.isError,
});

export default connect(mapStateToProps, { signup })(Signup);
