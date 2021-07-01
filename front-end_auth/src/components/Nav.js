import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/header-logo.png'

const Nav = ()=>{

    return(
        <>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container">
                <a class="navbar-brand" href="#"><img src={logo}/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item">
                      <a class="nav-link" href="#">Home </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Explore</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link btn btn-green ripple" href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>   
          </header>
          
        </>
    )
}

export default Nav
