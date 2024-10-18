import "./card-list.styles.css";
import Card from "../monster-card/card.component";

const CardList = ({ monsters }) => (
  <div className="card-list" key="1">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

export default CardList;
