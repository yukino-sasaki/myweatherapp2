import React,{useContext} from 'react'
import {Store} from './App'
import Style from './currentWeather.module.css'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

const CurrentWeather =()=>{
    const{weatherData} =useContext(Store)
    console.log(weatherData?.coord?.lat)
    return weatherData ? (
        <div className={Style.weather_parent}>
            <div className={Style.weatherBox}>
                <p>
                <RoomOutlinedIcon />
                <span>latitude: {weatherData.coord.lat},    longitude: {weatherData.coord.lon}</span>
                </p>
                <div>
                    Current Weather: {weatherData.weather[0].main}                
                </div>
                <div>
                    Current temperature: {weatherData.main.temp}
                </div>
            </div>
        </div>

    ): (<span>no data</span>)
}

export default CurrentWeather