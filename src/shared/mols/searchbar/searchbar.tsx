import React, { Component } from "react";
import * as ReactRedux from "react-redux";

import { getFilm } from "../../../redux/reducers/rootReducer";

import "./searchbar.css";

interface IProps {
  getFilm: (film: any) => void;
}

interface IState {
  film: string;
}

class Searchbar extends Component<IProps, IState> {
  state = {
    film: ""
  };

  onChange = (e: any) => this.setState({ film: e.target.value });

  onClick = (e: any) => this.props.getFilm(this.state.film);

  render() {
    return (
      <div>
        <input
          className="searchbar"
          type="text"
          placeholder="Search for Star Wars movies!"
          onChange={this.onChange}
        />
        <button className="searchbutton" onClick={this.onClick}>
          Search
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  film: state.film
});

const mapDispatchToProps = {
  getFilm
};

const reduxConnection = ReactRedux.connect(mapStateToProps, mapDispatchToProps);

export default reduxConnection(Searchbar);
