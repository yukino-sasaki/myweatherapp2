import './App.css';
import Header from './Header/header'
import Axios from './axios'
import React, {createContext,useState, useReducer} from 'react';
import CurrentWeather from './currentWeather'

const initialState ={
  currentData:[],
  searchData:[],
}

export const Store = createContext({
      weatherData: initialState,
      setWeatherData: ()=>null
  })
function App() {
     
  const reducer =(state, action)=>{
    console.log(action)
    switch(action.type){
      case 'DISPLAY_WEATHER':
        return {...state, currentData: action.currentData}
      
       default: return
    }
  }
    const[weatherData, setWeatherData] = useReducer(reducer,initialState)

  return (
    <Store.Provider value={{weatherData, setWeatherData}}>
    <div className="App">
      <Header />
      <CurrentWeather />
      <Axios />
    </div>
    </Store.Provider>
  );
}

export default App;
