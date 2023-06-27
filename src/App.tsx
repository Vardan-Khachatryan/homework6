import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./main/Main";
import { About } from "./about/About";
import { Contact } from "./contacts/Contact";
import { Form } from "./form/Form";
import { Cart } from "./cartItem/Cart";
import { Error } from "./error/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="create-products-list" element={<Form />} />
        <Route path="create-products-list" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
