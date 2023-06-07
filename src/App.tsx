import "./App.scss";
import Weathers from "./components/weather-box/Weathers";
import Input from "./components/weather-input/Input";
import axios from "axios";
import { useState, useEffect } from "react";

interface IWeather {
  todayImg: string;
  city: string;
  temperature: string;
  todayInfo: string;
  nextDay: object;
}

function App() {
  const [data, setData] = useState<IWeather[]>([]);
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=3880adeae7cd4b6489c220039230306&q=${city}`
        );
        const currentDay = response.data.current;
        const location = response.data.location;
        const tempToday = currentDay.temp_c.toString();
        const icon = currentDay.condition.icon;
        const info = currentDay.condition.text;
        const position = location.name;

        const response2 = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=942b33899592b904111003ec640c1044&units=metric`
        );
        const nextDay = response2.data.list;

        const weatherData: IWeather[] = [
          {
            todayImg: icon,
            city: position,
            temperature: tempToday,
            todayInfo: info,
            nextDay: [nextDay],
          },
        ];
        setData(weatherData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [city]);

  const handleCityChange = (newCity: string) => {
    setCity(newCity);
  };

  return (
    <div className="app">
      <Input onCityChange={handleCityChange} />

      {data.map((weather, index) => (
        <Weathers
          key={index}
          todayImg={weather.todayImg}
          city={weather.city}
          temperature={weather.temperature}
          todayInfo={weather.todayInfo}
          nextDay={[weather.nextDay]}
        />
      ))}
    </div>
  );
}

export default App;
