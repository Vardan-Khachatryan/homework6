import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const Cartelem = () => {
  const localStorageGetItem = (key: string) => {
    const result = localStorage.getItem(key);
    if (result) return JSON.parse(result);
    return [];
  };
  const [arr, setArr] = useState(localStorageGetItem("cart"));
  const { id } = useParams();
  const elem = arr.find((item: any, i: number) => i === Number(id));

  if (!elem) {
    return <h1>Product not found.</h1>;
  }

  return (
    <div>
      <div>
        <h2>Name:{elem.name}</h2>
        <p>Decription:{elem.description}</p>
        <p>Price:{elem.price}$</p>
        <img src={elem.url} alt="" />
      </div>
    </div>
  );
};
