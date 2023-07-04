import React from "react";
import "./cart.css";

import { Deletebutton } from "../button/Deletebutton";
import { ViewButton } from "../button/ViewButton";
import { useNavigate } from "react-router-dom";

export const Cart = ({ arr, deleteCart }: any) => {
  const navigate = useNavigate();
  const handleProduct = (id: number) => navigate(`/create-products-list/${id}`);

  return (
    <div className="cart">
      {arr.map((elem: any, i: number) => (
        <div key={i}>
          <h2>Name:{elem.name}</h2>
          <p>Decription:{elem.description}</p>
          <p>Price:{elem.price}$</p>
          <img src={elem.url} alt="" />
          <Deletebutton i={i} deleteCart={() => deleteCart(i)} />
          <ViewButton handleProduct={handleProduct} i={i} />
        </div>
      ))}
    </div>
  );
};
