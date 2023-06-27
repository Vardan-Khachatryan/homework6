import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

export const Error = () => {
  return (
    <div className="not-found">
      <h1>Oops! You seem to be lost.</h1>
      <Link to="/create-products-list">Create products list</Link>
    </div>
  );
};
