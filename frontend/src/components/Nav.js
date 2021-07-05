import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/header-logo.png";

const Nav = () => {
  const [location, setLocation] = useState(window.location.pathname);
  useEffect(() => {
    console.log("the here is", window.location.pathname);
  });

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item " onClick={(e) => setLocation("/")}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <a
                  class={`nav-link ${location === "/" ? "active" : ""} `}
                  href="#"
                >
                  Home <span class="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li class="nav-item" onClick={(e) => setLocation("/about")}>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <a
                  class={`nav-link ${location === "/about" ? "active" : ""} `}
                  href="#"
                >
                  About Us
                </a>
              </Link>
            </li>
            <li
              class="nav-item dropdown"
              onClick={(e) => setLocation("/services")}
            >
              <Link to="/services" style={{ textDecoration: "none" }}>
                <a
                  class={`nav-link dropdown-toggle ${
                    location === "/services" ? "active" : ""
                  } `}
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products and Services
                </a>
              </Link>

              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <div class="container">
                  <div class="row">
                    <div class="col-md-2">
                      <h5 class="text-uppercase text-black">Services</h5>
                      <ul class="nav flex-column">
                        <li>
                          <a href="">Custom Software Development</a>
                        </li>
                        <li>
                          <a href="">Web App Development</a>
                        </li>
                        <li>
                          <a href="">Mobile App Development</a>
                        </li>
                        <li>
                          <a href="">UI/UX Design</a>
                        </li>
                        <li>
                          <a href="">QA &amp; Testing</a>
                        </li>
                        <li>
                          <a href="">Devops</a>
                        </li>
                        <li>
                          <a href="">Discovery Workshop</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-2">
                      <h5 class="text-uppercase text-black">
                        Engagement Models
                      </h5>
                      <ul class="nav flex-column">
                        <li>
                          <a href="">Team Augmentation</a>
                        </li>
                        <li>
                          <a href="">Fixed Price</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-2">
                      <h5 class="text-uppercase text-black">
                        Enterprise Solutions
                      </h5>
                      <ul class="nav flex-column">
                        <li>
                          <a href="#">SharePoint </a>
                        </li>
                        <li>
                          <a href="#">MS Dynamics </a>
                        </li>
                        <li>
                          <a href="#">Salesforce </a>
                        </li>
                        <li>
                          <a href="">Workday</a>
                        </li>
                        <li>
                          <a href="#">Azure </a>
                        </li>
                        <li>
                          <a href="#">AWS </a>
                        </li>
                        <li>
                          <a href="#">Shopify </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-2">
                      <h5 class="text-uppercase text-black">
                        Industry Solutions
                      </h5>
                      <ul class="nav flex-column">
                        <li>
                          <a href="">Data science</a>
                        </li>
                        <li>
                          <a href="">Internet of Things</a>
                        </li>
                        <li>
                          <a href="">Retail</a>
                        </li>
                        <li>
                          <a href="">Healthcare</a>
                        </li>
                        <li>
                          <a href="">Fintech</a>
                        </li>
                        <li>
                          <a href="">E-Learning</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-2">
                      <a href="">
                        <img
                          src="./Assets/images/mega-menu-img.jpg"
                          alt=""
                          class="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item" onClick={(e) => setLocation("/contact-us")}>
              <Link to="/contact-us" style={{ textDecoration: "none" }}>
                <a
                  class={`nav-link ${
                    location === "/contact-us" ? "active" : ""
                  } `}
                  href="#"
                >
                  Contacts Us
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Subscriptions
              </a>
            </li>
            <li class="nav-item" onClick={(e) => setLocation("/login")}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <a
                  class={`nav-link ${location === "/login" ? "active" : ""} `}
                  href="#"
                >
                  User Login
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                {" "}
                <i class="fa fa-user-circle"></i> Log in{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!------Global solution-----> */}
      <section id="global tpm" class="global">
        <div class="container">
          <div class="row">
            <h1>Global TPM Solutions</h1>
            <p>One shop for all your maintenance activities</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nav;
