import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-6 col-lg-4">
              <div style={{ backgroundColor: 'red' }}>Cloumn1</div>
            </div>
            <div className="col-sm-4 col-md-6 col-lg-4">
              <div style={{ backgroundColor: 'blue' }}>Cloumn2</div>
            </div>
            <div className="col-sm-4 col-md-6 col-lg-4">
              <div style={{ backgroundColor: 'green' }}>Cloumn3</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
