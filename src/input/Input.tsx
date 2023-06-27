import React from "react";
import { Iinput } from "../form/Form";

export const Input = ({
  type = "text",
  name,
  value,
  placeholder,
  min,
  max,
  pattern,
  handleChange,
}: Iinput) => {
  return (
    <div>
      <input
        type={type}
        pattern={pattern}
        name={name}
        value={value}
        placeholder={placeholder}
        min={min}
        max={max}
        onChange={(event) => handleChange(name, event)}
      />
    </div>
  );
};
