import './App.css';
import Header from './Header/header'
import Axios from './axios'
import React, {createContext,useState} from 'react';
import CurrentWeather from './currentWeather'

export const Store = createContext({
      weatherData: [],
      setWeatherData: ()=>null
  })
function App() {
     
    const[weatherData, setWeatherData] = useState(null)
  return (
    <Store.Provider value={{weatherData, setWeatherData}}>
    <div className="App">
      <Header />
      <Axios />
      <CurrentWeather />
    </div>
    </Store.Provider>
  );
}

export default App;
