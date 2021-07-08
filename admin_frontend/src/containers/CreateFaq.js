import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import logo from "../img/logo.png";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import avatar from "../assets/images/users/avatar-1.jpg";
import ButtonLoader from "../components/ButtonLoader";
import Sidebar from "../components/Sidebar";

ClassicEditor.create(document.querySelector("#editor"), {
  image: {
    toolbar: ["imageTextAlternative"],
  },
});
const CreateFaq = ({ logout, isAuthenticated }) => {
  const [redirect, setRedirect] = useState(false);
  const [redirectFaq, setRedirectFaq] = useState(false);

  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0);
  const [headingError, setHeadingError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const logout_user = () => {
    console.log("logouting the user");
    logout();
    setRedirect(true);
  };
  const updateData = (e) => {
    setHeading(e.target.value);
    setHeadingError(false);
  };

  const updateDescriptionData = (e) => {
    setDescription(e.target.value);
    setDescriptionError(false);
  };
  const onsubmit = (e) => {
    e.preventDefault();

    if (heading === "") {
      setHeadingError(true);
    } else if (description === "") {
      setDescriptionError(true);
    } else {
      setIsLoading(true);

      var method = "POST";
      var url = "faqs";

      e.preventDefault();
      console.log(heading, description);
      var data = {
        heading: heading,
        description: description,
      };
      axios({
        method: method,
        url: `${process.env.REACT_APP_API_URL}/admin_app/${url}/`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
        data: data,
      })
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          setRedirectFaq(true);
        })
        .catch((err) => {
          console.log(err.response);
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="">
      {redirect ? <Redirect to="/logout" /> : null}
      {redirectFaq ? <Redirect to="/faqs" /> : null}

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
                    <h4 className="page-title">FAQs</h4>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">
                          {" "}
                          <a>Home</a>{" "}
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">FAQs</li>
                    </ol>
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card-box">
                    <form method="post">
                      <div className="form-group m-b-20 row">
                        <div className="col-12">
                          <label htmlFor="heading">Title</label>
                          <input
                            onChange={(e) => updateData(e)}
                            style={
                              headingError ? { border: "1px solid red" } : null
                            }
                            className="form-control"
                            type="text"
                            name="heading"
                            id="heading"
                            value={heading}
                            placeholder="Enter the title"
                          />
                        </div>
                        {headingError ? (
                          <p
                            style={{
                              color: "red",
                              fontSize: "10px",
                              marginLeft: "15px",
                            }}
                          >
                            This field cannot be empty
                          </p>
                        ) : null}
                      </div>
                      <div className="form-group m-b-20 row">
                        <div className="col-12">
                          <label for="Title">Content</label>
                          <div id="editor">
                            <div
                              className="textbox"
                              style={{ marginTop: "20px" }}
                            >
                              <div>
                                <textarea
                                  type="text"
                                  style={
                                    descriptionError
                                      ? {
                                          width: "100%",
                                          border: "1px solid red",
                                        }
                                      : { width: "100%" }
                                  }
                                  value={description}
                                  onChange={(e) => updateDescriptionData(e)}
                                />
                              </div>
                            </div>
                            {descriptionError ? (
                              <p
                                style={{
                                  color: "red",
                                  fontSize: "10px",
                                  marginLeft: "15px",
                                }}
                              >
                                This field cannot be empty
                              </p>
                            ) : null}
                            <div style={{ marginTop: "20px" }}>
                              <ButtonLoader
                                submit={(e) => onsubmit(e)}
                                isLoad={isLoading}
                                title={"Submit"}
                                titleLoad={"Submitting"}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 
<footer className="footer">
    2021 © Aptilion.
</footer> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(CreateFaq);
