import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import pic2 from '../assets/images/pic2.webp'
import pic1 from '../assets/images/pic1.webp'
import cloud from '../assets/images/cloud.webp'
import cloud2 from '../assets/images/cloud2.webp'
import computer from '../assets/images/computer.webp'
import mobile from '../assets/images/mobile.webp'
import connection from  '../assets/images/connection.webp'
import glob from  '../assets/images/glob.webp'
import person from  '../assets/images/person.webp'


const Home = ({ isAuthenticated }) => {
  const [redirect, setRedirect] = useState(isAuthenticated);

  useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      setRedirect(true);
    }
  }, [isAuthenticated]);

  return (
    <>
       {/* // <!----Managment Solution-----> */}
      <section class="management-solution m-fadeIn" id="managementdiv">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12 managementdiv my-4">
              <h1>
                Management solution for all your maintenance TMP activities
              </h1>
              <p class="justify-text">
                At globaltpmsolutions, we believe that technology should support
                and enhance your organization’s success, not constrain it. With
                our wide range of best-in-class services, we provide customized
                solutions that fit your unique IT and maintenance mangement
                needs. We’re committed to excelling at our job so you can focus
                on doing yours.
              </p>
              <button>
                <Link style={{textDecoration:'none', color:'white'}} to='/about'>
                READ MORE
                </Link>
                
                </button>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12">
              <div class="exolot">
                <img
                  className='management_pic'
                  src={pic2} 
                />
                <img src={pic1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!----cloud computing----> */}
      <section class="it m-fadeIn" id="clouddiv">
        <div class="container">
          <div class="row">
          <div class="col-sm-12 col-lg-4">
              <div class="security">
                <div class="img-it">
                  {" "}
                  <img className='height_image_home' src={cloud}/>
                </div>
                <div>
                  <h5 className="security">Cloud Computing</h5>
                </div>
                <div class="dot-line2"></div>
                <div className='description_top'>
                  <span class="justify-text cloud_computing_detail">
                    I'm a paragraph. Click here to add your own text and edit
                    me. I’m a great place for you to tell a story and let your
                    users know a little more about you.
                  </span>
                </div>
              </div>
            </div>
            <div class="vl m-fadeIn"></div>
            <div class="col-sm-12 col-lg-4">
              <div class="security">
                <div class="img-it">
                  {" "}
                  <img className='height_image_home' src={computer}/>
                </div>
                <div>
                  <h5 className="security">Security</h5>
                </div>
                <div class="dot-line2"></div>
                <div  className='description_top'>
                  <span class="justify-text cloud_computing_detail">
                    I'm a paragraph. Click here to add your own text and edit
                    me. I’m a great place for you to tell a story and let your
                    users know a little more about you.
                  </span>
                </div>
              </div>
            </div>
            <div class="vl"></div>
            <div class="col-sm-12 col-lg-4">
              <div class="mobility m-fadeIn">
                <div class="img-it">
                  {" "}
                  <img className='height_image_home' src={mobile} />
                </div>
                <div>
                  <h5 className='mobility' >Mobility</h5>
                </div>
                <div class="dot-line3"></div>
                <div  className='description_top'>
                  <span class="justify-text cloud_computing_detail" >
                    I'm a paragraph. Click here to add your own text and edit
                    me. I’m a great place for you to tell a story and let your
                    users know a little more about you.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!---it solution---> */}
      <section class="it-solution" id="solutiondiv">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 cloud-computing">
              <div class="img-it">
                <img src={connection} />
                <img
                className='it_solution_1'
                  src={glob}
                />
                <img
                  className='it_solution_2'
                  src={person}
                />
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 m-fadeIn">
              <div class="helping">
                <div>
                  <h5 className='white'>
                    Helping You find the right IT Solution.
                  </h5>
                </div>
                <div>
                  <span class="justify-text white" >
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me and
                    you can start adding your own content and make changes to
                    the font. Feel free to drag and drop me anywhere you like on
                    your page. I’m a great place for you to tell a story and let
                    your users know a little more about you.
                  </span>
                </div>
              </div>
              <div class="banner-btn">
                <button>More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!---it partner---> */}
      <section class="it-partner m-fadeIn" id="partnerdiv">
        <div class="container">
          <div class="">
            <div className='row'> 
            <div class=" row ">
              <div class="mobility2 border_right col-xs-12 col-sm-12 col-lg-4" >
                <div>
                  <h6>Mobility</h6>
                </div>
                <div class="img-it2">
                  {" "}
                  <img src={mobile} />
                </div>
              </div>
              <div class="shared-version col-xs-12 col-sm-12 col-lg-8">
                <p>
                  ​Mobility I'm a paragraph. Click here to add your own text and
                  edit me. It’s easy. Just click “Edit Text” or double click me
                  and you can start adding your own content and make changes to
                  the font. Feel free to drag and drop me anywhere you like on
                  your page. I’m a great place for you to tell a story and let
                  your users know a little more about you.
                </p>
              </div>
              
            </div>
         
          </div>
          <div className='row cloud_computing_div m-fadeIn' >
            <div class=" row ">
              <div class="mobility2  border_right col-xs-12 ccol-sm-12 col-lg-4" >
                <div>
                  <h6 className='cloud-computing'>Cloud</h6>
                </div>
                <div class="img-it2">
                  {" "}
                  <img src={cloud} />
                </div>
              </div>
              <div class="shared-version col-xs-12 col-sm-12 col-lg-8 m-fadeIn">
                <p className='cloud-computing'>
                  ​Mobility I'm a paragraph. Click here to add your own text and
                  edit me. It’s easy. Just click “Edit Text” or double click me
                  and you can start adding your own content and make changes to
                  the font. Feel free to drag and drop me anywhere you like on
                  your page. I’m a great place for you to tell a story and let
                  your users know a little more about you.
                </p>
              </div>
              
            </div>
         
          </div>
           
          <div className='row cloud_computing_div'>
            <div class=" row ">
              <div class="mobility2 border_right col-xs-12 col-sm-12 col-lg-4" >
                <div>
                  <h6 className='cloud-computing' >Secutity</h6>
                </div>
                <div class="img-it2">
                  {" "}
                  <img src={computer} />
                </div>
              </div>
              <div class="shared-version col-xs-12 col-sm-12 col-lg-8 m-fadeIn">
                <p className='cloud-computing'> 
                  ​Mobility I'm a paragraph. Click here to add your own text and
                  edit me. It’s easy. Just click “Edit Text” or double click me
                  and you can start adding your own content and make changes to
                  the font. Feel free to drag and drop me anywhere you like on
                  your page. I’m a great place for you to tell a story and let
                  your users know a little more about you.
                </p>
              </div>
              
            </div>
         
          </div>
          
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Home);
