import React,{useContext, useEffect} from 'react'
import {Store} from './App'
import Style from './currentWeather.module.css'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';


const CurrentWeather =()=>{
    const{weatherData} =useContext(Store)
    console.log(weatherData)
    //console.log(weatherData?.currentData)
 
    return weatherData && weatherData.currentData.coord ? (
        <div className={Style.weather_parent}>
            <div className={Style.weatherBox}>
                <p>
                <RoomOutlinedIcon />
                <span>latitude: {weatherData.currentData.coord.lat},    longitude: {weatherData.currentData.coord.lon}</span>
                </p>
                <div>
                    Current Weather: {weatherData.currentData.weather[0].main}                
                </div>
                <div>
                    Current temperature: {weatherData.currentData.main.temp}
                </div>
            </div>
        </div>

    ): (<span>no data</span>)
}

export default CurrentWeather