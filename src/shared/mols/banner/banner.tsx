import React, { Component } from "react";
import "./banner.css";

class Banner extends Component {
  render() {
    return (
      <header>
        <img
          className="banner-img"
          src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png"
        />
        <h1 className="banner-title">MAY THE FORCE BE WITH YOU!</h1>
      </header>
    );
  }
}

export default Banner;
