import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./main/Main";
import { About } from "./about/About";
import { Contact } from "./contacts/Contact";
import { Form } from "./form/Form";
import { Cart } from "./cartItem/Cart";
import { Error } from "./error/Error";
import { Cartelem } from "./cartElem/Cartelem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/create-products-list/" element={<Form />} />
        <Route path="/create-products-list/" element={<Cart />} />
        <Route path="/create-products-list/:id" element={<Cartelem />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
