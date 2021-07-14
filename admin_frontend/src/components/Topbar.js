import React, { useEffect, useState } from 'react'
import avatar from  "../assets/images/users/avatar-1.jpg";
import { connect, useSelector ,useDispatch} from "react-redux";
import {logout} from '../actions/auth'
import { Link, Redirect } from "react-router-dom";


function Topbar(props) {
    const propertyState = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [redirect, setRedirect] = useState(false);


useEffect(()=>{
console.log('testingggg',propertyState)


},[])
const logout_user = () => {
    

    dispatch(logout());
    setRedirect(true);

  };
    return (
        <div className="topbar">
        {redirect ? <Redirect to="/logout" /> : null}

            <nav className="navbar-custom">
              <ul className="list-unstyled topbar-right-menu float-right mb-0">
                <li className="hide-phone app-search">
                  {/* <form>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="form-control"
                    />
                    <button type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </form> */}
                </li>

                <li className="dropdown notification-list">
                  <a
                    className="nav-link dropdown-toggle nav-user"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                  >
                    <img src={avatar} alt="user" className="rounded-circle" />
                    <span className="ml-1">
                      TPM Solution<i className="mdi mdi-chevron-down"></i>{" "}
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown">
                    <div className="dropdown-item noti-title">
                      <h6 className="text-overflow m-0">Welcome !</h6>
                    </div>

                    {/* <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="fi-head"></i> <span>My Account</span>
                    </a> */}

                    <a
                      href="#"
                      onClick={(e) => logout_user()}
                      className="dropdown-item notify-item"
                    >
                      <i className="fi-power"></i> <span> Logout</span>
                    </a>
                  </div>
                </li>
              </ul>

              <ul className="list-inline menu-left mb-0">
                <li className="float-left">
                  <button className="button-menu-mobile open-left disable-btn">
                    <i className="dripicons-menu"></i>
                  </button>
                </li>
                <li>
                  <div className="page-title-box">
                    <h4 className="page-title">{props.current_page}</h4>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to={props.link_to}>
                          {" "}
                          <a>Home</a>{" "}
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">
                      {props.current_page}
                      </li>
                    </ol>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
         
    )
}

export default Topbar
