import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "../components/Card/ProductCard";
// import '../Modules/views/Products.scss'

const BASE_URL = "http://localhost:5000/api/";

export const Products = () => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    const data = await response.data;
    setProducts(data);
    console.log(data);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="products-container">
        <h1>Here we go Football</h1>
        <div className="products_wrapper">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
  );
};
