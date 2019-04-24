import React, { Component } from 'react';
import Navlink from './Navlink';
import {NavLink} from 'react-router-dom';
class In_dex extends Component {
    render() {
        return (
  <div>  
        <Navlink />
        {/* Page Header */}
        <header className="masthead" style={{backgroundImage: 'url("img/home-bg.jpg")'}}>
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Clean Blog</h1>
                  <span className="subheading">A Blog Theme by Start Bootstrap</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Main Content */}
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="post-preview">
              <NavLink activeClassName="nav-link active" to="/spample-post">
                  <h2 className="post-title">
                    Man must explore, and this is exploration at its greatest
                  </h2>
                  <h3 className="post-subtitle">
                    Problems look mighty small from 150 miles up
                  </h3>
                </NavLink>
                <p className="post-meta">Posted by
                <NavLink activeClassName="nav-link active" to="/">Start Bootstrap</NavLink>
                  on September 24, 2018</p>
              </div>
              <hr />
              <div className="post-preview">
              <NavLink activeClassName="nav-link active" to="/spample-post">
                  <h2 className="post-title">
                    I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.
                  </h2>
                </NavLink>
                <p className="post-meta">Posted by
                <NavLink activeClassName="nav-link active" to="/">Start Bootstrap</NavLink>
                  on September 18, 2018</p>
              </div>
              <hr />
              <div className="post-preview">
              <NavLink activeClassName="nav-link active" to="/spample-post">
                  <h2 className="post-title">
                    Science has not yet mastered prophecy
                  </h2>
                  <h3 className="post-subtitle">
                    We predict too much for the next year and yet far too little for the next ten.
                  </h3>
                </NavLink>
                <p className="post-meta">Posted by
                <NavLink activeClassName="nav-link active" to="/">Start Bootstrap</NavLink>
                  on August 24, 2018</p>
              </div>
              <hr />
              <div className="post-preview">
                <NavLink activeClassName="nav-link active" to="/spample-post">  
                  <h2 className="post-title">
                    Failure is not an option
                  </h2>
                  <h3 className="post-subtitle">
                    Many say exploration is part of our destiny, but it’s actually our duty to future generations.
                  </h3>
                </NavLink>
                <p className="post-meta">Posted by
                <NavLink activeClassName="nav-link active" to="/">Start Bootstrap</NavLink>
                  on July 8, 2018</p>
              </div>
              <hr />
              {/* Pager */}
              <div className="clearfix">
              <NavLink activeClassName="btn btn-primary float-right" to="/">Older Posts</NavLink>
              
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* Footer */}
   </div>
        );
    }
}

export default In_dex;