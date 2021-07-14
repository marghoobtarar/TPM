import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './assets/css/bootstrap.min.css'
import './assets/css/icons.css'
import './assets/css/metismenu.min.css'
import './assets/css/style.css'

import Home from './containers/Home';
import Login from './containers/Login';
import { Provider } from 'react-redux';
import store from './store';

import Layout from './hocs/Layout';
import AboutUs from './containers/AboutUs';
import Terms from './containers/Terms';
import Privacy from './containers/Privacy';
import Logout from './containers/Logout';
import Setting from './containers/Setting';
import Blog from './containers/blog/Blogs';
import LandingPage from './containers/LandingPage';
import WebsiteOverview from './containers/WebsiteOverview';
import Faq from './containers/Faq';
import CreateFaq from './containers/CreateFaq';
import EditFaq from './containers/EditFaq';
import BlogDetails from './containers/blog/BlogDetails';
import BlogCreate from './containers/blog/BlogCreate';
import BlogEdit from './containers/blog/BlogEdit';
import Payment from './containers/Payment'
import EditPayment from './containers/EditPayment';
const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/landing_page' component={LandingPage}/>

                    <Route exact path='/home' component={Home} />
                    <Route exact path='/about_us' component={AboutUs} />
                    <Route exact path='/terms' component={Terms} />
                    <Route exact path='/privacy_policy' component={Privacy} />
                    <Route exact path='/setting' component={Setting} />
                    <Route exact path='/logout' component={Logout} />
                    <Route exact path='/blog' component={Blog}/>
                    <Route exact path='/blog_description/:value' component={BlogDetails}/>
                    <Route exact path='/blog_create' component={BlogCreate}/>
                    <Route exact path='/blog_edit/:value' component={BlogEdit}/>
                    
                    <Route exact path='/website_overview' component={WebsiteOverview}/>
                    <Route exact path='/faqs' component={Faq}/>
                    <Route exact path='/create_faq' component={CreateFaq}/>
                    <Route exact path='/edit_faq/:value' component={EditFaq}/>
                    <Route exact path='/payment' component={Payment}/>
                    <Route exact path='/payment/:value' component={EditPayment}/>

                    <Redirect to='/'/>
               </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default App;