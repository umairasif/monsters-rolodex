import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
  render() {
    return (
      <div className="card-container" key={this.props.id}>
        <img
          alt={`monster ${this.props.name}`}
          src={`https://robohash.org/${this.props.id}`}
        />
        <h2>{this.props.name}</h2>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

export default Card;
