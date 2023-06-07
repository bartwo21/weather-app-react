import React from "react";
import "./weather.scss";
type Props = {
  todayImg: string;
  city: string;
  temperature: string;
  todayInfo: string;
  nextDay: any;
};

const Weathers: React.FC<Props> = ({
  todayImg,
  city,
  temperature,
  todayInfo,
  nextDay,
}) => {
  console.log(nextDay[0][0]);
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
          <h3>{nextDay[0][0][8].dt_txt.substring(0, 10)}</h3>
          <div className="next-day-item-desc">
            <h2>{nextDay[0][0][8].weather[0].description.toUpperCase()}</h2>
            <p>{nextDay[0][0][8].main.temp.toString().substring(0, 2)}°C</p>
          </div>
        </div>
        <div className="next-day-item">
          <h3>{nextDay[0][0][16].dt_txt.substring(0, 10)}</h3>
          <div className="next-day-item-desc">
            <h2>{nextDay[0][0][16].weather[0].description.toUpperCase()}</h2>
            <p>{nextDay[0][0][16].main.temp.toString().substring(0, 2)}°C</p>
          </div>
        </div>
        <div className="next-day-item">
          <h3>{nextDay[0][0][24].dt_txt.substring(0, 10)}</h3>
          <div className="next-day-item-desc">
            <h2>{nextDay[0][0][24].weather[0].description.toUpperCase()}</h2>
            <p>{nextDay[0][0][24].main.temp.toString().substring(0, 2)}°C</p>
          </div>
        </div>
        <div className="next-day-item">
          <h3>{nextDay[0][0][32].dt_txt.substring(0, 10)}</h3>
          <div className="next-day-item-desc">
            <h2>{nextDay[0][0][32].weather[0].description.toUpperCase()}</h2>
            <p>{nextDay[0][0][32].main.temp.toString().substring(0, 2)}°C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weathers;
