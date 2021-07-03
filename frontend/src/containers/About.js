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

const About = () =>{

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
                  <Link class="nav-link" to='/listing' role='button'>  Listing</Link>

                    {/* <a class="nav-link" href="#">Pricing</a> */}
                  </li>
                  {/* <li class="nav-item">
                  <Link class="nav-link" to='/about' role='button'>  About</Link>

                    <a class="nav-link" href="#">About</a>
                  </li> */}
                  <li class="nav-item">
                  <Link class="nav-link btn btn-green " to='/contact' role='button'>  Contact</Link>

                    {/* <a  href="#">Contact</a> */}
                  </li>
                </ul>
              </div>
            </div>
          </nav>   
        </header>
      
        <div class="banner-inner"
        style={{background:`url(${banner})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto'}}
        >
          <div class="container">
            <h1>About Us</h1>
          </div>
        </div>
        <div class="about-text-sec">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6">
                <div class="s-choose-img p-relative animation-element">
                  <div class="shape-img">
                    <img src={shape1} alt="img" class="s-choose-shape d-none d-lg-block"/>
                  </div>
                  <div class="row">
                    <div class="col-sm-6 padding-right-0">
                      <div class="img-holder">
                        <img class="an-img-1" src={image1} alt="img" class="sc-top-img d-none d-lg-block" 
        style={{
            position: "absolute",
            height:'100%',  
            objectFit:'cover',
            top: "40px",
            maxWidth: "100%",
            transform:"translate3d(0px, 45.115px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
            "-webkit-transform":"translate3d(0px, 45.115px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)"
          
        }}
                        />

                      </div>
                    </div>
                    <div class="col-sm-6 padding-right-0">
                      <div class="img-holder">
                        <img class="an-img-2" src={image3} alt="img" class="sc-middle-img d-none d-lg-block" 
        style={{
            position: "relative",
            left: "-30px",
            top: "60px",
            zIndex:" -1",
            maxWidth: "100%",
            transform:"translate3d(16.005px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
            "-webkit-transform":"translate3d(16.005px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)"
          
        }}
                        />
                      </div>
                    </div>
                      <div class="col-md-7 offset-sm-1">
                        <div class="img-holder">
                          <img class="an-img-3" class="ab-first" src={image2} alt="img"/>
                        </div>
                      </div>
                  </div>      
                </div>
              </div>
              <div class="col-sm-6">
                <div class="about-content">
                  <strong><span class="border-center"></span> About Us</strong>
                  <h3>What is Aptillion?</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="how-it-work text-center">
            <h3>How Aptillion Works</h3>
            <div class="row">
              <div class="col-xs-12 col-sm-4">
                <div class="steps-box">
                  <div class="icon-holder">
                    <img src={icon1} alt="icon" />
                  </div>
                  <div class="icon-content">
                    <strong>Choose what to do</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-4">
                <div class="steps-box">
                  <div class="icon-holder">
                    <img src={icon2} alt="icon" />
                  </div>
                  <div class="icon-content">
                    <strong>Find what you want</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-4">
                <div class="steps-box">
                  <div class="icon-holder">
                    <img src={icon3} alt="icon" />
                  </div>
                  <div class="icon-content">
                    <strong>Explore amazing Properties</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="skyline-img">
          <img src={skyline} alt="image" />
        </div>
        
        <div class="container">
          <div class="exlpore-cta"
           style={{background:`url(${cta})`,
           backgroundRepeat: 'repeat',
           backgroundSize: 'auto'}}
          >
            <div class="row">
              <div class="col-xs-12 col-md-8">
                <small>Once you’ve settled on a property</small>
                <h3>Be inspired to achieve more, get on top of every business challenge today</h3>
                <a href="#" class="">Explore More</a>
              </div>
            </div>
          </div>
        </div>
        
      </main>
     <Footer/>
      </div>
</>

)

}

export default About
