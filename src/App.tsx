import "./App.scss";
import Weathers from "./components/weather-box/Weathers";
import Input from "./components/weather-input/Input";

function App() {
  return (
    <div className="app">
      <Input title="City" />
      <Weathers />
    </div>
  );
}

export default App;
