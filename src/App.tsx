import React, { Component } from 'react';
import Card from './shared/organism/card/card';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card />
        </header>
      </div>
    );
  }
}

export default App;
