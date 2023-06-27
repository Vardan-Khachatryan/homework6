import React from "react";
import "./Deletebutton.css";

export const Deletebutton = ({ i, deleteCart }: any) => {
  return (
    <div className="deletebutton">
      <button onClick={() => deleteCart(i)}>Delete</button>
    </div>
  );
};
