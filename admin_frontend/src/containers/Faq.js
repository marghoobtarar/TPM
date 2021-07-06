import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Redirect } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { logout } from "../actions/auth";
import axios from "axios";
import avatar from "../assets/images/users/avatar-1.jpg";
import ButtonLoader from "../components/ButtonLoader";
import Sidebar from "../components/Sidebar";


const Faqs = ({ logout, isAuthenticated }) => {
  const [redirect, setRedirect] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/admin_app/faqs/`,
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
          console.log("working");
          setData(res.data);
          var acc = document.getElementsByClassName("accordion");
          var i;
          for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
              this.classList.toggle("active");
              var panel = this.nextElementSibling;
              if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
              } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
              }
            });
          }
        }
      })
      .catch((err) => {
        console.log(err.response);
        //   alert(err)
      });
  }, []);

  const logout_user = () => {
    console.log("logouting the user");
    logout();
    setRedirect(true);
  };

  const deleteFaq = (e) => {
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_URL}/admin_app/managefaqs/${e}/`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
      data: data,
    })
      .then((res) => {
        setData(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
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
          <div className="faq-sec">
            <div className="container">
              <div>
                <Link to="/create_faq">
                  <button
                    className="create_faq"
                    style={{
                      display: "block",
                      marginTop: "20px",
                      fontSize: "18px",
                      fontWeight: "600px",
                      color: "white",
                      backgroundColor:'#042f54',
                      borderRadius:'8px',
                      minWidth:'120px',
                      border:'0px',
                    }}
                  >
                    Create Faq
                  </button>
                </Link>
              </div>
              {console.log(data)}

              {data.map((dat, index) => (
                <>
                  <Link to={`/edit_faq/${dat.id}`} params={{ value: dat.id }}>
                    <span
                      style={{
                        display: "inline-block",
                        marginTop: "10px",
                        fontSize: "18px",
                        fontWeight: "600px",
                        color: "black",
                      }}
                    >
                      Edit
                    </span>
                  </Link>

                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: "10px",
                      fontSize: "18px",
                      fontWeight: "600px",
                      cursor: "pointer",
                    }}
                    onClick={(e) => deleteFaq(dat.id)}
                  >
                   
                    delete
                  </span>
                  <button className="accordion">{dat.heading} </button>
                  <div className="panel">
                    <p>{dat.description}</p>
                  </div>
                </>
              ))}
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

export default connect(mapStateToProps, { logout })(Faqs);
