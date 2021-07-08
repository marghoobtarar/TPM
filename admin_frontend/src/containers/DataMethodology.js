import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import avatar from "../assets/images/users/avatar-1.jpg";
import ButtonLoader from "../components/ButtonLoader";
import Sidebar from "../components/Sidebar";
import placeholder from "../img/placeholder.png";

ClassicEditor.create(document.querySelector("#editor"), {
  image: {
    toolbar: ["imageTextAlternative"],
  },
});
const DataMethodology = ({ logout, isAuthenticated }) => {
  const [redirect, setRedirect] = useState(false);
  const [heading, setHeading] = useState();
  const [description, setDescription] = useState();
  const [description2, setDescription2] = useState();

  const [id, setId] = useState("");
  const [headingError, setHeadingError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [descriptionError2, setDescriptionError2] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [urlImageExist, setUrlImageExist] = useState(false);
  const [urlImageExist2, setUrlImageExist2] = useState(false);
  const [urlImageExist3, setUrlImageExist3] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [image, setImage] = useState("");
  const [selectedImage, setSelecteImage] = useState("");

  const [image2, setImage2] = useState("");
  const [selectedImage2, setSelecteImage2] = useState("");

  const [image3, setImage3] = useState("");
  const [selectedImage3, setSelecteImage3] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/admin_app/data_methodology/`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        console.log("res data is", res.data);
        if (res.data && res.data.length > 0) {
          let data = res.data;
          setHeading(data[0].heading);
          setDescription(data[0].description);
          setDescription2(data[0].description2);
          setId(data[0].id);
          if (data[0].picture !== null && data[0].picture !== undefined) {
            setUrlImageExist(true);
            setImage(process.env.REACT_APP_API_URL + "/" + data[0].picture);
          } else {
            setUrlImageExist(false);
          }
          if (data[0].picture2 !== null && data[0].picture2 !== undefined) {
            setUrlImageExist2(true);
            setImage2(process.env.REACT_APP_API_URL + "/" + data[0].picture2);
          } else {
            setUrlImageExist2(false);
          }
          if (data[0].picture3 !== null && data[0].picture3 !== undefined) {
            setUrlImageExist3(true);
            setImage3(process.env.REACT_APP_API_URL + "/" + data[0].picture3);
          } else {
            setUrlImageExist3(false);
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
  const updateData = (e) => {
    setHeading(e.target.value);
    setHeadingError(false);
  };

  const onsubmit = (e) => {
    console.log(heading, description2, description);
    e.preventDefault();
    console.log("submitting the form");

    if (heading === "" || !heading) {
      setHeadingError(true);
    } else if (description === "" || !description) {
      setDescriptionError(true);
    } else if (description2 === "" || !description2) {
      setDescriptionError2(true);
    } else {
      setIsLoading(true);

      var method = "PUT";
      var url = `manage_data_methodology/${id}`;
      if (id === "") {
        method = "POST";
        url = "data_methodology";
      }
      e.preventDefault();
      var formdata = new FormData();
      formdata.append("heading", heading);
      formdata.append("description", description);
      formdata.append("description2", description2);
      if (selectedImage !== "") {
        console.log("check image", selectedImage);

        formdata.append("picture", selectedImage);
      }
      if (selectedImage2 !== "") {
        formdata.append("picture2", selectedImage2);
      }
      if (selectedImage3 !== "") {
        formdata.append("picture3", selectedImage3);
      }

      var data = {
        heading: heading,
        description: description,
        description2: description2,
      };
      axios({
        method: method,
        url: `${process.env.REACT_APP_API_URL}/admin_app/${url}/`,
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
          console.log(" this is log", err.response);
          setIsLoading(false);
        });
    }
  };
  const imageSelector = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setUrlImageExist(true);
      setSelecteImage(e.target.files[0]);
    }
  };
  const imageSelector2 = (e) => {
    if (e.target.files[0]) {
      setImage2(URL.createObjectURL(e.target.files[0]));
      setUrlImageExist2(true);
      setSelecteImage2(e.target.files[0]);
    }
  };
  const imageSelector3 = (e) => {
    if (e.target.files[0]) {
      setImage3(URL.createObjectURL(e.target.files[0]));
      setUrlImageExist3(true);
      setSelecteImage3(e.target.files[0]);
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
                    TPM Solution<i className="mdi mdi-chevron-down"></i>{" "}
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
                    <h4 className="page-title">Data Methodology</h4>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">
                          {" "}
                          <a>Home</a>{" "}
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Data Methodology
                      </li>
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
                                  // onChange={ ( event, editor ) => console.log( { event, editor } ) }
                                  onReady={(editor) => {
                                    //initilize our application
                                  }}
                                  config={{
                                    ckfinder: {
                                      uploadUrl: `${process.env.REACT_APP_API_URL}/admin_app/ckeditor_image/`,
                                    },
                                  }}
                                  onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setDescription(data);
                                    setDescriptionError(false);
                                  }}
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
                          </div>
                        </div>
                      </div>

                      <div className="form-group m-b-20 row">
                        <div className="col-12">
                          <div className="row" style={{ marginTop: "30px" }}>
                            <div className="col-xs-12 col-sm-4">
                              <div className="profile_holder">
                                {urlImageExist ? (
                                  <img
                                    style={{
                                      width: "100%",
                                      height: "350px",
                                      borderRadius: "5px",
                                    }}
                                    src={`${image}`}
                                    className="mr-auto ml-auto"
                                    alt="image"
                                  />
                                ) : (
                                  <img
                                    style={{
                                      width: "100%",
                                      height: "350px",
                                      borderRadius: "5px",
                                    }}
                                    src={placeholder}
                                    className="mr-auto ml-auto"
                                    alt="image"
                                  />
                                )}
                              </div>
                              <div
                                className="profile_name mb-4"
                                style={{
                                  marginTop: "10px",
                                  textAlign: "center",
                                }}
                              >
                                <div className="upload-btn-wrapper">
                                  <button className="btn">
                                    Choose picture
                                  </button>
                                  <input
                                    type="file"
                                    name="myfile"
                                    accept="image/*"
                                    onChange={(e) => imageSelector(e)}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-xs-12 col-sm-4">
                              <div className="profile_holder">
                                {urlImageExist2 ? (
                                  <img
                                    style={{
                                      width: "100%",
                                      height: "350px",
                                      borderRadius: "5px",
                                    }}
                                    src={`${image2}`}
                                    className="mr-auto ml-auto"
                                    alt="image"
                                  />
                                ) : (
                                  <img
                                    style={{
                                      width: "100%",
                                      height: "350px",
                                      borderRadius: "5px",
                                    }}
                                    src={placeholder}
                                    className="mr-auto ml-auto"
                                    alt="image"
                                  />
                                )}
                              </div>
                              <div
                                className="profile_name mb-4"
                                style={{
                                  marginTop: "10px",
                                  textAlign: "center",
                                }}
                              >
                                <div className="upload-btn-wrapper">
                                  <button className="btn">
                                    Choose picture
                                  </button>
                                  <input
                                    type="file"
                                    name="myfile"
                                    accept="image/*"
                                    onChange={(e) => imageSelector2(e)}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-xs-12 col-sm-4">
                              <div className="profile_holder">
                                {urlImageExist3 ? (
                                  <img
                                    style={{
                                      width: "100%",
                                      height: "350px",
                                      borderRadius: "5px",
                                    }}
                                    src={`${image3}`}
                                    className="mr-auto ml-auto"
                                    alt="image"
                                  />
                                ) : (
                                  <img
                                    style={{
                                      width: "100%",
                                      height: "350px",
                                      borderRadius: "5px",
                                    }}
                                    src={placeholder}
                                    className="mr-auto ml-auto"
                                    alt="image"
                                  />
                                )}
                              </div>
                              <div
                                className="profile_name mb-4"
                                style={{
                                  marginTop: "10px",
                                  textAlign: "center",
                                }}
                              >
                                <div className="upload-btn-wrapper">
                                  <button className="btn">
                                    Choose picture
                                  </button>
                                  <input
                                    type="file"
                                    name="myfile"
                                    accept="image/*"
                                    onChange={(e) => imageSelector3(e)}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
                                  descriptionError2
                                    ? { border: "1px solid red" }
                                    : null
                                }
                              >
                                <CKEditor
                                  editor={ClassicEditor}
                                  data={description2}
                                  // onChange={ ( event, editor ) => console.log( { event, editor } ) }
                                  onReady={(editor) => {
                                    //initilize our application
                                  }}
                                  config={{
                                    ckfinder: {
                                      uploadUrl: `${process.env.REACT_APP_API_URL}/admin_app/ckeditor_image/`,
                                    },
                                  }}
                                  onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setDescription2(data);
                                    setDescriptionError2(false);
                                  }}
                                />
                              </div>
                            </div>
                            {descriptionError2 ? (
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
                        </div>
                      </div>

                      <div style={{ marginTop: "20px" }}>
                        <ButtonLoader
                          submit={(e) => onsubmit(e)}
                          isLoad={isLoading}
                          title={"Submit"}
                          titleLoad={"Submitting"}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <footer className="footer">
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

export default connect(mapStateToProps, { logout })(DataMethodology);
