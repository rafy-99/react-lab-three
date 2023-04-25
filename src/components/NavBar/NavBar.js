import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar bg-body-tertiary navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Lab3
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/products">
              Products
            </Link>
            <Link className="nav-link" to="/product/1">
              Product
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
