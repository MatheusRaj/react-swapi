import React, { Component } from "react";
import configureStore from "./redux/configureStore";
import * as ReactRedux from "react-redux";

import Card from "./shared/organism/card/card";

const store = configureStore();

import "./App.css";

interface IProps {}

interface IState {}

class App extends Component {
  render() {
    return (
      <ReactRedux.Provider store={store}>
        <div className="App">
          <Card />
        </div>
      </ReactRedux.Provider>
    );
  }
}

export default App;
