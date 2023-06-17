import "./App.scss";
import Weathers from "./components/weather-box/Weathers";
import Input from "./components/weather-input/Input";
import axios from "axios";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { TiWeatherStormy } from "react-icons/ti";


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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=3880adeae7cd4b6489c220039230306&q=${city}`
        );
        response.data && setIsLoading(true);
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
        setIsLoading(false);
        setData(weatherData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [city]);

  const handleCityChange = (newCity: string) => {
    setCity(newCity);
    if (newCity === "") {
      toast("Please enter a city.", {
        icon: <TiWeatherStormy />,
        style: {
          border: "1px solid #6999FA",
          padding: "16px",
          color: "#001220",
          background: "#cbd4eb",
        },
        iconTheme: {
          primary: "#001220",
          secondary: "#FFFAEE",
        },
      });
    }
    else if (newCity !== "" && newCity.length < 3) {
      toast.error("Please enter a valid city.",);
      return;
    }
  };

  return (
    <div className="app">
      <Toaster position="top-right" reverseOrder={false} />
      <Input onCityChange={handleCityChange} />
      {isLoading ? (
        <div className="loading">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading...</p>
        </div>
      ) : null}
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
