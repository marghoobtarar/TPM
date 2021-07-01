import React ,{Fragment, useEffect,useState } from "react";
import {Link, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const TopNav = ({ logout, isAuthenticated }) => {
  
  const [redirect, setRedirect] = useState(false);

  const logout_user = () => {
      logout();
      setRedirect(true);
  };
 
 
  const guestLinks = () => (
    <Fragment>
       <li><a href="#">
                <Link class='' to='/login' role='button'>Login</Link>

                  </a></li>
                <li><a href="#">
                <Link class='' to='/signup' role='button'>Signup</Link>

           </a></li>
    </Fragment>
);

const authLinks = () => (
  <li>

<a className='' href='#' onClick={logout_user}>Logout</a>

  </li>
);

return(
    <>
    <div class="top-bar">
        <div class="container">
          <div class="row">
            <div class="col-xs-6 col-sm-6">
              <ul class="social-links-top"> 
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
            <div class="col-xs-6 col-sm-6">
              <ul class="login-tab"> 
              {isAuthenticated ? authLinks() : guestLinks()}

                <li><a href="#">1-814-759-8475</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {redirect ? <Redirect to='/' /> : <Fragment></Fragment>}

      
    </>
)

}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(TopNav);

