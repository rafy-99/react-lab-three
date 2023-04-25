import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./components/Search/Search";
import Product from "./components/products/Product";
import NavBar from "./components/NavBar/NavBar";
import Welcome from "./components/home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { setProductsRedux } from "./redux/action.js";

function App({ products, setProductsRedux }) {
  const [, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((products) => {
        setProducts([...products.data.products]);
        setProductsRedux(products.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (products.length !== 0) {
    return (
      <BrowserRouter>
        <Routes>
        <Route
            path="/"
            element={
              <div>
                <NavBar></NavBar>
                <Welcome />
              </div>
            }
          />
          <Route
            path="/products"
            element={
              <div>
                <NavBar></NavBar>
                <Search products={products} />
              </div>
            }
          />
          <Route
            path="/product"
            element={
              <div>
                <NavBar></NavBar>
                <Product />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

function mapDispatchToProps() {
  return {
    setProductsRedux: (products) => setProductsRedux(products),
  };
}
export default connect(mapStateToProps, mapDispatchToProps())(App);
