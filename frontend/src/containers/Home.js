import React,{useEffect,useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchLocationInput from '../components/SearchLocationInput';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import banner from '../img/banner-1.png'
import cta from '../img/cta-bg.png'
import testimonial from '../img/testimotional-bg.png'
import logo from '../img/logo.png'
import img1 from '../img/img-1.png'
import img2 from '../img/img-2.png'
import img3 from '../img/img-3.png'
import shadow from "../img/shadow.png"
import chart from "../img/chart.png" 
import icon1 from "../img/Icon/icon-1.png"
import icon2 from "../img/Icon/icon-2.png"
import icon3 from "../img/Icon/icon-3.png"
import location1 from "../img/location-1.png"
import location2 from "../img/location-2.png"
import location3 from "../img/location-3.png"
import location4 from "../img/location-4.png"
import quotes from "../img/quotes.png"
import take_image from "../img/take-img.png"
import left_arrow from "../img/left-arrow.png"
import right_arrow from "../img/right-arrow.png"
import skyline from "../img/skyline.png"
import blog1 from "../img/blog-1.png"
import blog2 from "../img/blog-2.png"
import blog3 from "../img/blog-3.png"
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';







const Home = ({ isAuthenticated }) => {
  const [redirect, setRedirect] = useState(isAuthenticated);

  useEffect(()=>{
    console.log(isAuthenticated)
    if(isAuthenticated){
      setRedirect(true)
    }
    
    
         },[isAuthenticated])

  // if(redirect){
  //   <Redirect to='/dashboard'/>
  // }

  return(
  <>
  {/* {redirect?    <Redirect to='/dashboard'/>:null} */}
 

    <div id="wrapper">
     <TopNav/>
      <main>
        <div class="banner"
        style={{background:`url(${banner})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto'}}
        >
          <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container">
                <a class="navbar-brand" href="#">
                  
                  <Link class='' to='/' role='button'>  <img src={logo} alt="logo" /></Link>

                  </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item">
                      {/* <a  href="#"> */}

                        
                        <Link class="nav-link" to='/' >  Home</Link>

                        {/* </a> */}
                    </li>
                    <li class="nav-item">
                      {/* <a  href="#"> */}
                      <Link class="nav-link" to='/explore' role='button'>  Explore</Link>

                      {/* </a> */}
                    </li>
                    <li class="nav-item">
                      {/* <a class="nav-link" href="#"> */}
                      <Link class="nav-link" to='/pricing' role='button'>  Pricing</Link>

                      {/* </a> */}
                    </li>
                    <li class="nav-item">
                      {/* <a class="nav-link" href="#"> */}
                        
                        <Link class="nav-link" to='/about' role='button'>  About</Link>

                        {/* </a> */}
                    </li>
                    <li class="nav-item">
                      {/* <a class="nav-link" href="#"> */}
                        
                        <Link class="nav-link" to='/listing' role='button'>  Listing</Link>

                        {/* </a> */}
                    </li>
                    <li class="nav-item">
                      {/* <a  href="#"> */}
                      <Link class="nav-link btn btn-green " to='/contact' role='button'> Contact</Link>


                      {/* </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </nav>   
          </header>
          
          <div class="container">
            <div class="banner-centent">
              <strong>Use analytics to ﬁnd lucrative traditional properties in a matter of minutes.</strong>
              <h1>investment property begins Here</h1>
              <div class="search-form-sec">
                <form>
                  <div class="row">
                    <div class="col-sm-10">
                    <SearchLocationInput onChange={() => null} />

                      {/* <input type="text" class="form-control" placeholder="Enter an address" name="" /> */}
                    </div>
                    {/* <div class="col-sm-3">
                      <select class="form-select form-control border-left" aria-label="Default select example">
                        <option selected>Select City </option>
                        <option value="1">USA</option>
                        <option value="2">UK</option>
                        <option value="3">SA</option>
                      </select>
                    </div>
                    <div class="col-sm-3">
                      <select class="form-select form-control border-left" aria-label="Default select example">
                        <option selected>Select State </option>
                        <option value="1">NY</option>
                        <option value="2">NY</option>
                        <option value="3">NY</option>
                      </select>
                    </div> */}
                    <div class="col-sm-2">
                      <button type="submit" class="btn btn-md btn-search "><i class="fa fa-search"></i> Search</button>
                    </div>
                  </div>
                </form>
              </div>
              <p>Popular searches: Enter an address, neighborhood, city or ZIP code</p>
            </div>
          </div>
        </div>
        <div class="recent-investment-sec">
          <div class="container">
            <div class="title-sec text-center">
              <h3>Recent investment opportunities</h3>
              <p>17.04% annual return rate, 47560 active users from 121 countries & 240 investment opportunities</p>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-4">
                <div class="property-item">
                  <div class="img-holder">
                    <img src={img1} alt="img" />
                    <div class="d-flex justify-content-sm-between">
                      <small class="justify-content-sm-between">Residential</small>
                      <small class="justify-content-sm-between"><i  class="fa fa-info-circle"></i>Cash On Cash</small>
                    </div>
                  </div>
                  <div class="property-content">
                    <strong>Eden Luxury Penthouse Apartments </strong>
                    <small>Dramatic panoramic views from this...</small>
                    <div class="d-flex justify-content-sm-between price-list">
                      <small class="justify-content-sm-between">$479,000</small>
                      <small class="justify-content-sm-between">3 Beds, 2 Baths</small>
                    </div>
                    <div class="d-flex justify-content-sm-between mb-2">
                      <small class="justify-content-sm-between"><i class="fa fa-user mr-2"></i>Idyllwild</small>
                      <small class="justify-content-sm-between">CA 92549</small>
                    </div>
                    <div class="sq-sec text-center">
                      <div class="row">
                        <div class="col-xs-6 col-sm-6 border-right">
                          <p>1,820</p>
                          <small>Sq.Ft.</small>
                        </div>
                        <div class="col-xs-6 col-sm-6 ">
                          <p>$263</p>
                          <small>/ Sq.Ft.</small>
                        </div>
                      </div>
                    </div>
                    <small class="text-center mb-10">Days on Market: 2 Weeks</small>
                  </div>
                  <a href="#" class="btn btn-unlock "><i class="fa fa-lock"></i> Unlock Analytics</a>
                </div>
              </div>
              <div class="col-xs-12 col-sm-4">
                <div class="property-item">
                  <div class="img-holder">
                    <img src={img2} alt="img" />
                    <div class="d-flex justify-content-sm-between">
                      <small class="justify-content-sm-between">Residential</small>
                      <small class="justify-content-sm-between"><i  class="fa fa-info-circle"></i>Cash On Cash</small>
                    </div>
                  </div>
                  <div class="property-content">
                    <strong>Eden Luxury Penthouse Apartments </strong>
                    <small>Dramatic panoramic views from this...</small>
                    <div class="d-flex justify-content-sm-between price-list">
                      <small class="justify-content-sm-between">$479,000</small>
                      <small class="justify-content-sm-between">3 Beds, 2 Baths</small>
                    </div>
                    <div class="d-flex justify-content-sm-between mb-2">
                      <small class="justify-content-sm-between"><i class="fa fa-user mr-2"></i>Idyllwild</small>
                      <small class="justify-content-sm-between">CA 92549</small>
                    </div>
                    <div class="sq-sec text-center">
                      <div class="row">
                        <div class="col-xs-6 col-sm-6 border-right">
                          <p>1,820</p>
                          <small>Sq.Ft.</small>
                        </div>
                        <div class="col-xs-6 col-sm-6 ">
                          <p>$263</p>
                          <small>/ Sq.Ft.</small>
                        </div>
                      </div>
                    </div>
                    <small class="text-center mb-10">Days on Market: 2 Weeks</small>
                  </div>
                  <a href="#" class="btn btn-unlock "><i class="fa fa-lock"></i> Unlock Analytics</a>
                </div>
              </div>
              <div class="col-xs-12 col-sm-4">
                <div class="property-item">
                  <div class="img-holder">
                    <img src={img3} alt="img" />
                    <div class="d-flex justify-content-sm-between">
                      <small class="justify-content-sm-between">Residential</small>
                      <small class="justify-content-sm-between"><i  class="fa fa-info-circle"></i>Cash On Cash</small>
                    </div>
                  </div>
                  <div class="property-content">
                    <strong>Eden Luxury Penthouse Apartments </strong>
                    <small>Dramatic panoramic views from this...</small>
                    <div class="d-flex justify-content-sm-between price-list">
                      <small class="justify-content-sm-between">$479,000</small>
                      <small class="justify-content-sm-between">3 Beds, 2 Baths</small>
                    </div>
                    <div class="d-flex justify-content-sm-between mb-2">
                      <small class="justify-content-sm-between"><i class="fa fa-user mr-2"></i>Idyllwild</small>
                      <small class="justify-content-sm-between">CA 92549</small>
                    </div>
                    <div class="sq-sec text-center">
                      <div class="row">
                        <div class="col-xs-6 col-sm-6 border-right">
                          <p>1,820</p>
                          <small>Sq.Ft.</small>
                        </div>
                        <div class="col-xs-6 col-sm-6 ">
                          <p>$263</p>
                          <small>/ Sq.Ft.</small>
                        </div>
                      </div>
                    </div>
                    <small class="text-center mb-10">Days on Market: 2 Weeks</small>
                  </div>
                  <a href="#" class="btn btn-unlock "><i class="fa fa-lock"></i> Unlock Analytics</a>
                </div>
              </div>
              <div class="col-xs-12 col-sm-4">
                <div class="property-item">
                  <div class="img-holder">
                    <img src={img2} alt="img" />
                    <div class="d-flex justify-content-sm-between">
                      <small class="justify-content-sm-between">Residential</small>
                      <small class="justify-content-sm-between"><i  class="fa fa-info-circle"></i>Cash On Cash</small>
                    </div>
                  </div>
                  <div class="property-content">
                    <strong>Eden Luxury Penthouse Apartments </strong>
                    <small>Dramatic panoramic views from this...</small>
                    <div class="d-flex justify-content-sm-between price-list">
                      <small class="justify-content-sm-between">$479,000</small>
                      <small class="justify-content-sm-between">3 Beds, 2 Baths</small>
                    </div>
                    <div class="d-flex justify-content-sm-between mb-2">
                      <small class="justify-content-sm-between"><i class="fa fa-user mr-2"></i>Idyllwild</small>
                      <small class="justify-content-sm-between">CA 92549</small>
                    </div>
                    <div class="sq-sec text-center">
                      <div class="row">
                        <div class="col-xs-6 col-sm-6 border-right">
                          <p>1,820</p>
                          <small>Sq.Ft.</small>
                        </div>
                        <div class="col-xs-6 col-sm-6 ">
                          <p>$263</p>
                          <small>/ Sq.Ft.</small>
                        </div>
                      </div>
                    </div>
                    <small class="text-center mb-10">Days on Market: 2 Weeks</small>
                  </div>
                  <a href="#" class="btn btn-unlock "><i class="fa fa-lock"></i> Unlock Analytics</a>
                </div>
              </div>
              <div class="col-xs-12 col-sm-4">
                <div class="property-item p-reletive">
                  <div class="img-holder">
                    <img src={img1} alt="img" />
                    <div class="d-flex justify-content-sm-between">
                      <small class="justify-content-sm-between">Residential</small>
                      <small class="justify-content-sm-between"><i  class="fa fa-info-circle"></i>Cash On Cash</small>
                    </div>
                  </div>
                  <div class="property-content">
                    <strong>Eden Luxury Penthouse Apartments </strong>
                    <small>Dramatic panoramic views from this...</small>
                    <div class="d-flex justify-content-sm-between price-list">
                      <small class="justify-content-sm-between">$479,000</small>
                      <small class="justify-content-sm-between">3 Beds, 2 Baths</small>
                    </div>
                    <div class="d-flex justify-content-sm-between mb-2">
                      <small class="justify-content-sm-between"><i class="fa fa-user mr-2"></i>Idyllwild</small>
                      <small class="justify-content-sm-between">CA 92549</small>
                    </div>
                    <div class="sq-sec text-center">
                      <div class="row">
                        <div class="col-xs-6 col-sm-6 border-right">
                          <p>1,820</p>
                          <small>Sq.Ft.</small>
                        </div>
                        <div class="col-xs-6 col-sm-6 ">
                          <p>$263</p>
                          <small>/ Sq.Ft.</small>
                        </div>
                      </div>
                    </div>
                    <small class="text-center mb-10">Days on Market: 2 Weeks</small>
                  </div>
                  <a href="#" class="btn btn-unlock "><i class="fa fa-lock"></i> Unlock Analytics</a>
                  <div class="lock-analytics-box">
                    <a href="#" class="btn btn-lock-analytics"> <i class="fa fa-lock"></i> Unlock Analytics</a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-4">
                <div class="property-item p-reletive">
                  <div class="img-holder">
                    <img src={img1} alt="img" />
                    <div class="d-flex justify-content-sm-between">
                      <small class="justify-content-sm-between">Residential</small>
                      <small class="justify-content-sm-between"><i  class="fa fa-info-circle"></i>Cash On Cash</small>
                    </div>
                  </div>
                  <div class="property-content">
                    <strong>Eden Luxury Penthouse Apartments </strong>
                    <small>Dramatic panoramic views from this...</small>
                    <div class="d-flex justify-content-sm-between price-list">
                      <small class="justify-content-sm-between">$479,000</small>
                      <small class="justify-content-sm-between">3 Beds, 2 Baths</small>
                    </div>
                    <div class="d-flex justify-content-sm-between mb-2">
                      <small class="justify-content-sm-between"><i class="fa fa-user mr-2"></i>Idyllwild</small>
                      <small class="justify-content-sm-between">CA 92549</small>
                    </div>
                    <div class="sq-sec text-center">
                      <div class="row">
                        <div class="col-xs-6 col-sm-6 border-right">
                          <p>1,820</p>
                          <small>Sq.Ft.</small>
                        </div>
                        <div class="col-xs-6 col-sm-6 ">
                          <p>$263</p>
                          <small>/ Sq.Ft.</small>
                        </div>
                      </div>
                    </div>
                    <small class="text-center mb-10">Days on Market: 2 Weeks</small>
                  </div>
                  <a href="#" class="btn btn-unlock "><i class="fa fa-lock"></i> Unlock Analytics</a>
                  <div class="lock-analytics-box">
                    <a href="#" class="btn btn-lock-analytics"> <i class="fa fa-lock"></i> Unlock Analytics</a>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" class="more-propety">More Properties <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
        <div class="shadow-img">
          <img src={shadow} alt="shadow" />
        </div>
        <div class="chart-sec">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-5">
                <div class="money-grow-text">
                  <h3>Make your money grow</h3>
                  <p>Investing with Aptillion can earn you higher returns compared to other investment opportunities</p>
                  <strong>$1,221,133</strong>
                  <small>earned by investors last week</small>
                </div>
              </div>
              <div class="col-xs-12 col-sm-7">
                <div class="chart-img-holder">
                  <img src={chart} alt="chart" />
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
          <div class="popular-location-sec">
            <small>Most Popular Locations</small>
            <h3>Be inspired to achieve more, get on top of <br />every business challenge today</h3>
            <div class="row">
              <div class="col-xs-12 col-sm-3">
                <div class="city-box">
                  <img src={location1} alt="New York" />
                  <div class="property-list-content">
                    <h4>California</h4>
                    <p>16 Properties</p>
                    <a href="#" class="btn btn-location ">Town Hall Square</a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-3">
                <div class="city-box">
                  <img src={location2} alt="New York" />
                  <div class="property-list-content">
                    <h4>Frankistien</h4>
                    <p>18 Properties</p>
                    <a href="#" class="btn btn-location ">The Gallery</a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-3">
                <div class="city-box">
                  <img src={location3} alt="New York" />
                  <div class="property-list-content">
                    <h4>New York</h4>
                    <p>22 Properties</p>
                    <a href="#" class="btn btn-location ">Shopping One</a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-3">
                <div class="city-box">
                  <img src={location4} alt="New York" />
                  <div class="property-list-content">
                    <h4>New Jersy</h4>
                    <p>32 Properties</p>
                    <a href="#" class="btn btn-location ">Square Hall</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="customer-says-sec">
            <h3>What Our Customers Are Saying?</h3>
            <div class="testimotional-box"
            style={{background:`url(${testimonial})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto'}}
            >
              <div id="demo" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="testi-content">
                      <div class="user-title">
                        <img src={quotes} alt="icon" /> <span>Very effective for our business</span>
                      </div>
                      <p>We have seen some amazing results already and we are loving Aptillion. Aptillion is amazing and everyone who is using this is loving it. Aptillion was, is and always will be worth a fortune to my company and it is vital to my travel needs.</p>
                      <div class="media">
                        <img class="mr-3" src={take_image} alt="Generic placeholder image"/>
                        <div class="media-body">
                          <h5 class="mt-0">Robert Lewandoski</h5>
                          <small>Aptillion Client</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="testi-content">
                      <div class="user-title">
                        <img src={quotes} alt="icon" /> <span>Very effective for our business</span>
                      </div>
                      <p>We have seen some amazing results already and we are loving Aptillion. Aptillion is amazing and everyone who is using this is loving it. Aptillion was, is and always will be worth a fortune to my company and it is vital to my travel needs.</p>
                      <div class="media">
                        <img class="mr-3" src={take_image} alt="Generic placeholder image"/>
                        <div class="media-body">
                          <h5 class="mt-0">Robert Lewandoski</h5>
                          <small>Aptillion Client</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="testi-content">
                      <div class="user-title">
                        <img src={quotes} alt="icon" /> <span>Very effective for our business</span>
                      </div>
                      <p>We have seen some amazing results already and we are loving Aptillion. Aptillion is amazing and everyone who is using this is loving it. Aptillion was, is and always will be worth a fortune to my company and it is vital to my travel needs.</p>
                      <div class="media">
                        <img class="mr-3" src={take_image} alt="Generic placeholder image"/>
                        <div class="media-body">
                          <h5 class="mt-0">Robert Lewandoski</h5>
                          <small>Aptillion Client</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="arrow-carousel">
                  <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="icon-holder"><img src={left_arrow} alt="icon" /></span>
                  </a>
                  <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="icon-holder"><img src={right_arrow} alt="icon" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="call-to-action text-center">
            <h3>Do You Have a property?</h3>
            <p>Keep calm and get a special discount for all properties over $5,000,00 from California. Hurry up! Only 3 days left.</p>
            <a href="#" class="btn btn-shopping-center ">Shopping Center</a>
          </div> */}
        </div>
        <div class="skyline-img">
          <img src={skyline} alt="image" />
        </div>
        <div class="blog-list-sec">
          <div class="container">
            <h3>Explore Latest Posts</h3>
            <p>Checkout latest news and articles from our blog</p>
            <div class="row">
              <div class="col-xs-12 col-sm-4">
                <div class="blog-box">
                  <div class="blog-img-holder">
                    <img src={blog1} alt="img" />
                  </div>
                  <div class="blog-content-holder">
                    <small>Health & Fitness</small>
                    <a href="#">The Best SPA Salons For Your Relaxation</a>
                    <p>October 6, 2017</p>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-4">
                <div class="blog-box">
                  <div class="blog-img-holder">
                    <img src={blog2} alt="img" />
                  </div>
                  <div class="blog-content-holder">
                    <small>Health & Fitness</small>
                    <a href="#">The Best SPA Salons For Your Relaxation</a>
                    <p>October 6, 2017</p>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-4">
                <div class="blog-box">
                  <div class="blog-img-holder">
                    <img src={blog3} alt="img" />
                  </div>
                  <div class="blog-content-holder">
                    <small>Health & Fitness</small>
                    <a href="#">The Best SPA Salons For Your Relaxation</a>
                    <p>October 6, 2017</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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


  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps )(Home);
