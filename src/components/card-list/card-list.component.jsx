import { Component } from "react";
import "./card-list.styles.css";
import Card from "../monster-card/card.component";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log("render");
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return <Card id={id} name={name} email={email} />;
        })}
      </div>
    );
  }
}

export default CardList;
