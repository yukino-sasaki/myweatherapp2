import React,{useContext, useEffect, useState} from 'react';
import axios from 'axios'
import {Store} from './App'
import WeeklyWeather from './3hweeklyweather'

export const API_KEY ='9e3abc90f5468c5fe36b56f86a48a8cd'
const Axios =()=>{
   const {weatherData, setWeatherData} = useContext(Store)
 
    


const success=  async (position)=>{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    //現時点での天気を取得する
    const link =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&&appid=${API_KEY}&lang=ja`
    await axios.get(link).then(res =>{
        setWeatherData({type: 'DISPLAY_WEATHER', currentData :res.data})
        console.log(res.data)

    }).catch(err=>{
        alert('情報を取得できませんでした。')
    })
    //3時間ごとの天気を取得する
    const weekLink =`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=9e3abc90f5468c5fe36b56f86a48a8cd&lang=ja`
     await axios.get(weekLink).then(res =>{
        console.log(res,'week')
        setWeatherData({type: 'EVERYHOURDATA_WEATHER', everyHourData: res.data})
        console.log(res.data)
    }).catch(err=>{
        alert('情報を取得できませんでした。')
    })
}




 const error =()=>{
    alert('not found')
}


useEffect(()=>{
    console.log('useEffecgt')
 navigator.geolocation.getCurrentPosition(success,error)
},[])

    return(
        <div>
            <WeeklyWeather />
        </div>
    )
}

export default Axios