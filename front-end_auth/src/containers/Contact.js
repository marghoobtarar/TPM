import React from 'react'
import { Link } from 'react-router-dom'
import image1 from "../img/s_choose_img01.png"
import shape1 from "../img/shape-1.png";
import image3 from "../img/s_choose_img03.png"
import image2 from "../img/s_choose_img02.png"
import icon2 from "../img/Icon/icon-2.png"
import icon3 from "../img/Icon/icon-3.png"
import skyline from "../img/skyline.png" 
import banner from '../img/banner-1.png'
import cta from '../img/cta-bg.png'
import icon1 from '../img/Icon/icon-1.png'
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import logo from '../img/logo.png'

const Contact = () =>{

return(
<>
<div id="wrapper">
<TopNav/>

 <main>
       <header class="inner-header">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
              <a class="navbar-brand" href="#">
                  {/* <img src="img/logo.png" alt="logo" /> */}
                  <Link class='' to='/' role='button'>  <img src={logo} alt="logo" /></Link>

                  
                  </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="nav navbar-nav ml-auto">
                  <li class="nav-item">
                  <Link class="nav-link" to='/' role='button'>  Home</Link>

                    {/* <a class="nav-link" href="#">Home </a> */}
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="#">Explore</a> */}
                    <Link class="nav-link" to='/explore' role='button'>  Explore</Link>

                  </li>
                  <li class="nav-item">
                  <Link class="nav-link" to='/pricing' role='button'>  Pricing</Link>

                    {/* <a class="nav-link" href="#">Pricing</a> */}
                  </li>
                  <li class="nav-item">
                  <Link class="nav-link" to='/about' role='button'>  About</Link>

                    {/* <a class="nav-link" href="#">Pricing</a> */}
                  </li>
                  {/* <li class="nav-item">
                  <Link class="nav-link" to='/about' role='button'>  About</Link>

                    <a class="nav-link" href="#">About</a>
                  </li> */}
                  <li class="nav-item">
                  <Link class="nav-link btn btn-green " to='/about' role='button'>  Contact</Link>

                    {/* <a  href="#">Contact</a> */}
                  </li>
                </ul>
              </div>
            </div>
          </nav>   
        </header>
      
        <div class="banner-inner"
        style={{
            
                width: "100%",
                height: "auto",
                 background: `url(${banner})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "auto",
                backgroundRepeat:" no-repeat",
                backgroundSize: "cover",
                height: "auto",
                marginBottom:"0px",
                padding: "100px 0",
                backgroundPosition: "center",
                textAlign: "center",
              
        }}>
          <div class="container">
            <h1>Contact Us</h1>
          </div>
        </div>
        <div class="container" >
          <div class="row"style={{marginTop:'30px'}}>
            <div class="col-sm-4 col-md-4">
              <div class="contact-info-box">
                <h1>Contact Info</h1>
                <strong>Address:</strong>
                <p>36, Aptilion Convent Street, <br /> Zabbar, ZBR 1351</p>
                <strong>Email:</strong>
                <p><a href="mailto:info@Aptilion.com"> info@Aptilion.com</a></p>
                <strong>Phone:</strong>
                <p><a href="tel:(+356) 9922 4425"> (+356) 9922 4425</a></p>
              </div>
            </div>
            <div class="col-sm-8 col-md-8">
              <div class="map-sec">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.1718175715837!2d151.147016015705!3d-33.91097722868161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b07b9265aa1d%3A0xfed175c84137bb56!2sLivingstone%20Rd%2C%20Sydney%20NSW%2C%20Australia!5e0!3m2!1sen!2s!4v1580728479674!5m2!1sen!2s" width="100%" height="350" frameborder="0" style={{border:'0'}} allowfullscreen=""></iframe>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <form>
              <div class="row">
                <div class="col-sm-4 col-md-4">
                  <div class="input-field">
                    <input type="text" placeholder="Name" class="form-control" name=""/>
                  </div>
                </div>
                <div class="col-sm-4 col-md-4">
                  <div class="input-field">
                    <input type="Email" placeholder="Email" class="form-control" name=""/>
                  </div>
                </div>
                <div class="col-sm-4 col-md-4">
                  <div class="input-field">
                    <input type="Email" placeholder="Phone" class="form-control" name=""/>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-md-12">
                  <textarea placeholder="Message" class="form-control"></textarea>
                  <button class="btn btn-md btn-send  text-center">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
     <Footer/>
      </div>
</>

)

}

export default Contact
