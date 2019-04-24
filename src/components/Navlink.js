import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Navlink extends Component {
    render() {
        return (
          
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                        <div className="navbar-brand" >
                            <NavLink  style={{color: "white"}} to="/index">Start Bootstrap</NavLink>
                        </div>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                            <i className="fa fa-bars" />
                        </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink activeClassName="nav-link" to="/index">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="nav-link" to="/spample-post">Sample Post</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
        
           
        );
    }
}

export default Navlink;