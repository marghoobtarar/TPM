import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchLocationInput from "../components/SearchLocationInput";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import logo from "../img/logo.png";
import Sidebar from "../components/Sidebar";
const Home = ({ logout, isAuthenticated }) => {
  const [redirect, setRedirect] = useState(false);

  const logout_user = () => {
    console.log("logouting the user");
    logout();
    setRedirect(true);
  };

  return (
    <div className="">
      {redirect ? <Redirect to="/logout" /> : null}

      <div id="wrapper">
        <Sidebar />

        <div class="content-page">
          <div class="topbar">
            <nav class="navbar-custom">
              <ul class="list-unstyled topbar-right-menu float-right mb-0">
                <li class="hide-phone app-search">
                  <form>
                    <input
                      type="text"
                      placeholder="Search..."
                      class="form-control"
                    />
                    <button type="submit">
                      <i class="fa fa-search"></i>
                    </button>
                  </form>
                </li>

                <li class="dropdown notification-list">
                  <a
                    class="nav-link dropdown-toggle nav-user"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                  >
                    <img
                      src="assets/images/users/avatar-1.jpg"
                      alt="user"
                      class="rounded-circle"
                    />{" "}
                    <span class="ml-1">
                      TPM Solution<i class="mdi mdi-chevron-down"></i>{" "}
                    </span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown">
                    <div class="dropdown-item noti-title">
                      <h6 class="text-overflow m-0">Welcome !</h6>
                    </div>

                    <a
                      href="#"
                      onClick={(e) => logout_user()}
                      class="dropdown-item notify-item"
                    >
                      <i class="fi-power"></i> <span> Logout</span>
                    </a>
                  </div>
                </li>
              </ul>

              <ul class="list-inline menu-left mb-0">
                <li class="float-left">
                  <button class="button-menu-mobile open-left disable-btn">
                    <i class="dripicons-menu"></i>
                  </button>
                </li>
                <li>
                  <div class="page-title-box">
                    <h4 class="page-title">Dashboard </h4>
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item active">
                        Welcome to TPM Solution admin panel !
                      </li>
                    </ol>
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          <div class="content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-xl-12">
                  <div class="card-box">
                    <h4 class="header-title mb-3">Registered Users</h4>

                    <div class="table-responsive">
                      <table class="table table-hover table-centered m-0">
                        <thead>
                          <tr>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Currency</th>
                            <th>Balance</th>
                            <th>Reserved in orders</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="assets/images/users/avatar-2.jpg"
                                alt="contact-img"
                                title="contact-img"
                                class="rounded-circle thumb-sm"
                              />
                            </td>

                            <td>
                              <h5 class="m-0 font-weight-normal">Tomaslau</h5>
                              <p class="mb-0 text-muted">
                                <small>Member Since 2017</small>
                              </p>
                            </td>

                            <td>
                              <i class="mdi mdi-currency-btc text-primary"></i>{" "}
                              BTC
                            </td>

                            <td>0.00816117 BTC</td>

                            <td>0.00097036 BTC</td>

                            <td>
                              <a href="#" class="btn btn-sm btn-custom">
                                <i class="mdi mdi-plus"></i>
                              </a>
                              <a href="#" class="btn btn-sm btn-danger">
                                <i class="mdi mdi-minus"></i>
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <img
                                src="assets/images/users/avatar-3.jpg"
                                alt="contact-img"
                                title="contact-img"
                                class="rounded-circle thumb-sm"
                              />
                            </td>

                            <td>
                              <h5 class="m-0 font-weight-normal">
                                Erwin E. Brown
                              </h5>
                              <p class="mb-0 text-muted">
                                <small>Member Since 2017</small>
                              </p>
                            </td>

                            <td>
                              <i class="mdi mdi-currency-eth text-primary"></i>{" "}
                              ETH
                            </td>

                            <td>3.16117008 ETH</td>

                            <td>1.70360009 ETH</td>

                            <td>
                              <a href="#" class="btn btn-sm btn-custom">
                                <i class="mdi mdi-plus"></i>
                              </a>
                              <a href="#" class="btn btn-sm btn-danger">
                                <i class="mdi mdi-minus"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="assets/images/users/avatar-4.jpg"
                                alt="contact-img"
                                title="contact-img"
                                class="rounded-circle thumb-sm"
                              />
                            </td>

                            <td>
                              <h5 class="m-0 font-weight-normal">
                                Margeret V. Ligon
                              </h5>
                              <p class="mb-0 text-muted">
                                <small>Member Since 2017</small>
                              </p>
                            </td>

                            <td>
                              <i class="mdi mdi-currency-eur text-primary"></i>{" "}
                              EUR
                            </td>

                            <td>25.08 EUR</td>

                            <td>12.58 EUR</td>

                            <td>
                              <a href="#" class="btn btn-sm btn-custom">
                                <i class="mdi mdi-plus"></i>
                              </a>
                              <a href="#" class="btn btn-sm btn-danger">
                                <i class="mdi mdi-minus"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="assets/images/users/avatar-5.jpg"
                                alt="contact-img"
                                title="contact-img"
                                class="rounded-circle thumb-sm"
                              />
                            </td>

                            <td>
                              <h5 class="m-0 font-weight-normal">
                                Jose D. Delacruz
                              </h5>
                              <p class="mb-0 text-muted">
                                <small>Member Since 2017</small>
                              </p>
                            </td>

                            <td>
                              <i class="mdi mdi-currency-cny text-primary"></i>{" "}
                              CNY
                            </td>

                            <td>82.00 CNY</td>

                            <td>30.83 CNY</td>

                            <td>
                              <a href="#" class="btn btn-sm btn-custom">
                                <i class="mdi mdi-plus"></i>
                              </a>
                              <a href="#" class="btn btn-sm btn-danger">
                                <i class="mdi mdi-minus"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="assets/images/users/avatar-6.jpg"
                                alt="contact-img"
                                title="contact-img"
                                class="rounded-circle thumb-sm"
                              />
                            </td>

                            <td>
                              <h5 class="m-0 font-weight-normal">
                                Luke J. Sain
                              </h5>
                              <p class="mb-0 text-muted">
                                <small>Member Since 2017</small>
                              </p>
                            </td>

                            <td>
                              <i class="mdi mdi-currency-btc text-primary"></i>{" "}
                              BTC
                            </td>

                            <td>2.00816117 BTC</td>

                            <td>1.00097036 BTC</td>

                            <td>
                              <a href="#" class="btn btn-sm btn-custom">
                                <i class="mdi mdi-plus"></i>
                              </a>
                              <a href="#" class="btn btn-sm btn-danger">
                                <i class="mdi mdi-minus"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <footer class="footer">
        2021 © Aptillion. 
    </footer> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Home);
