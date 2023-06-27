import React from "react";
import { Navigation } from "../navigation/Navigation";
import "./main.css";

export const Main = () => {
  return (
    <div className="Main">
      <header>
        <Navigation />
      </header>
      <main>
        <h1>Hello!</h1>
      </main>
    </div>
  );
};
