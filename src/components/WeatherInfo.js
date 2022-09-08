import React from "react";
import { useSelector } from "react-redux";

const WeatherInfo = () => {
  const data = useSelector((state) => state.weatherData.weatherDetailedData);
  console.log(data);

  if (JSON.stringify(data) === "[{}]") {
    return <div>No result</div>;
  }
  return (
    <div>
      <h1>{data.name}</h1>
      {data.main ? <p>Overall temperature : {data.main.temp}</p> : null}
      {data.main ? <p>Maximum temperature : {data.main.temp_max}</p> : null}
      {data.main ? <p>Minimum temperature : {data.main.temp_min}</p> : null}
      {data.main ? <p>Pressure : {data.main.pressure}</p> : null}
      {data.weather ? <p>Weather description : {data.weather[0].description}</p> : null}
      {data.weather ? <p>Main Weather : {data.weather[0].main}</p> : null}
      {data.wind ? <p>Wind Speed : {data.wind.speed}</p> : null}
    </div>
  );
};

export default WeatherInfo;
