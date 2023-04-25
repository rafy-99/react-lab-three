import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";

function Card(props) {
  const color = useRef("#FFFFFF");
  const changeColor = () => {
    const colors = ["red", "green", "blue", "yellow", "orange", "white"];
    color.current.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div  key={props.id}>
      <div  ref={color}>
        <img
          src={props.thumbnail}
          alt="..."
          height={"200rem"}
        />
        <div >
          <h5 >{props.title}</h5>
          <p >{props.description}</p>
        </div>
      </div>
      <div >
        <button  onClick={changeColor}>
          Change Color
        </button>
      </div>
    </div>
  );
}

export default Card;
