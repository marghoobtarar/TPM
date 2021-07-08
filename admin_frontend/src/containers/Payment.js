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


  const [data, setData] = useState([])
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [silverPrice, setSilverPrice] = useState("")
  const [silverDetail, setSilverDetail] = useState("")
  const [goldPrice, setGoldPrice] = useState("")
  const [goldDetail, setGoldDetail] = useState("")
  const [platiniumPrice, setPlatiniumPrice] = useState("")
  const [platiniumDetail, setPlatiniumDetail] = useState("")

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/admin_app/payments/`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
      .then((res) => {
        return res.data;
      })
      .then((res) => {
       
        if (res.data && res.data.length > 0) {
          for( var dat in res.data){
          
          if (res.data[dat].title === 'Silver'){
            setSilverDetail(res.data[dat].description)
            setSilverPrice(res.data[dat].price)

          }
          else if (res.data[dat].title === 'Gold'){
            setGoldDetail(res.data[dat].description)
            setGoldPrice(res.data[dat].price)

          }
          else if (res.data[dat].title === 'Platinium'){
            setPlatiniumDetail(res.data[dat].description)
            setPlatiniumPrice(res.data[dat].price)

          }
            // data[key] = res.data[dat]
            // setData(data);
          }
        }
        // console.log(data)
      })
      .catch((err) => {
        console.log(err);
        //   alert(err)
      });
  }, []);

  const logout_user = () => {
    console.log("logouting the user");
    logout();
    setRedirect(true);
  };
  const renderHtml = (description) => {
    return description;
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
                    <div class="row">
                      <div class="col-xs-12 col-sm-4">
                        <a href="#">
                          <div class="package-box">
                            <div class="icon">
                              <img src={kite} alt="icon" />
                            </div>

                            <div class="price-box">
                              <h3>Silver Package</h3>
                              {
                                silverDetail!== ""?
                                <>
                                 <h4>${silverPrice}</h4>
                                 <h5>Per Month</h5>

                                 <div
                                    style={{color:'black',fontSize:'18'}}
                                    className="editor"
                                    dangerouslySetInnerHTML={{ __html: renderHtml(silverDetail) }}
                                  ></div>
                                </>
                                :
                                null
                              }
                             
                             
                              <Link to={`/payment/${1}`}>
                              <ButtonLoader
                                // submit={(e) => onsubmit(e)}
                                isLoad={isLoading}
                                title={"Edit"}
                                titleLoad={"Submitting"}
                              />
                              </Link>
                            </div>
                            {/* <div class="dropdown action-btn">
                              <a
                                href="javascript:void(0);"
                                type="button"
                                id="dropdownMenu2"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i class="fa fa-ellipsis-v"></i>
                              </a>
                              <div
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenu2"
                              >
                                <button class="dropdown-item" type="button">
                                  Edit
                                </button>
                                <button class="dropdown-item" type="button">
                                  Delete
                                </button>
                              </div>
                            </div> */}
                          </div>
                        </a>
                      </div>
                      <div class="col-xs-12 col-sm-4">
                        <a href="#">
                          <div class="package-box">
                            <div class="icon">
                              <img src={plane} alt="icon" />
                            </div>
                            <div class="price-box">
                              <h3>Gold Package</h3>
                            
                              {
                                goldPrice!==""?
                                <>
                                 <h4>${goldPrice}</h4>
                                 <h5>Per Month</h5>

                                 <div
                                    style={{color:'black',fontSize:'18px'}}
                                    className="editor"
                                    dangerouslySetInnerHTML={{ __html: renderHtml(goldDetail) }}
                                  ></div>
                                </>
                                :
                                null
                              }
                              

                              <Link to={`/payment/${2}`}>
                              <ButtonLoader
                                // submit={(e) => onsubmit(e)}
                                isLoad={isLoading}
                                title={"Edit"}
                                titleLoad={"Submitting"}
                              />
                              </Link>
                            </div>
                            {/* <div class="dropdown action-btn">
                              <a
                                href="javascript:void(0);"
                                type="button"
                                id="dropdownMenu2"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i class="fa fa-ellipsis-v"></i>
                              </a>
                              <div
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenu2"
                              >
                                <button class="dropdown-item" type="button">
                                  Edit
                                </button>
                                <button class="dropdown-item" type="button">
                                  Delete
                                </button>
                              </div>
                            </div>
                           */}
                          </div>
                        </a>
                      </div>
                      <div class="col-xs-12 col-sm-4">
                        <a href="#">
                          <div class="package-box">
                            <div class="icon">
                              <img src={flight} alt="icon" />
                            </div>
                            <div class="price-box">
                              <h3>Platinium Package</h3>
                              {
                               platiniumDetail!==""?
                                <>
                                 <h4>${platiniumPrice}</h4>
                                 <h5>Per Month</h5>

                                 <div
                                    style={{color:'black',fontSize:'18px'}}
                                    className="editor"
                                    dangerouslySetInnerHTML={{ __html: renderHtml(platiniumDetail) }}
                                  ></div>

                                </>
                                :
                                null
                              }                              
                              <Link to={`/payment/${3}`}>
                              <ButtonLoader
                                // submit={(e) => onsubmit(e)}
                                isLoad={isLoading}
                                title={"Edit"}
                                titleLoad={"Submitting"}
                              />
                              </Link>
                            </div>
                            {/* <div class="dropdown action-btn">
                              <a
                                href="javascript:void(0);"
                                type="button"
                                id="dropdownMenu2"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i class="fa fa-ellipsis-v"></i>
                              </a>
                              <div
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenu2"
                              >
                                <button class="dropdown-item" type="button">
                                  Edit
                                </button>
                                <button class="dropdown-item" type="button">
                                  Delete
                                </button>
                              </div>
                            </div>
                           */}
                          </div>
                        </a>
                      </div>
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

export default connect(mapStateToProps, { logout })(Payment);
