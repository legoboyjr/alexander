import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6 mt">
              <ul>
                <h1>Hello World!</h1>
              </ul>
            </div>
            <div className="col-6 mt">
              <ul>
                <h1>Help me!!!</h1>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
