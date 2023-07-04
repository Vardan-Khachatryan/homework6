import React from "react";
import "./viewbutton.css";

export const ViewButton = ({ handleProduct, i }: any) => {
  return (
    <div className="view-button">
      <button onClick={() => handleProduct(i)}>VIEW</button>
    </div>
  );
};
