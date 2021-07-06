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
import imagePlaceholder from "../../img/placeholder.png";

function BlogEdit(props) {
  const [noticeCreated, setNoticeCreated] = useState(false);
  const [data, setData] = useState({
    heading: "",
    image: imagePlaceholder,
    draft: false,
    publish: false,
    description: "",
    // date:''
  });

  //
  const [image, setImage] = useState("");
  const [headingError, setHeadingError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [redirectHome, setRedirectHome] = useState(false);
  const [BlogEditdRedirect, setBlogEditdRedirect] = useState(false);

  const [draftPublishError, setDraftPublishError] = useState(false);

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
        //   setRedirectHome(true)
      });
  }, []);
  const logout_user = () => {
    console.log("logouting the user");
    logout();
    setRedirect(true);
  };

  // const [dateError, setDateError] = useState(false)
  // **************************end state variables

  // *******************all function
  const creatingPost = (e) => {
    setImageError(false);
    // setDateError(false)
    setDescriptionError(false);
    setHeadingError(false);
    setDraftPublishError(false);

    console.log("edit data in createnotices.js", e.target.value);
    if (
      e.target.name !== "image" &&
      e.target.name !== "draft" &&
      e.target.name !== "publish"
    ) {
      setData({ ...data, [e.target.name]: e.target.value });
    } else if (e.target.name === "draft" || e.target.name === "publish") {
      setData({ ...data, [e.target.name]: !data[e.target.name] });
    } else {
      if (e.target.files[0]) {
        setData({ ...data, [e.target.name]: e.target.files[0] });
        setImage(URL.createObjectURL(e.target.files[0]));
      }
    }
  };

  // *******************end function
  const submitPost = (e) => {
    e.preventDefault();
    let formData = new FormData();
    if (data.heading === "") {
      setHeadingError(true);
    } else if (data.description === "") {
      setDescriptionError(true);
    }
    // else if(data.date===''){
    //   setDateError(true)
    // }
    // else if(image === ''){
    //   setImageError(true)
    // }
    else if (!data.draft & !data.publish) {
      setDraftPublishError(true);
    } else if (data.draft & data.publish) {
      setDraftPublishError(true);
    } else {
      formData.append("heading", data.heading); //append the values with key, value pair
      if ((image !== undefined) & (image !== "")) {
        formData.append("image", data.image);
      }
      formData.append("draft", data.draft);
      formData.append("publish", data.publish);
      formData.append("description", data.description);
      // formData.append('date', data.date);
      formData.append("author", "Aptillion Administrator");

      console.log("this is the image", image);

      axios({
        method: "PUT",
        url: `${process.env.REACT_APP_API_URL}/admin_app/manage_blogs/${
          window.location.pathname.split("/")[2]
        }/`,
        data: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
          "content-type": "multipart/form-data",
        },
      })
        .then((response) => {
          console.log(response);
          // setNoticeCreated(true)
          setBlogEditdRedirect(true);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  };

  const editPost = (e) => {
    console.log("edit post in BlogEdit.js");
    //   props.editPost()
  };

  return (
    <div>
      {redirect ? <Redirect to="/logout" /> : null}
      {redirectHome ? <Redirect to="/" /> : null}
      {BlogEditdRedirect ? <Redirect to="/blog" /> : null}

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
          {noticeCreated ? <Redirect to="/blog" /> : null}
          <div id="content" className="p-4 p-md-5 pt-5">
            <div className="main-content">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                </div>
              </div>

              <div className="edit-post">
                <div className="row">
                  <div className="col-xs-12 col-sm-12">
                    <div className="input-field">
                      <input
                        onChange={(e) => creatingPost(e)}
                        value={data.heading}
                        type="text"
                        placeholder="Post title here"
                        className="form-controls"
                        name="heading"
                      />
                    </div>
                    {headingError ? (
                      <p style={{ color: "red", fontSize: "10px" }}>
                        This field cannot be empty.
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-8">
                    <div className="input-field">
                      <textarea
                        onChange={(e) => creatingPost(e)}
                        value={data.description}
                        type="text"
                        className="form-controls"
                        placeholder="Post text goes here"
                        name="description"
                      ></textarea>
                    </div>
                    {descriptionError ? (
                      <p style={{ color: "red", fontSize: "10px" }}>
                        This field cannot be empty.
                      </p>
                    ) : null}
                    <div className="row">
                      <div className="col-xs-12 col-sm-6">
                        <div className="content-txt">
                          <strong>Author</strong>
                          <p>Aptillion administrator</p>
                        </div>
                      </div>
                      {/* <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <input onChange={e=>creatingPost(e)} type="date" value={data.date} className="form-controls" placeholder="Date Published" name="date" />
                    </div>
                    {
                  dateError?
                  <p style={{color:'red', fontSize:'10px'}}>
                    This field cannot be empty.
                  </p>
                  :null
                }
                  </div> */}
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <div className="blog-holder">
                      {image !== "" ? (
                        <img src={image} alt="image" />
                      ) : (
                        <img
                          src={`${process.env.REACT_APP_API_URL}/${data.image}`}
                          alt="image"
                        />
                      )}
                    </div>
                    {imageError ? (
                      <p style={{ color: "red", fontSize: "10px" }}>
                        This field cannot be empty.
                      </p>
                    ) : null}
                    <div className="profile_name mb-2">
                      <div className="upload-btn-wrapper">
                        <button className="btn">Choose picture</button>
                        <input
                          onChange={(e) => creatingPost(e)}
                          type="file"
                          name="image"
                        />
                      </div>
                    </div>
                    <div className="custom-control custom-checkbox mb-1">
                      <input
                        type="checkbox"
                        onChange={(e) => creatingPost(e)}
                        checked={data.draft}
                        className="custom-control-input mt-1"
                        id="customCheck"
                        name="draft"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck"
                      >
                        Save as Draft
                      </label>
                    </div>

                    <div className="custom-control custom-checkbox">
                      <input
                        onChange={(e) => creatingPost(e)}
                        checked={data.publish}
                        type="checkbox"
                        className="custom-control-input mt-1"
                        id="customCheck2"
                        name="publish"
                      />

                      <label
                        className="custom-control-label"
                        htmlFor="customCheck2"
                      >
                        Publish Post
                      </label>
                    </div>
                    {draftPublishError ? (
                      <p style={{ color: "red", fontSize: "10px" }}>
                        Please select one option.
                      </p>
                    ) : null}
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={(e) => submitPost(e)}
                      className="confirm-btn"
                    >
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>{" "}
                      Confirm
                    </a>
                  </div>
                </div>
              </div>
              {/* <Footer/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
BlogEdit.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(BlogEdit);
