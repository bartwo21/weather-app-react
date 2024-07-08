import React from "react";
import "./Input.scss";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

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
        data-cy="input"
      />
      <button data-cy="submit" onClick={handleSubmit}>
        <BiSearchAlt />
      </button>
    </div>
  );
};

export default Input;
