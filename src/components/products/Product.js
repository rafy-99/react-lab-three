import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function Product({ products }) {
  const product = products[0];
  return (
    <div >
      <div >
        <div >
          <img
            src={product.thumbnail}
            className="card-img-top"
            alt={product.title}
            height={"300rem"}
          />
          <div >
            <h2 >{product.title}</h2>
            <p >{product.description}</p>
            <h3 >Details:</h3>
            <ul >
              <li >
                <strong>Category:</strong> {product.category}
              </li>
              <li >
                <strong>Price:</strong> ${product.price}
              </li>
              <li >
                <strong>Brand:</strong> {product.brand}
              </li>
              <li >
                <strong>Stock:</strong> {product.stock}
              </li>
              <li >
                <strong>Rating:</strong> {product.rating}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

function mapDispatchToProps() {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
