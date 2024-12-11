import React from "react";


function Product(props) {
  return (
    <div className="row">
      <div className="col-6">
        <h2>{props.product.name}</h2>
      </div>
    </div>
  );
}

export default Product;
