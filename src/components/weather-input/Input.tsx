import React from "react";
import "./Input.scss";
import { useState } from "react";

interface IProps {
  onCityChange: (city: string) => void;
}

const Input: React.FC<IProps> = ({ onCityChange }) => {
  const [city, setCity] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = () => {
    onCityChange(city);
  };

  return (
    <div className="input-div">
      <input
        type="text"
        id="input"
        placeholder="Give me a city..."
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Input;
