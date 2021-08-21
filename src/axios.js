import React,{useContext, useEffect, } from 'react';
import axios from 'axios'
import {Store} from './App'


const Axios =()=>{
   const {weatherData, setWeatherData} = useContext(Store)
    

const API_KEY ='9e3abc90f5468c5fe36b56f86a48a8cd'

const success=(position)=>{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const link =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&&appid=${API_KEY}&lang=ja`
    axios.get(link).then(res =>{
        setWeatherData(res.data)
        console.log(res.data)
        //  currentData ={
        //     weather: res.data.weather[0].main,
        //     temp: res.data.main.temp,
        //     description: res.data.weather[0].description,
        // }
      
    }).catch(err=>{
        console.log(err)
    })

    const weekLink =`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=9e3abc90f5468c5fe36b56f86a48a8cd&lang=ja`
    axios.get(weekLink).then(res =>{
        console.log(res,'week')
    }).catch(err=>{
        console.log(err)
    })
}

console.log(weatherData?.main?.temp)


const error =()=>{
    alert('not found')
}


useEffect(()=>{
navigator.geolocation.getCurrentPosition(success,error)
},[])
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&appid=${API_KEY}&lang=ja`)
    return(
        <div>
            
        </div>
    )
}

export default Axios