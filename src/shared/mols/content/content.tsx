import React, { Component } from "react";
import * as ReactRedux from "react-redux";

import { listFilms } from "../../../redux/reducers/rootReducer";

import "./content.css";

interface IState {
  films: any[];
}

interface IProps {
  rootReducer: {
    films: any[];
    isFetching: boolean;
    hasErrors: boolean;
  };
  listFilms: () => void;
}

class Content extends Component<IProps, IState> {
  state: IState = {
    films: []
  };

  componentDidMount() {
    this.props.listFilms();
    console.log(this.props.rootReducer.films);
  }

  render() {
    if (this.props.rootReducer.isFetching) return "LOADING...";
    if (this.props.rootReducer.hasErrors)
      return "SOMETHING WENT WRONG, TRY AGAIN LATER... ;(";
    if (this.props.rootReducer.films.length < 1)
      return "SEEMS THAT THERE ISN'T ANY STAR WARS MOVIE WITH THIS NAME, TRY AGAIN! :D";
    return (
      <div className="content">
        {this.props.rootReducer.films.map((film, index) => {
          return (
            <div>
              <h2>
                Episode: {film.episode_id} - {film.title}
              </h2>
              <p>{film.opening_crawl}</p>
              <p id="sub">
                {film.director} - {film.producer} - {film.release_date}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  rootReducer: state
});

const mapDispatchToProps = {
  listFilms
};

const reduxConnetion = ReactRedux.connect(mapStateToProps, mapDispatchToProps);

export default reduxConnetion(Content);
