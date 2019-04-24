import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import About from './About';
import Post from './Post';
import Contact from './Contact';
import In_dex from './index';
import Login from './login';
class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/index" component={In_dex}/>
                    <Route path="/about" component={About}/>
                    <Route path="/spample-post" component={Post}/>
                    <Route path="/contact" component={Contact}/>
                    <Route component={Login}/>
                </Switch>
            </div>
        );
    }
}

export default RouterURL;