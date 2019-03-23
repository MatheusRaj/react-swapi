import React, { Component } from 'react';
import Banner from '../../mols/banner/banner';
import './card.css';


class Card extends Component {

    render() {
        return (
            <div className="card-content">
                <Banner />
            </div>
        )
    }
}

export default Card;