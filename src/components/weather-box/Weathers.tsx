import React from "react";
import "./weather.scss";
type Props = {};

const Weathers: React.FC<Props> = (props: Props) => {
  return (
    <div className="weather-box">
      <div className="today">
        <img src="https://www.freepnglogos.com/uploads/sun-png/sun-day-rays-sun-image-pixabay-35.png" />
        <div className="temp-today">
          <h2>Today</h2>
          <h1>New York</h1>
          <p>
            Temperature: <span>17 C</span>
          </p>
          <p>Clear Sky</p>
        </div>
      </div>
      <div className="next-days">
        <div className="next-day-item">
          <h3>Wednesday</h3>
          <img src="https://www.freepnglogos.com/uploads/sun-png/sun-day-rays-sun-image-pixabay-35.png" />
          <p>21 C</p>
        </div>
      </div>
    </div>
  );
};

export default Weathers;
