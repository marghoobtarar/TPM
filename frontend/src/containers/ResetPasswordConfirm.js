import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password_confirm } from "../actions/auth";
import login_main_image from "../img/Icon/login.jpg";
import logo from "../img/logo.jpg";

const ResetPasswordConfirm = ({ match, reset_password_confirm, isError }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });
  const [reset_error, setResetError] = useState(false);
  const [reset_error_message, setResetErrorMessage] = useState(false);

  useEffect(() => {
    console.log(isError, requestSent);
    if (isError) {
      // alert(isError['password'], isError['email'])
      if (isError["new_password"]) {
        // alert(isError['password'])
        if (isError["new_password"].length > 0) {
          console.log(
            "the length is",
            isError["new_password"].length,
            isError["new_password"]
          );

          setError(true);
          setResetErrorMessage(isError["new_password"][0]);
          // console.log('there is an error',isError['password'])
        }
      }
      if (isError === false) {
        setRequestSent(true);
      }
    }
  }, [isError]);

  const { new_password, re_new_password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.new_password === formData.re_new_password) {
      const uid = match.params.uid;
      const token = match.params.token;

      reset_password_confirm(uid, token, new_password, re_new_password);
      // setRequestSent(true);
    } else {
      setError(true);
      setResetErrorMessage(" Your confirm password is not matching");
    }
  };

  if (isError === false) {
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      {/* <div className='container mt-5'>
            <form onSubmit={e => onSubmit(e)}>
            <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='New Password'
                        name='new_password'
                        value={new_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Confirm New Password'
                        name='re_new_password'
                        value={re_new_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Reset Password</button>
            </form>
        </div>
        */}

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
                      alt="Logo Here"
                    />
                  </div>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className="input-field">
                      <label>Password</label>
                      <input
                        style={error ? { border: "2px solid red" } : null}
                        className="form-controls"
                        type="password"
                        placeholder="New Password"
                        name="new_password"
                        value={new_password}
                        onChange={(e) => onChange(e)}
                        // minLength='6'
                        // required
                      />
                    </div>
                    <div className="input-field">
                      <label>Confirm Password</label>
                      <input
                        style={error ? { border: "2px solid red" } : null}
                        className="form-controls"
                        type="password"
                        placeholder="Confirm New Password"
                        name="re_new_password"
                        value={re_new_password}
                        onChange={(e) => onChange(e)}
                        // minLength='6'
                        // required
                      />
                    </div>
                    {error ? (
                      <div>
                        <p style={{ fontSize: "10px", color: "red" }}>
                          {reset_error_message}{" "}
                        </p>
                      </div>
                    ) : null}

                    <div className="form-group btn_inline">
                      <input
                        type="submit"
                        value="Reset Password"
                        className="btn btn-info btn-lg btn-block login-btn "
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  isError: state.auth.isError,
});

export default connect(mapStateToProps, { reset_password_confirm })(
  ResetPasswordConfirm
);
