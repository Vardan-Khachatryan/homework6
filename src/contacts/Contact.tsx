import React from "react";
import { Navigation } from "../navigation/Navigation";
import "./constact.css";
export const Contact = () => {
  return (
    <div className="Contacts">
      <header>
        <Navigation />
      </header>
      <main>
        <h1>Adress Երևան, Հր. Քոչար 4 </h1>
        <h2>mail info@bdg.am </h2>
        <h3>Tel. +374 55 201209 </h3>
      </main>
    </div>
  );
};
