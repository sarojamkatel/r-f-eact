import React from 'react';
import Navbar from './components/navbar';
import Productlist from './components/productList';

export default function App() {
  const products = [
    {
      price: 9999,
      name: "iPhone",
      quantity: 0,
    },
    {
      price: 99999,
      name: "Samsung",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi",
      quantity: 0,
    },
    {
      price: 999,
      name: "Nokia",
      quantity: 0,
    },
    {
      price: 99,
      name: "Oppo",
      quantity: 0,
    },
    {
      price: 9,
      name: "Poco",
      quantity: 0,
    },
  ];

  return (
    <React.Fragment>
      <Navbar />
      <Productlist products={products} />
    </React.Fragment>
  );
}
