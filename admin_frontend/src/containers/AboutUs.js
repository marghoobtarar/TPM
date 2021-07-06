import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import logo from "../img/logo.png";

import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import avatar from "../assets/images/users/avatar-1.jpg";
import ButtonLoader from "../components/ButtonLoader";
import Sidebar from "../components/Sidebar";
ClassicEditor.create(document.querySelector("#editor"), {
 
});
ClassicEditor.defaultConfig = {

  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      '|',
      'bulletedList',
      'numberedList',
      '|',
      'insertTable',
      '|',
      
      'undo',
      'redo'
    ]
  },
  
  table: {
    contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
  },
  language: 'en'
};
const About = ({ logout, isAuthenticated }) => {
  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/admin_app/aboutus/`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        console.log(res.data);
        if (res.data && res.data.length > 0) {
          let data = res.data;
          setHeading(data[0].heading);
          setDescription(data[0].description);
          setId(data[0].id);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);
  const [redirect, setRedirect] = useState(false);
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

  const onsubmit = (e) => {
    e.preventDefault();

    if (heading === "") {
      setHeadingError(true);
    } else if (description === "") {
      setDescriptionError(true);
    } else {
      setIsLoading(true);
      var method = "PUT";
      var url = `manageaboutus/${id}`;
      if (id === 0) {
        method = "POST";
        url = "aboutus";
      }
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
        })
        .catch((err) => {
          console.log(err);
          alert("Sorry your limit to upload data has been exceeded.");
        });
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
                      Aptillion <i className="mdi mdi-chevron-down"></i>{" "}
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
                    <h4 className="page-title">About Us</h4>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">
                          {" "}
                          <a>Home</a>{" "}
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">About Us</li>
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
                            style={
                              headingError ? { border: "1px solid red" } : null
                            }
                            onChange={(e) => updateData(e)}
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
                              <div
                                style={
                                  descriptionError
                                    ? { border: "1px solid red" }
                                    : null
                                }
                              >
                                <CKEditor
                                  editor={ClassicEditor}
                                  data={description}
                                  onReady={(editor) => {}}
                                  config={{
                                    ckfinder: {
                                      uploadUrl: `${process.env.REACT_APP_API_URL}/admin_app/ckeditor_image/`,
                                    },
                                    // plugins: [ImageResize]
                                  }}
                                  onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setDescription(data);
                                    setDescriptionError(false);
                                  }}
                                />
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
                            </div>
                            <div style={{ marginTop: "20px" }}>
                              <ButtonLoader
                                title={"Submit"}
                                titleLoad={"Submitting"}
                                submit={(e) => onsubmit(e)}
                                isLoad={isLoading}
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

          
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(About);
