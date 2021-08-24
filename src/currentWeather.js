import React,{useContext, useEffect} from 'react'
import {Store} from './App'
import Style from './currentWeather.module.css'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import Icon from './icon'


const CurrentWeather =()=>{
    const{weatherData} =useContext(Store)
   
    //console.log(weatherData?.currentData)
 
    return weatherData && weatherData.currentData.coord ? (
        <div>
            <div className={Style.weather_parent}>
                <div className={Style.weatherBox}>
                    <p className={Style.current_title}>Current Weather Information</p>
                    <p>
                    <RoomOutlinedIcon />
                    <span>latitude: {weatherData.currentData.coord.lat},    longitude: {weatherData.currentData.coord.lon}</span>
                    </p>
                    <div class={Style.weather_icon}>
                          <Icon props={weatherData.currentData.weather[0].main} size="200"/>
                    </div>

                  
                    <div>
                        Weather: {weatherData.currentData.weather[0].main}                
                    </div>
                    <div>
                        temperature: {weatherData.currentData.main.temp}
                    </div>
                </div>
            </div>
        </div>

    ): (<span>no data</span>)
}

export default CurrentWeather