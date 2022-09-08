import React from "react";
import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setWeatherDetailedData } from "./stores/WeatherData";

const App = () => {
  const APIKey = "9c8406e70439e542e476139065a7d27e";
  const city = useSelector((state) => state.searchTerm.term);
  const dispatch = useDispatch();

  const getWeatherInfos = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
        )
        .then((res) => dispatch(setWeatherDetailedData(res.data)))
        .catch(dispatch(setWeatherDetailedData([{}])));
    }
  };
  return (
    <div>
      <SearchBar getWeatherInfos={getWeatherInfos} />
      <WeatherInfo />
    </div>
  );
};

export default App;
