import React from "react";
import { Navigation } from "../navigation/Navigation";
import "./about.css";

export const About = () => {
  return (
    <div className="About">
      <header>
        <Navigation />
      </header>
      <main>
        <h3>
          This page is designed for creating a product list by clicking on the
          Create products list link.
        </h3>
      </main>
    </div>
  );
};
