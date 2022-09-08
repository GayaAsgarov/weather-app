import { createSlice } from "@reduxjs/toolkit";

export const WeatherData = createSlice({
    name: 'weatherData',
    initialState: {
        weatherDetailedData: [{}]
    },
    reducers: {
        setWeatherDetailedData: (state, action) => {
            state.weatherDetailedData = action.payload;
        }
    }
})

export const { setWeatherDetailedData } = WeatherData.actions;

export default WeatherData.reducer;