import { configureStore } from '@reduxjs/toolkit';

import SearchTermReducer from './SearchTerm';
import WeatherDataReducer from './WeatherData';

export default configureStore({
    reducer: {
        searchTerm: SearchTermReducer,
        weatherData: WeatherDataReducer
    }
});