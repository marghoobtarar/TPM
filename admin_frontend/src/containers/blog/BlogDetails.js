import React, { useState, useEffect } from "react";

import styles from "./styles";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import avatar from "../../assets/images/users/avatar-1.jpg";
import Sidebar from "../../components/Sidebar";
import axios from "axios";

function BlogDetails(props) {
  const [data, setData] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [redirectHome, setRedirectHome] = useState(false);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/admin_app/manage_blogs/${
        window.location.pathname.split("/")[2]
      }/`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setData(res.data);
        }
      })
      .catch((err) => {
        console.log(err.response);
        setRedirectHome(true);
      });
  }, []);
  const logout_user = () => {
    console.log("logouting the user");
    logout();
    setRedirect(true);
  };
  const editPost = (e) => {
    console.log("edit post in BlogDetails.js");
    //   props.editPost()
  };

  return (
    <div>
      {redirect ? <Redirect to="/logout" /> : null}
      {redirectHome ? <Redirect to="/" /> : null}

      {/* <Navbar/> */}
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
                  <h4 className="page-title">Blogs</h4>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        {" "}
                        <a>Home</a>{" "}
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Blogs</li>
                  </ol>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div className="wrapper container">
          <div>
            <div id="content" className="p-4 p-md-5 pt-5">
              <div className="main-content">
                <div className="row">
                  <div className="col-xs-12 col-sm-4">
                    <div className="blog-image-holder">
                      {/* <a href="#" className="btn btn-back ripple">Edit Post</a> */}
                      <Link
                        to={`/blog_edit/${
                          window.location.pathname.split("/")[2]
                        }`}
                      >
                        <a
                          onClick={(e) => editPost(e)}
                          className="  confirm-btn"
                          style={{
                            color: "#042f54",
                            marginBottom: "50px",
                            marginTop: "-5px",
                            cursor: "pointer",
                          }}
                        >
                          <i
                            className="fa fa-pencil-square-o"
                            aria-hidden="true"
                            style={{
                              display: "inline-block",
                              marginRight: "5px",
                            }}
                          ></i>
                          Edit Blog
                        </a>
                      </Link>

                      <img
                        src={`${process.env.REACT_APP_API_URL}/${data.image}`}
                        alt="blog"
                      />
                      <strong>Date Created</strong>
                      <small>{data.created_at}</small>
                      <strong>Author</strong>
                      <small>{data.author}</small>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-8">
                    <div className="notice-content-holder">
                      <h3>{data.heading}</h3>
                      <p>{data.description}</p>
                    </div>
                  </div>
                </div>
                {/* <Footer/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
BlogDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(BlogDetails);
