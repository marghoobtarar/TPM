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
import flight from "../img/flight.png";
import kite from "../img/kite.png";
import plane from "../img/plane.png";

ClassicEditor.create(document.querySelector("#editor"), {
  image: {
    toolbar: ["imageTextAlternative"],
  },
});
const Payment = ({ logout, isAuthenticated }) => {
  const [redirect, setRedirect] = useState(false);
  const [heading, setHeading] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0);
  const [priceError, setPriceError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [negativePrice, setPriceNegativeError] = useState(false)
  useEffect(() => {

    console.log()
    var id = window.location.pathname.split('/')[2]
    var title = 'Silver'
    if(id == 1)
    {
      setHeading('Silver')
      
    }
    else if(id == 2){
      setHeading('Gold')
      title = 'Gold'
    }
    else if(id == 3){
      setHeading("Platinium")
      title = "Platinium"
    }
    else{
      setRedirect(true)
    }
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/admin_app/manage_payments/${title}/`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        console.log(res.data);
        if (res.data ) {
          setDescription(res.data.description);
          setPrice(res.data.price);

          setId(res.data.id);
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
    setPrice(e.target.value);
    setPriceError(false);
    setPriceNegativeError(false);

  };

  const onsubmit = (e) => {
    e.preventDefault();

    if (price === "" ) {
      setPriceError(true);
    }
    else if (price <= 0 ) {
      setPriceNegativeError(true);
    }
    else if (description === "") {
      setDescriptionError(true);
    } else {
      setIsLoading(true);

      var method = "PUT";
      var url = `manage_payments/${heading}`;
      if (id === 0) {
        method = "POST";
        url = "payments";
      }
      e.preventDefault();
      console.log(price, description);
      var data = {
        title: heading,
        price: price,

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
          console.log(res.data.data);
          setId(res.data.data.id)
          setIsLoading(false);

          // setAboutData(res.data.data)

          // setDataPosted(true)
        })
        .catch((err) => {
          console.log(err.res);
          setIsLoading(false);
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
                    <h4 className="page-title">Packages</h4>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">
                          {" "}
                          <a>Home</a>{" "}
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">Packages</li>
                    </ol>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div class="content">
               <div class="container-fluid">
                  <div class="row">
                     <div class="col-12">
                        <div class="card-box">
                           <form method="post">
                              <div class="form-group m-b-20 row">
                                 <div class="col-12" style={{textAlign:'center'}}>
                                    <label for="Title" style={{ fontWeight:'600', fontSize:'20px'}}>{heading} Package</label>
                                 </div>
                              </div>
                              <div class="form-group m-b-20 row">
                                 <div class="col-12">
                                    <label for="Title">Package Price</label>
                                    <input value={price} style={priceError || negativePrice?{border:'1px solid red'}:null} onChange={e=>updateData(e)} class="form-control" type="number" id="Title" required="" placeholder="Enter price"/>
                                 </div>
                                 {priceError || negativePrice? (
                              <p
                                style={{
                                  color: "red",
                                  fontSize: "10px",
                                  marginLeft: "15px",
                                }}
                              >
                                {negativePrice?'Price cannot be negative'
                              :
                              'This field cannot be empty'  
                              }
                                
                              </p>
                            ) : null}
                              </div>
                              <div class="form-group m-b-20 row">
                              <div className="col-12">
                          <label for="Title">Description</label>
                          <div id="editor">
                            <div
                              className="textbox"
                              style={{ marginTop: "5px" }}
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
                                  onReady={(editor) => {
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
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Payment);
