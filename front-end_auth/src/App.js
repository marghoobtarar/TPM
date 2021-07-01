import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import "./css/ripple.min.css"
import "./css/bootstrap.min.css"
import "./css/style.css"
// import './owlcarousel/owl.carousel.min.css'
import './owlcarousel/owl.theme.default.min.css'
import './css/mapstyle.css'

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Facebook from './containers/Facebook';
import Google from './containers/Google';

import { Provider } from 'react-redux';
import store from './store';

import Layout from './hocs/Layout';
import About from './containers/About';
import Listing from './containers/Listing';
import Contact from './containers/Contact';

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/facebook' component={Facebook} />
                    <Route exact path='/google' component={Google} />
                    <Route exact path='/reset-password' component={ResetPassword} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                    <Route exact path='/activate/:uid/:token' component={Activate} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/listing' component={Listing} />
                    <Route exact path='/contact' component={Contact}/>
                    <Route exact path='/' component={Home} />
                    <Redirect to='/' component={Home}/>

                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default App;