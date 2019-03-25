import React, { Component } from "react";
import * as ReactRedux from "react-redux";

import { listFilms } from "../../../redux/reducers/rootReducer";
import Banner from "../../mols/banner/banner";
import Content from "../../mols/content/content";
import Searchbar from "../../mols/searchbar/searchbar";

import "./card.css";

interface IProps {
  rootReducer: {
    films: any[];
    isFetching: boolean;
    hasErrors: boolean;
  };
  listFilms: () => void;
}

interface IState {
  films: any[];
}

class Card extends Component<IProps, IState> {

  state: IState = {
    films: []
  };

  componentDidMount() {
    this.props.listFilms();
  }

  render() {
    if (this.props.rootReducer.isFetching) return "LOADING...";
    if (this.props.rootReducer.hasErrors) return "SOMETHING WENT WRONG...";
    return (
      <div className="card-content">
        <Banner />
        <Searchbar />
        {this.props.rootReducer.films.map(film => (
          <Content
            title={film.title}
            episode={film.episode_id}
            description={film.opening_crawl}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  rootReducer: state.films
});

const mapDispatchToProps = {
  listFilms
};

const reduxConnetion = ReactRedux.connect(mapStateToProps, mapDispatchToProps);

export default reduxConnetion(Card);
