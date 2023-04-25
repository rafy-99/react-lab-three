import { useState } from "react";
import Cards from "../Card/Cards";
import NavBar from "../NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function Search(props) {
  const [filteredCards, setFilteredCards] = useState(props.products || []);

  const changeHandler = (event) => {
    setFilteredCards(
      props.products.filter((product) =>
        product.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <div >
      <div >
        <input
          style={{ width: "30%", backgroundColor: "#f8f9fa", borderColor: "#ced4da" }}
          className="form-control"
          type="text"
          name="search_string"
          placeholder="Search here..."
          onChange={changeHandler}
        />
      </div>
      <div >
        {filteredCards.map((product) => (
          <div className="col-md-4 mb-3">
            <Cards product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;