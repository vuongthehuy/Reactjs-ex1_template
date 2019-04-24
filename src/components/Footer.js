import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Footer extends Component {
    render() {
        return (
    <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <ul className="list-inline text-center">
                  <li className="list-inline-item">
                  <NavLink activeClassName="nav-link" to="/index">
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x" />
                        <i className="fa fa-twitter fa-stack-1x fa-inverse" />
                      </span>
                 </NavLink>
                  </li>
                  <li className="list-inline-item">
                  <NavLink activeClassName="nav-link" to="/index">
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x" />
                        <i className="fa fa-facebook fa-stack-1x fa-inverse" />
                      </span>
                    </NavLink>
                  </li>
                  <li className="list-inline-item">
                  <NavLink activeClassName="nav-link" to="/index">
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x" />
                        <i className="fa fa-github fa-stack-1x fa-inverse" />
                      </span>
                    </NavLink>
                  </li>
                </ul>
                <p className="copyright text-muted">Copyright © Your Website 2018</p>
              </div>
            </div>
          </div>
        </footer>
        );
    }
}

export default Footer;