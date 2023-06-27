import React from "react";
import { Navigation } from "../navigation/Navigation";
import { Input } from "../input/Input";
import { Button } from "../button/Button";
import { useState, useEffect } from "react";
import { Cart } from "../cartItem/Cart";
import "./form.css";

export interface Iinput {
  type?: string;
  name: string;
  value: string | number;
  placeholder: string;
  min?: number;
  max?: number;
  pattern?: string;
  handleChange: (prop: string, event: any) => void;
}

interface Iobj {
  name: string;
  description: string;
  price: string | number;
  url: string;
}

export const Form = () => {
  const localStorageGetItem = (key: string) => {
    const result = localStorage.getItem(key);
    if (result) return JSON.parse(result);

    return [];
  };
  const [cart, setCart] = useState(localStorageGetItem("cart"));
  const [productElements, setProductElements] = useState<Iobj>({
    name: "",
    description: "",
    price: "",
    url: "",
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleChange = (prop: string, event: any) => {
    setProductElements({
      ...productElements,
      ...{ [prop]: event.target.value },
    });
  };

  const handleClick = (): any => {
    setCart([...cart, productElements]);
    setProductElements({
      name: "",
      description: "",
      price: "",
      url: "",
    });
  };

  const deleteCart = (i: number) => {
    const updatedCart = cart.filter((item: object, k: number) => k !== i);
    setCart(updatedCart);
  };

  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <h1>Create your product</h1>
        <form style={{ cursor: "pointer" }}>
          <p>Product name</p>
          <Input
            value={productElements.name}
            //pattern={"[A-Za-zА-Яа-яЁё]"}
            name={"name"}
            placeholder={"Product name"}
            handleChange={handleChange}
          />
          <p>Product decription</p>
          <Input
            value={productElements.description}
            // pattern={"[A-Za-zА-Яа-яЁё]"}
            name={"description"}
            placeholder={"Product description"}
            handleChange={handleChange}
          />
          <p>Product price</p>
          <Input
            type={"number"}
            min={0}
            max={100}
            value={productElements.price}
            pattern={"[A-Za-zА-Яа-яЁё]"}
            name={"price"}
            placeholder={"Price"}
            handleChange={handleChange}
          />
          <p>Еnter the URL address</p>
          <Input
            value={productElements.url}
            //pattern={"[A-Za-zА-Яа-яЁё]"}
            name={"url"}
            placeholder={"URL"}
            handleChange={handleChange}
          />
          <Button handleClick={handleClick} />
        </form>
        <Cart arr={cart} deleteCart={deleteCart} />
      </main>
    </div>
  );
};
