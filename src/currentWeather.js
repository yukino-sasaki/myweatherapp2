import React, { useContext } from "react";
import { Store } from "./App";
import Style from "./currentWeather.module.css";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import Icon from "./icon";
import Media from "react-responsive";

//現在の天気予報データ
const CurrentWeather = () => {
  const { weatherData } = useContext(Store);

  return weatherData && weatherData.currentData.coord ? (
    <>
      <Media query="(max-width: 750px)">
        <div>
          <div className={Style.media_weather_parent}>
            <div className={Style.media_weatherBox}>
              <p className={Style.current_title}>Current Weather Information</p>
              <p className={Style.location}>
                <RoomOutlinedIcon />
                <span>
                  {weatherData.currentData.name} latitude:{" "}
                  {weatherData.currentData.coord.lat}, longitude:{" "}
                  {weatherData.currentData.coord.lon}
                </span>
              </p>
              <div>
                <div className={Style.box_weather}>
                  <div className={Style.weather_font_style}>
                    <Icon
                      props={weatherData.currentData.weather[0].main}
                      size="150"
                    />
                  </div>
                </div>
                <div className={Style.weather_font_style}>
                  <div>
                    Weather:{" "}
                    <span className={Style.font_style}>
                      {weatherData.currentData.weather[0].main}{" "}
                    </span>
                  </div>
                  <div>
                    temperature:{" "}
                    <span className={Style.font_style}>
                      {weatherData.currentData.main.temp} ℃
                    </span>
                  </div>
                  <div>
                    Max temperature:{" "}
                    <span className={Style.font_style}>
                      {weatherData.currentData.main.temp_max} ℃
                    </span>
                  </div>
                  <div>
                    Min temperature:{" "}
                    <span className={Style.font_style}>
                      {weatherData.currentData.main.temp_min} ℃
                    </span>
                  </div>
                  <div>
                    Wind speed:{" "}
                    <span className={Style.font_style}>
                      {weatherData.currentData.wind.speed} m/s
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Media>
      <Media query="(min-width: 751px)">
        <div>
          <div className={Style.weather_parent}>
            <div className={Style.weatherBox}>
              <p className={Style.current_title}>Current Weather Information</p>
              <p className={Style.location}>
                <RoomOutlinedIcon />
                <span>
                  {weatherData.currentData.name} latitude:{" "}
                  {weatherData.currentData.coord.lat}, longitude:{" "}
                  {weatherData.currentData.coord.lon}
                </span>
              </p>
              <div className={Style.box_layout}>
                <div>
                  <div className={Style.weather_icon}>
                    <Icon
                      props={weatherData.currentData.weather[0].main}
                      size="150"
                    />
                  </div>
                </div>
                <div className={Style.box_information}>
                  <div>
                    Weather:{" "}
                    <span className={Style.font_style}>
                      {weatherData.currentData.weather[0].main}{" "}
                    </span>
                  </div>
                  <div>
                    temperature:{" "}
                    <span className={Style.font_style}>
                      {weatherData.currentData.main.temp} ℃
                    </span>
                  </div>
                  <div>
                    Max temperature:{" "}
                    <span className={Style.font_style}>
                      {weatherData.currentData.main.temp_max} ℃
                    </span>
                  </div>
                  <div>
                    Min temperature:{" "}
                    <span className={Style.font_style}>
                      {weatherData.currentData.main.temp_min} ℃
                    </span>
                  </div>
                  <div>
                    Wind speed:{" "}
                    <span className={Style.font_style}>
                      {weatherData.currentData.wind.speed} m/s
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Media>
    </>
  ) : (
    <span></span>
  );
};

export default CurrentWeather;
