import React from "react";
import Product from "./Product.js";

export default function Productlist(props) {
  return (
    <div>
      {" "}
      {/* Or use React.Fragment if you don't want a wrapping div */}
      {props.products.map((product, i) => (
        <Product product={product} key={i} />
      ))}
    </div>
  );
}
