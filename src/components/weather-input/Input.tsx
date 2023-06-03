import React from "react";
import "./Input.scss";

type IProps = {
  title: string;
};

const Input: React.FC<IProps> = ({ title }) => {
  return (
    <div className="input-div">
      <label htmlFor="input">{title}</label>
      <input type="text" id="input" placeholder="Give me a city..." />
    </div>
  );
};

export default Input;
