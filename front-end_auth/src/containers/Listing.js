import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import image1 from '../img/img-1.png'
import image2 from '../img/img-2.png'
import image3 from '../img/img-3.png'
import TopNav from '../components/TopNav';
import logo from '../img/logo.png'
import { MapContainer } from '../components/MapContainer';
import Map from '../components/Map'



const Listing = ({  isAuthenticated }) => {
    const [redirect, setRedirect] = useState(isAuthenticated);

     useEffect(()=>{
console.log(redirect)

     },[])
  

    // if (!isAuthenticated) {
        
    //     return <Redirect to='/' />
    // }
   
    return (
      <>
    <div id="wrapper">
     
     <TopNav/>
      <main>
       <header class="inner-header">
          <nav class="navbar navbar-expand-lg navbar-light bg-light pl-0 pr-0">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
              <Link class='' to='/' role='button'>  <img src={logo} alt="logo" /></Link>
              
                  </a>
                <form class="form-inline my-2 my-lg-0">
                <button class="searchicon my-2 my-sm-0" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                <input class="form-control mr-sm-2" type="search" placeholder="Ontario, Canada" aria-label="Ontario, Canada"/>
              </form>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="nav navbar-nav ml-auto">
                  <li class="nav-item">
                  <Link class="nav-link" to='/' >  Home</Link>
                  </li>
                  <li class="nav-item">
                  <Link class="nav-link" to='/explore' role='button'>  Explore</Link>
                  </li>
                  <li class="nav-item">
                  <Link class="nav-link" to='/pricing' role='button'>  Pricing</Link>
                  </li>
                  <li class="nav-item">
                  <Link class="nav-link" to='/about' role='button'>  About</Link>
                  </li>
                  <li class="nav-item">
                  <Link class="nav-link btn btn-green " to='/contact' role='button'> Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>   
        </header>
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12 col-sm-8">
              <div class="list-view">
                <div class="d-flex justify-content-between align-items-md-center">
                  <h1 class="align-items-md-center">19 Result Found</h1>
                  <a class="align-items-md-center filter-toggle" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Filter <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                </div>
                <div class="collapse show" id="collapseExample">
                  <div class="card card-body">
                    <form>
                      <div class="row">
                        <div class="col-xs-12 col-sm-4">
                          <div class="input-field">
                            <label>Minimum beds</label>
                            <select class="custom-select form-control" aria-label="Default select example">
                              <option selected>Min. 0 - Max 5 </option>
                              <option value="1">Min. 0 - Max 5</option>
                              <option value="2">Min. 0 - Max 5</option>
                              <option value="3">Min. 0 - Max 5</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-4">
                          <div class="input-field">
                            <label>Minimum baths</label>
                            <select class="custom-select form-control" aria-label="Default select example">
                              <option selected>Min. 0 - Max 5 </option>
                              <option value="1">Min. 0 - Max 5</option>
                              <option value="2">Min. 0 - Max 5</option>
                              <option value="3">Min. 0 - Max 5</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-4">
                          <label>Budget</label>
                          <div class="row">
                            <div class="col-sm-12">
                              <div id="slider-range"></div>
                            </div>
                          </div>
                          <div class="row slider-labels">
                            <div class="col-xs-6 col-sm-6 caption">
                              <strong>Min:</strong> <span id="slider-range-value1"></span>
                            </div>
                            <div class="col-xs-6 col-sm-6 text-right caption">
                              <strong>Max:</strong> <span id="slider-range-value2"></span>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-12">
                              <form>
                                <input type="hidden" name="min-value" value=""/>
                                <input type="hidden" name="max-value" value=""/>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col-xs-12 col-sm-7">
                          <label>A-Rank</label>
                          <div class="rank-list">
                            <ul>
                              <li class="active"><a href="#">10</a></li>
                              <li><a href="#">20</a></li>
                              <li><a href="#">30</a></li>
                              <li><a href="#">40</a></li>
                              <li><a href="#">50</a></li>
                              <li><a href="#">60</a></li>
                              <li><a href="#">70</a></li>
                              <li><a href="#">80</a></li>
                              <li><a href="#">90</a></li>
                              <li><a href="#">100</a></li>
                            </ul>
                          </div>
                          <div class="checkbox-list">
                            <ul>
                              <li>
                                <label>Percent Annual Occupancy:</label>
                              </li>
                              <li>
                                <div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="customCheck" name="example1"/>
                                  <label class="custom-control-label" for="customCheck">10% - 30%</label>
                                </div>
                              </li>
                              <li>
                                <div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="customCheck" name="example1"/>
                                  <label class="custom-control-label" for="customCheck">30% - 60%</label>
                                </div>
                              </li>
                              <li>
                                <div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="customCheck" name="example1"/>
                                  <label class="custom-control-label" for="customCheck">60% - 100%</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-5">
                          <div class="row">
                            <div class="col-sm-6">
                             <label>Lot Size</label>
                            </div>
                            <div class="col-sm-6">
                              <label>Square Footage</label>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-xs-12 col-sm-3">
                              <div class="number-input">
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="minus"></button>
                                <input class="quantity" min="0" name="quantity" value="1" type="number"/>
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-3">
                              <div class="number-input">
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="minus"></button>
                                <input class="quantity" min="0" name="quantity" value="1" type="number"/>
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-3">
                              <div class="number-input">
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="minus"></button>
                                <input class="quantity" min="0" name="quantity" value="1" type="number"/>
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-3">
                              <div class="number-input">
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="minus"></button>
                                <input class="quantity" min="0" name="quantity" value="1" type="number"/>
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xs-12 col-sm-3">
                          <div class="input-field">
                            <label>Estimated Annual Rental Income</label>
                            <select class="custom-select form-control" aria-label="Default select example">
                              <option selected>Min. 0 - Max 5 </option>
                              <option value="1">Min. 0 - Max 5</option>
                              <option value="2">Min. 0 - Max 5</option>
                              <option value="3">Min. 0 - Max 5</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-3">
                          <div class="input-field">
                            <label>Estimated annual expenses</label>
                            <select class="custom-select form-control" aria-label="Default select example">
                              <option selected>Min. 0 - Max 5 </option>
                              <option value="1">Min. 0 - Max 5</option>
                              <option value="2">Min. 0 - Max 5</option>
                              <option value="3">Min. 0 - Max 5</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-3">
                          <div class="input-field">
                            <label>Year Built</label>
                            <select class="custom-select form-control" aria-label="Default select example">
                              <option selected>Min. 0 - Max 5 </option>
                              <option value="1">Min. 0 - Max 5</option>
                              <option value="2">Min. 0 - Max 5</option>
                              <option value="3">Min. 0 - Max 5</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-3">
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="input-field">
                                <label>Rental Income</label>
                                <select class="custom-select form-control" aria-label="Default select example">
                                  <option selected>Min. 0 </option>
                                  <option value="1">Min. 0</option>
                                  <option value="2">Min. 0</option>
                                  <option value="3">Min. 0</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="input-field">
                                <label>Cap Rate</label>
                                <select class="custom-select form-control" aria-label="Default select example">
                                  <option selected>Min. 0 </option>
                                  <option value="1">Min. 0</option>
                                  <option value="2">Min. 0</option>
                                  <option value="3">Min. 0</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="filter-title d-flex justify-content-between align-items-md-center mb-4">
                  <h2 class="align-items-md-center">Showing 4 Homes out of 300 Properties</h2>
                  <a href="#" class="align-items-md-center filter-toggle">Sort by: Newest First <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                </div>
              </div>
              <div class="recent-investment-sec">
                <div class="row">
                  <div class="col-xs-12 col-sm-4">
                    <div class="property-item">
                      <div class="img-holder">
                        <img src={image1} alt="img" />
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
                        <img src={image2} alt="img" />
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
                        <img src={image3} alt="img" />
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
                        <img src={image2} alt="img" />
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
                        <img src={image1} alt="img" />
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
                        <img src={image1} alt="img" />
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
            <div class="col-xs-12 col-sm-4">
              <div class="map-view">
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25986773739224!3d40.697149413874705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1620679867490!5m2!1sen!2s" width="100%" height="100%"
                 style={{
                    border:"0", allowfullscreen:"", loading:"lazy"
                 }}></iframe> */}
                 <Map/>

                 
              </div>
            </div>
          </div>
        </div>
      </main>
     <Footer/>
      </div>
      </>
      
        );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Listing);
