import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login, removeError } from "../actions/auth";
import login_main_image from "../img/Icon/login.jpg";
import logo from "../img/logo.jpg";
const Login = ({ login, removeError, isAuthenticated, isError }) => {
  const [didSubmit, setDidSubmit] = useState(false);
  const [email_err, setEmailErr] = useState(false);
  const [pass_err, setPassErr] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  useEffect(() => {
    if (isError) {
      setError(true);
    }
  }, [isError, error]);

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(false);
    removeError();
    setEmailErr(false);
    setPassErr(false);
  };

  const onSubmit = (e) => {
    setDidSubmit(true);
    e.preventDefault();
    if (email === "") {
      setEmailErr(true);
    } else if (password === "") {
      setPassErr(true);
    }
    if (email !== "" && password !== "") {
      login(email, password);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/Home" />;
  }

  return (
    <div>
      <div
        class="accountbg"
        style={{
          background: `url(${login_main_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div class="wrapper-page account-page-full">
        <div class="card">
          <div class="card-block">
            <div class="account-box">
              <div class="card-box p-5">
                <h2 class="text-uppercase text-center pb-4">
                  <a href="index.html" class="text-success">
                    <span>
                      <img src={logo} alt="" height="90" />
                    </span>
                  </a>
                </h2>

                <form onSubmit={(e) => onSubmit(e)}>
                  <div class="form-group m-b-20 row">
                    <div class="col-12">
                      <label for="emailaddress">Email address</label>
                      {/* <input class="form-control"
                                 type="email" 
                                 id="emailaddress"
                                  required="" 
                                  placeholder="Enter your email"/> */}

                      <input
                        className="form-control"
                        style={
                          error || (email_err && didSubmit)
                            ? { border: "2px solid red" }
                            : null
                        }
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>
                  <div class="form-group row m-b-20">
                    <div class="col-12">
                      <div>
                        {email_err && didSubmit ? (
                          <div className="pull-left">
                            <p
                              style={{
                                fontSize: "10px",
                                textAlign: "center",
                                color: "red",
                              }}
                            >
                              {" "}
                              Please enter the email address.{" "}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div class="form-group row m-b-20">
                    <div class="col-12">
                      {/* <a href="page-recoverpw.html" class="text-muted float-right"><small>Forgot your password?</small></a> */}
                      <label for="password">Password</label>
                      {/* <input class="form-control" type="password" required="" id="password" placeholder="Enter your password"/> */}
                      <input
                        style={
                          error || (pass_err && didSubmit)
                            ? { border: "2px solid red" }
                            : null
                        }
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>

                  <div class="form-group row m-b-20">
                    <div class="col-12">
                      <div>
                        {pass_err && didSubmit ? (
                          <div className="pull-left">
                            <p
                              style={{
                                fontSize: "10px",
                                textAlign: "center",
                                color: "red",
                              }}
                            >
                              {" "}
                              Please enter the password.{" "}
                            </p>
                          </div>
                        ) : null}
                      </div>
                      <div>
                        {error && didSubmit ? (
                          <div className="pull-left">
                            <p
                              style={{
                                fontSize: "10px",
                                textAlign: "center",
                                color: "red",
                              }}
                            >
                              {" "}
                              Your account is not found with the given
                              credentials{" "}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div class="form-group row text-center m-t-10">
                    <div class="col-12">
                      <button
                       
                        class="btn btn-block btn-custom waves-effect waves-light"
                        type="submit"
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                </form>

                {/* <div class="row m-t-50">
                        <div class="col-sm-12 text-center">
                            <p class="text-muted">Don't have an account? <a href="page-register.html" class="text-dark m-l-5"><b>Sign Up</b></a></p>
                        </div>
                    </div> */}
              </div>
            </div>
          </div>
        </div>

        <div class="m-t-40 text-center">
          <p class="account-copyright">2021 © TPM Solution</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isError: state.auth.isError,
});

export default connect(mapStateToProps, { login, removeError })(Login);
