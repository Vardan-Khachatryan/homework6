import React from "react";

export const Button = ({ handleClick }: any) => {
  return (
    <div className="button">
      <button type="button" onClick={handleClick}>
        ADD
      </button>
    </div>
  );
};
