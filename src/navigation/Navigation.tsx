import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

export const Navigation = () => {
  return (
    <div>
      <nav className="Navigation">
        <Link to="/about">About</Link>|<Link to="/contact"> Contacts</Link>|
        <Link to="/create-products-list">Create products list</Link>
      </nav>
    </div>
  );
};
