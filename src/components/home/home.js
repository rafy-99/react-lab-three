import { Link } from "react-router-dom";

function Welcome() {
  return (
    <header  >
      <div >
        <div >
          <div >
            <h6 >Lab 3</h6>
            <Link  to="/products">
              find products
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Welcome;
