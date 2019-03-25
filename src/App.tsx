import React, { Component } from "react";
import Card from "./shared/organism/card/card";
import configureStore from "./reducers/configureStore";
import * as ReactRedux from "react-redux";

const store = configureStore();

import "./App.css";

class App extends Component {
  render() {
    return (
      <ReactRedux.Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Card />
          </header>
        </div>
      </ReactRedux.Provider>
    );
  }
}

export default App;
