import React, { Component } from 'react';
import App from '../App';
import {NavLink,Prompt} from 'react-router-dom';
const ACOUNT = [
    {user: 'Huyvt', pass: '123456'},
  ];
class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            user: '',
            pass: '',
            isBlocking: false
            
        };
    }
    handleInputChange=(event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value,
          isBlocking: event.target.value.length > 0
        });
        
      }
    onSubmit =(event)=>{

        if(!(ACOUNT[0].user === this.state.user && ACOUNT[0].pass === this.state.pass)){
            alert("k bang");
        }
        
        
        event.preventDefault();
    }
   
    render() {
        
        return (
    <div className="">
    <Prompt
          when={this.state.isBlocking}
          message={location =>
            `Are you sure you want `
          }
        />
        <form id="form" onSubmit={this.onSubmit}>
       
                <div className="form-group">
                    <label>User  </label>
                    <input type="text" className="form-control"  placeholder="Enter acount" 
                    value={this.state.user} 
                    name="user" 
                    onChange={this.handleInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your acount with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"  placeholder="Password" 
                    value={this.state.pass}
                    name="pass" 
                    onChange={this.handleInputChange}
                     />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input"  />
                    <label className="form-check-label" >Check me out</label>
                </div>
                <span>{ACOUNT[0].user === this.state.user && ACOUNT[0].pass === this.state.pass ? <button type="submit" className="btn btn-primary" ><NavLink activeClassName="nav-link active" to="/index">submit</NavLink></button>:
                <button type="submit" className="btn btn-primary" >submit</button>}</span>
                   
        </form>

        
            
        
    </div>
        );
    }
}

export default Login;