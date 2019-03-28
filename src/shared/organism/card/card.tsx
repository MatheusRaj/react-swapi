import React, { Component } from "react";

import Banner from "../../mols/banner/banner";
import Content from "../../mols/content/content";
import Searchbar from "../../mols/searchbar/searchbar";

import "./card.css";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <Banner />
        <Searchbar />
        <Content />
      </div>
    );
  }
}

export default Card;
