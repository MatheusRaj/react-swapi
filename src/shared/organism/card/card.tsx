import React, { Component } from "react";
import * as ReactRedux from "react-redux";

import { listFilms } from "../../../reducers/rootReducer";
import Banner from "../../mols/banner/banner";
import Content from "../../mols/content/content";
import Searchbar from "../../mols/searchbar/searchbar";

import "./card.css";

interface IProps {
  films: any[];
  listFilms: () => void;
}

class Card extends Component<IProps> {
  componentDidMount() {
    this.props.listFilms();
  }

  render() {
    return (
      <div className="card-content">
        <Banner />
        <Searchbar />
        {this.props.films.map(film => (
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
  films: state.films
});

const mapDispatchToProps = {
  listFilms
};

const reduxConnetion = ReactRedux.connect(mapStateToProps, mapDispatchToProps);

export default reduxConnetion(Card);
