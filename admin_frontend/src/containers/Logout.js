import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login, removeError } from "../actions/auth";
import login_main_image from "../img/Icon/login.jpg";
import logo from "../img/logo.png";
import svg from "./test.svg";
const Logout = ({ isAuthenticated, isError }) => {
  return (
    <div>
      <div
        class="accountbg"
        style={{
          background: `url(${login_main_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div class="wrapper-page account-page-full">
        <div class="card">
          <div class="card-block">
            <div class="account-box">
              <div class="card-box p-5">
                <h2 class="text-uppercase text-center pb-4">
                  <a href="index.html" class="text-success">
                    <span>
                      <img src={logo} alt="" height="26" />
                    </span>
                  </a>
                </h2>

                <div class="text-center m-b-20">
                  <div class="m-b-20">
                    <div class="checkmark">
                      <img src={svg} />
                    </div>
                  </div>

                  <h4>See You Again !</h4>

                  <p class="text-muted font-14 m-t-10">
                    {" "}
                    You are now successfully sign out. Back to{" "}
                    <a href="page-login.html" class="text-dark m-r-5">
                      <b>
                        <Link to="/">Sign In</Link>
                      </b>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="m-t-40 text-center">
          <p class="account-copyright">2021 © Aptillion</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isError: state.auth.isError,
});

export default connect(mapStateToProps, { login, removeError })(Logout);
