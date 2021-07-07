import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import logo from "../img/logo.png";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import avatar from "../assets/images/users/avatar-1.jpg";
import ButtonLoader from "../components/ButtonLoader";
import placeholder from "../img/placeholder.png";
import Sidebar from "../components/Sidebar";

ClassicEditor.create(document.querySelector("#editor"), {
  image: {
    toolbar: ["imageTextAlternative"],
  },
});
const Settings = ({ logout, isAuthenticated }) => {
  const [redirect, setRedirect] = useState(false);
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPassword, setIsLoadingPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [fullNameError, setFullNameError] = useState(false);
  const [oldPasswordError, setOldPasswordError] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [selectedImage, setSelecteImage] = useState();
  const [urlImageExist, setUrlImageExist] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/auth/users/me/`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        console.log("res data is", res);
        if (res) {
          setEmail(res.email);
          if (res.picture) {
            setImage(res.picture.replace("/auth/users/me/", "/"));
          }
          setFullName(res.first_name);
          setDob(res.date_of_birth);
          if (res.picture !== null) {
            setUrlImageExist(true);
          } else {
            setUrlImageExist(false);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        // alert(err)
      });
  }, []);

  const logout_user = () => {
    logout();
    setRedirect(true);
  };

  const change = (e) => {
    if (e.target.name === "fullName") {
      setFullName(e.target.value);
    } else if (e.target.name === "dob") {
      setDob(e.target.value);
    }
    setFullNameError(false);
  };

  const passwordChange = (e) => {
    if (e.target.name === "oldPassword") {
      setOldPassword(e.target.value);
    } else if (e.target.name === "newPassword") {
      setNewPassword(e.target.value);
    } else if (e.target.name === "confirmPassword") {
      setConfirmNewPassword(e.target.value);
    }
    setOldPasswordError(false);
    setNewPasswordError(false);
    setConfirmPasswordError(false);
  };

  const onsubmit = (e) => {
    console.log(fullName, dob);
    if (fullName === "") {
      setFullNameError(true);
    } else {
      var formdata = new FormData();
      setIsLoading(true);
      formdata.append("first_name", fullName);
      console.log("the dob is ", dob);
      if (dob !== "" && dob !== null) {
        formdata.append("date_of_birth", dob);
      }
      if (image !== "" && image !== null) {
        formdata.append("picture", selectedImage);
      }

      axios({
        method: "PUT",
        url: `${process.env.REACT_APP_API_URL}/accounts/update_user/`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
        data: formdata,
      })
        .then((res) => {
          console.log(res);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err.response);
          setIsLoading(false);
        });
    }
  };

  const submitPawssord = (e) => {
    console.log(oldPassword, newPassword, confirmNewPassword);
    if (oldPassword === "") {
      setOldPasswordError(true);
      setErrorMessage("Password cannot be empty.");
    } else if (newPassword === "") {
      setNewPasswordError(true);
      setErrorMessage("New Password cannot be empty.");
    } else if (confirmNewPassword === "") {
      setConfirmPasswordError(true);
      setErrorMessage("Confirm Password cannot be empty.");
    } else if (newPassword !== "" && confirmNewPassword !== newPassword) {
      setNewPasswordError(true);
      setConfirmPasswordError(true);
      setErrorMessage("New Password and Confirm Password does not match.");
    } else {
      setIsLoadingPassword(true);

      var data = {
        new_password: newPassword,
        old_password: oldPassword,
      };

      axios({
        method: "PUT",
        url: `${process.env.REACT_APP_API_URL}/accounts/update_password/`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
        data: data,
      })
        .then((res) => {
          console.log(res);
          setIsLoadingPassword(false);
        })
        .catch((err) => {
          console.log(err.response.data);
          if (err.response.data.hasOwnProperty("old_password")) {
            console.log("yes it exists");
            setErrorMessage("Your password does not match.");
            setOldPasswordError(true);
          } else if (err.response.data.error.hasOwnProperty("new_password")) {
            setErrorMessage(err.response.data.error.new_password[0]);
            setNewPasswordError(true);
          }

          setIsLoadingPassword(false);
        });
    }
  };

  const imageSelector = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setUrlImageExist(true);
      setSelecteImage(e.target.files[0]);
    }
  };
  return (
    <div className="">
      {redirect ? <Redirect to="/logout" /> : null}

      <div id="wrapper">
        <Sidebar />

        <div className="content-page">
          <div className="topbar">
            <nav className="navbar-custom">
              <ul className="list-unstyled topbar-right-menu float-right mb-0">
                <li className="hide-phone app-search">
                  <form>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="form-control"
                    />
                    <button type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </li>

                <li className="dropdown notification-list">
                  <a
                    className="nav-link dropdown-toggle nav-user"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                  >
                    <img src={avatar} alt="user" className="rounded-circle" />
                    <span className="ml-1">
                    TPM Solution <i className="mdi mdi-chevron-down"></i>{" "}
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown">
                    <div className="dropdown-item noti-title">
                      <h6 className="text-overflow m-0">Welcome !</h6>
                    </div>

                    {/* <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="fi-head"></i> <span>My Account</span>
                    </a> */}

                    <a
                      href="#"
                      onClick={(e) => logout_user()}
                      className="dropdown-item notify-item"
                    >
                      <i className="fi-power"></i> <span> Logout</span>
                    </a>
                  </div>
                </li>
              </ul>

              <ul className="list-inline menu-left mb-0">
                <li className="float-left">
                  <button className="button-menu-mobile open-left disable-btn">
                    <i className="dripicons-menu"></i>
                  </button>
                </li>
                <li>
                  <div className="page-title-box">
                    <h4 className="page-title">Settings</h4>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">
                          {" "}
                          <a>Home</a>{" "}
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">Settings</li>
                    </ol>
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12 col-sm-3">
                  <div className="acount-status-div">
                    <h3>Account Status</h3>
                    <span className="active-badge">Active</span>
                    <div className="profile_holder">
                      {urlImageExist ? (
                        <img
                          style={{
                            minWidth: "200px",
                            maxWidth: "200px",
                            minHeight: "200px",
                            maxHeight: "200px",
                          }}
                          src={`${image}`}
                          className="mr-auto ml-auto"
                          alt="image"
                        />
                      ) : (
                        <img
                          style={{
                            minWidth: "200px",
                            maxWidth: "200px",
                            minHeight: "200px",
                            maxHeight: "200px",
                          }}
                          src={placeholder}
                          className="mr-auto ml-auto"
                          alt="image"
                        />
                      )}
                    </div>
                    <div className="profile_name mb-4">
                      <div className="upload-btn-wrapper">
                        <button className="btn">Choose picture</button>
                        <input
                          type="file"
                          name="myfile"
                          accept="image/*"
                          onChange={(e) => imageSelector(e)}
                        />
                      </div>
                    </div>
                    <small>Name</small>
                    <strong>{fullName}</strong>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-9">
                  <div className="edit-profile-sec">
                    <h3>Edit Information</h3>
                    <div className="row">
                      <div className="col-xs-12 col-sm-6">
                        <div className="input-field">
                          <label>Full Name</label>
                          <input
                            style={
                              fullNameError
                                ? { border: "2px solid red !important" }
                                : null
                            }
                            type="text"
                            value={fullName}
                            onChange={(e) => change(e)}
                            className="form-controls"
                            name="fullName"
                          />
                          {fullNameError ? (
                            <p style={{ color: "red", fontSize: "10px" }}>
                              This field cannot be empty.
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12 col-sm-6">
                        <div className="input-field">
                          <label>EMAIL</label>
                          <input
                            disabled
                            style={{ cursor: "not-allowed" }}
                            type="email"
                            value={email}
                            className="form-controls"
                            name=""
                          />
                        </div>
                      </div>
                    </div>

                    <div style={{ marginTop: "10px" }}>
                      <ButtonLoader
                        submit={(e) => onsubmit(e)}
                        title={"Update"}
                        titleLoad={"Updating"}
                        isLoad={isLoading}
                      />
                    </div>
                    <div className="row" style={{ marginTop: "10px" }}>
                      <div className="col-xs-12 col-sm-6">
                        <div className="input-field">
                          <label>Old PASSWORD</label>
                          <input
                            style={
                              oldPasswordError
                                ? { border: "1px solid red" }
                                : null
                            }
                            type="password"
                            value={oldPassword}
                            onChange={(e) => passwordChange(e)}
                            className="form-controls"
                            name="oldPassword"
                          />
                        </div>
                        {oldPasswordError ? (
                          <p style={{ color: "red", fontSize: "10px" }}>
                            {errorMessage}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12 col-sm-6">
                        <div className="input-field">
                          <label>New PASSWORD</label>
                          <input
                            style={
                              newPasswordError
                                ? { border: "1px solid red" }
                                : null
                            }
                            type="password"
                            value={newPassword}
                            onChange={(e) => passwordChange(e)}
                            className="form-controls"
                            name="newPassword"
                          />
                        </div>
                        {newPasswordError ? (
                          <p style={{ color: "red", fontSize: "10px" }}>
                            {errorMessage}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12 col-sm-6">
                        <div className="input-field">
                          <label>Confirm New PASSWORD</label>
                          <input
                            style={
                              oldPasswordError
                                ? { border: "1px solid red" }
                                : null
                            }
                            type="password"
                            value={confirmNewPassword}
                            onChange={(e) => passwordChange(e)}
                            className="form-controls"
                            name="confirmPassword"
                          />
                        </div>
                        {!newPasswordError && confirmPasswordError ? (
                          <p style={{ color: "red", fontSize: "10px" }}>
                            {errorMessage}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div style={{ marginTop: "10px" }}>
                      <ButtonLoader
                        submit={(e) => submitPawssord(e)}
                        title={"Update"}
                        titleLoad={"Updating"}
                        isLoad={isLoadingPassword}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "100px" }}>
        {/* <footer className="footer">
    2021 © Aptilion.
</footer> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Settings);
