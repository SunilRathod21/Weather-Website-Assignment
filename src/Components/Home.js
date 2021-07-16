import React, { useState } from "react";
import axios from "axios";
import "./Home.css";
import "./style.css";
// import WEATHER_API_KEY from "../API";
const Home = () => {
  const [data, setData] = useState(null);
  const [inputCity, setInputCity] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");

  const getWeather = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const WEATHER_API_KEY = "414cfb58cb31f1298951391dca9e072b";
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${WEATHER_API_KEY}`
    );

    setData(res.data);
    const weather = res.data.weather[0].main;
    if (weather === "Clouds") {
      setWeatherIcon("fa-cloud cloud-color");
    } else if (weather === "Sunny") {
      setWeatherIcon("fa-sun sun-color");
    } else if (weather === "Rainy") {
      setWeatherIcon("fa-cloud-rain cloud-rain-color");
    } else {
      setWeatherIcon("fa-cloud cloud-color");
    }
  };

  return (
    <div className="home">
      <div className="home__left">
        <h1>
          Check weather for any location on Earth including over 200,000 cities!
        </h1>
        <form className="home__form">
          <input
            type="text"
            onChange={(e) => setInputCity(e.target.value)}
            value={inputCity}
            placeholder="Enter city name"
            required
          />
          <button className="btn__primary" type="submit" onClick={getWeather}>
            Get weather
          </button>
        </form>
        {data && weatherIcon ? (
          <div className="home__weatherContent">
            <div className="row">
              <p className="city">{data.name}</p>
              <i className={`fas ${weatherIcon}`}></i>
            </div>

            <h1>{Math.round(data.main.temp - 273.15)} &deg;C</h1>
            <div className="details">
              <p>
                Min{" "}
                <span>{Math.round(data.main.temp_min - 273.15)} &deg;C</span>
              </p>
              <p>
                Max{" "}
                <span>{Math.round(data.main.temp_max - 273.15)} &deg;C</span>
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="home__right">
        <img src="./Home.svg" alt="Home" />
      </div>
    </div>
  );
};

export default Home;
