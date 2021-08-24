import React from 'react';
import EveryHourData from './everyHourData'

// 3時間ごとのデータを取ってくる
// mapとfilterで処理。現在の時間と照らし合わせて予報だけを表示させたい。
const WeeklyWeather =(props)=>{
    
    
    const dat = new Date()
    console.log(dat.getTime())
    return props?.data.list ? (
        <div>
            {props.data.list.filter(deta =>{
               return  Date.parse(deta.dt_txt.replace(' ', 'T')) > dat.getTime()
            }).map((data,index)=>{
                return <EveryHourData key ={index} dateTime={data.dt_txt} weather={data.weather[0].main} temp={data.main.temp} />
            })}
        </div>
    ):(<div>no data</div>)
}

export default WeeklyWeather

// {props.datmap(res=>{
//                return  <div>{res}</div>
//             })}