import React, { Component } from 'react';
import Footer from './components/Footer';
import RouterURL from './components/RouterURL';
import {BrowserRouter} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
       
          <div >
            <RouterURL></RouterURL>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
