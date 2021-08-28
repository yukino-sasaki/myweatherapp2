import "./App.css";
import Header from "./Header/header";
import Axios from "./axios";
import React, { createContext, useReducer } from "react";
import CurrentWeather from "./currentWeather";

//現在のデータはcurrentData, 3時間ごとのデータをeveryHourDataに
const initialState = {
  currentData: [],
  everyHourData: [],
};

export const Store = createContext({
  weatherData: initialState,
  setWeatherData: () => null,
});
function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "DISPLAY_WEATHER":
        return { ...state, currentData: action.currentData };
      case "EVERYHOURDATA_WEATHER":
        return { ...state, everyHourData: action.everyHourData };
      default:
        return;
    }
  };
  const [weatherData, setWeatherData] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ weatherData, setWeatherData }}>
      <div className="App">
        <Header />
        <CurrentWeather />
        <Axios />
      </div>
    </Store.Provider>
  );
}

export default App;
