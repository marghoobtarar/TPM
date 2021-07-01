import React from 'react'
import { Link } from 'react-router-dom'
import footer from "../../src/img/footer-logo.png" 


const Footer = ()=>{

    return(
        <>
        
        <footer>
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-3">
              <div class="footer-box-1">
              <Link class='' to='/' role='button'>  <img src={footer} alt="logo" /></Link>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                <ul>
                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="col-xs-12 col-sm-1"></div>
            <div class="col-xs-12 col-sm-2">
              <div class="footer-box-2">
                <strong>Company</strong>
                <ul>
                  <li><a href="#">
                  <Link class='' to='/about' role='button'>About</Link>
                  </a></li>
                    <li><a href="#">    
                      <Link class='' to='/team' role='button'>Team</Link>
                    </a></li>
                  <li><a href="#">
                      
                      <Link class='' to='/carrers' role='button'>Carrers</Link>

                 </a></li>
                  <li><a href="#">
                      
                      <Link class='' to='/investors' role='button'>Investors</Link>

                  </a></li>
                  <li><a href="#">
                      
                      <Link class='' to='/contact_us' role='button'>Contact Us</Link>

                      
                      </a></li>
                </ul>
              </div>
            </div>
            <div class="col-xs-12 col-sm-2">
              <div class="footer-box-2">
                <strong>Quick Links</strong>
                <ul>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xs-12 col-sm-1"></div>
            <div class="col-xs-12 col-sm-3">
              <div class="footer-box-2">
                <strong>Support</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore.</p>
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Email Address..."/>
                  <div class="input-group-btn">
                    <button class="btn btn-default" type="submit">
                      <i class="fa fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="text-center copytext">Copyright @2021 Aptillion. All rights reserved</p>
        </div>
      </footer>
        </>
    )
}
export default Footer