import React from "react";
import "./weather.scss";
type Props = {
  todayImg: string;
  city: string;
  temperature: string;
  todayInfo: string;
  nextDay: string;
  nextDayImg: string;
  nextDayTemperature: string;
};

const Weathers: React.FC<Props> = ({
  todayImg,
  city,
  temperature,
  todayInfo,
  nextDay,
  nextDayImg,
  nextDayTemperature,
}) => {
  return (
    <div className="weather-box">
      <div className="today">
        <div className="img-div">
          <img src={todayImg} />
        </div>
        <div className="temp-today">
          <h2>Today</h2>
          <h1>{city}</h1>
          <p>
            Temperature: <span>{temperature}°C</span>
          </p>
          <p>{todayInfo}</p>
        </div>
      </div>
      <div className="next-days">
        <div className="next-day-item">
          <h3></h3>
          <img src="" />
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Weathers;
