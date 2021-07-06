import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import avatar from "../../assets/images/users/avatar-1.jpg";
import addUser from "../../img/add-icon.png";
import Truncate from "react-truncate";

import axios from "axios";
import Sidebar from "../../components/Sidebar";
const Notices = ({ logout, isAuthenticated }) => {
  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/admin_app/blogs/`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
        "content-type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response.data.data);
        setNotices(response.data.data);
        // console.log(response.data.notices);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  //******************************** all state variables
  const [notices, setNotices] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const logout_user = () => {
    console.log("logouting the user");
    logout();
    setRedirect(true);
  };
  const deleteBlog = (e) => {
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_URL}/admin_app/manage_blogs/${e}/`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
        "content-type": "multipart/form-data",
      },
    })
      .then((response) => {
        setNotices(response.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div>
      {redirect ? <Redirect to="/logout" /> : null}

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
        <div className="faq-sec">

        <div className="wrapper container ">
          <div className="wrapper container">
            <div id="content" className="p-4 p-md-5 pt-5">
              <div className="main-content">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <Link to="/blog_create">
                      <a
                        style={{ cursor: "pointer", color: "black" }}
                        className="create-post pull-right"
                      >
                        <span>
                          <img src={addUser} alt="image" />
                        </span>{" "}
                        Create post
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-12">
                    {notices
                      // .slice(
                      //   currentElement*5,(currentElement*5)+5)
                      .map(function (data, index) {
                        // console.log(data)
                        return (
                          <div className="notice-sec" key={index}>
                            <div className="media">
                              <strong>{data.created_at}</strong>
                              <div className="media-body ml-3">
                                <h5 className="mt-0">{data.heading}</h5>
                                <p>
                                  <Truncate
                                    component={"span"}
                                    lines={2}
                                    ellipsis={<span>... </span>}
                                  >
                                    {data.description}
                                  </Truncate>
                                </p>
                                <Link to={`/blog_description/${data.id}`}>
                                  <a style={{ cursor: "pointer" }} href="">
                                    Read More
                                  </a>
                                </Link>

                                <a
                                  onClick={(e) => deleteBlog(data.id)}
                                  style={{
                                    cursor: "pointer",
                                    display: "inline-block",
                                    marginLeft: "10px",
                                  }}
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
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

export default connect(mapStateToProps, { logout })(Notices);
