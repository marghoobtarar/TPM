import React, { useState, useEffect } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { googleAuthenticate } from '../actions/auth';
import queryString from 'query-string';

const Google = ({ googleAuthenticate,isAuthenticated }) => {
    let location = useLocation();
    const [redirect, setRedirect] = useState(isAuthenticated);


    useEffect(() => {
        if(isAuthenticated){
            setRedirect(true)
        }
        const values = queryString.parse(location.search);
        const state = values.state ? values.state : null;
        const code = values.code ? values.code : null;

        console.log('State: ' + state);
        console.log('Code: ' + code);

        if (state && code) {
            googleAuthenticate(state, code);
        }
    }, [location,isAuthenticated]);
    if (isAuthenticated) {
        
        return <Redirect to='/' />
    }
   
    return (
        <div className='container'>
            {redirect?<Redirect to='/' />:null} 

            {/* <div className='jumbotron mt-5'>
                <h1 className='display-4'>Welcome to Auth System!</h1>
                <p className='lead'>This is an incredible authentication system with production level features!</p>
                <hr className='my-4' />
                <p>Click the Log In button</p>
                <Link className='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
            </div> */}
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, { googleAuthenticate })(Google);
