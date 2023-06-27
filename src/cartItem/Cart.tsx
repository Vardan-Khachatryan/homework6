import React from "react";
import "./cart.css";
import { Deletebutton } from "../button/Deletebutton";

export const Cart = ({ arr, deleteCart }: any) => {
  return (
    <div className="cart">
      {arr.map((elem: any, i: number) => (
        <div key={i}>
          <h2>Name:{elem.name}</h2>
          <p>Decription:{elem.description}</p>
          <p>Price:{elem.price}$</p>
          <img src={elem.url} alt="" />
          <Deletebutton i={i} deleteCart={() => deleteCart(i)} />
        </div>
      ))}
    </div>
  );
};
