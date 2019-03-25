import React, { Component } from "react";
import * as ReactRedux from "react-redux";

import { getFilm } from "../../../reducers/rootReducer";

import "./searchbar.css";

interface IProps {
  film: any;
  getFilms: (film: any) => void;
}

class Searchbar extends Component<IProps> {
  onClick = (e: any) => {
    this.getFilms(film);
  };

  render() {
    return (
      <>
        <input
          className="searchbar"
          type="text"
          placeholder="Busque aqui seu filme favorito!"
        />
        <button className="searchbutton">Buscar</button>
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  film: state.film;
};

const mapDispatchToProps = {
  getFilm
};

const reduxConnection = ReactRedux.connect(mapStateToProps, mapDispatchToProps);

export default reduxConnection(Searchbar);
