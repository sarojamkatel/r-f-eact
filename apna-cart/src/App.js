import Navbar from "../../apna-cart/src/components/Navbar";
import Productlist from "../../apna-cart/src/components/productList";
import React from 'react';


export default function App() {


  const products=[
    {
      price: 9999,
      name: "iphone",
      quantity:0
    },
    {
      price: 99999,
      name: "samsung",
      quantity:0
    },
    {
      price: 9999,
      name: "redmi",
      quantity:0
    },
    {
      price: 999,
      name: "nokia",
      quantity:0
    },
    {
      price: 99,
      name: "oppo",
      quantity:0
    },
    {
      price: 9,
      name: "poco",
      quantity:0
    }
  ];
  return (
    <>
      <Navbar />
      <Productlist products={products} />
    </>
  );
}


