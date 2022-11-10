import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "../Card/ProductCard";
import '../../Modules/views/Products.scss'


export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  const getProduct = async () => {
    const response = await axios.get(`${process.env.BASE_URL}/products`);
    const data = await response.data;
    setProducts(data);
  };
    getProduct();
  }, []);

  return (
    <div className="products-container">
        <h1>Here we go Football</h1>
        <div className="wrapper">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
  );
};
