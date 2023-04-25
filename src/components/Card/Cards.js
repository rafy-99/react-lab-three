import "../../App.css";
import Card from "./Card.js";

function Cards(props) {
  return (
    props.filteredCards &&
    props.filteredCards.map((card) => (
      <Card
        title={card.title}
        description={card.description}
        thumbnail={card.thumbnail}
      ></Card>
    ))
  );
}

export default Cards;
