import React from "react";
import "../../Modules/card/ProductCard.scss";

export const ProductCard = (props) => {
  return (
    <div className="product container dark">
      <div>
        <h4>{props.product.amount}</h4>
      </div>
      <div>
        <img
          src={
            props.product.img !== "N/A"
              ? props.product.img
              : "https://via.placeholder.com/400"
          }
          alt={props.product.title}
        />
      </div>
      <div>
        <span>{props.product.desc}</span>
        <h3>{props.product.title}</h3>
        <button>
          Add Card
        </button>


      </div>
    </div>
  );
};
