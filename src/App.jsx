import { useEffect, useState } from "react";
import "./App.css";
import SidePanel from "./components/sidePanel";

function App() {
  const [tempC, setTempC] = useState(true);
  const [speedKph, setSpeedKph] = useState(true);
  const [precipMm, setPrecipMm] = useState(true);
  const [currentWeather, setcurrentWeather] = useState();
  //   {
  //   location: {
  //     name: "Bucharest",
  //     region: "Bucuresti",
  //     country: "Romania",
  //     lat: 44.43,
  //     lon: 26.1,
  //     tz_id: "Europe/Bucharest",
  //     localtime_epoch: 1688994360,
  //     localtime: "2023-07-10 16:06",
  //   },
  //   current: {
  //     last_updated_epoch: 1688994000,
  //     last_updated: "2023-07-10 16:00",
  //     temp_c: 32,
  //     temp_f: 89.6,
  //     is_day: 1,
  //     condition: {
  //       text: "Sunny",
  //       icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
  //       code: 1000,
  //     },
  //     wind_mph: 8.1,
  //     wind_kph: 13,
  //     wind_degree: 280,
  //     wind_dir: "W",
  //     pressure_mb: 1016,
  //     pressure_in: 30,
  //     precip_mm: 0,
  //     precip_in: 0,
  //     humidity: 28,
  //     cloud: 0,
  //     feelslike_c: 32.9,
  //     feelslike_f: 91.2,
  //     vis_km: 10,
  //     vis_miles: 6,
  //     uv: 7,
  //     gust_mph: 8.5,
  //     gust_kph: 13.7,
  //   },
  // }
  const [currentAstronomy, setcurrentAstronomy] = useState();
  //   {
  //   location: {
  //     name: "Bucharest",
  //     region: "Bucuresti",
  //     country: "Romania",
  //     lat: 44.43,
  //     lon: 26.1,
  //     tz_id: "Europe/Bucharest",
  //     localtime_epoch: 1688994357,
  //     localtime: "2023-07-10 16:05",
  //   },
  //   astronomy: {
  //     astro: {
  //       sunrise: "05:41 AM",
  //       sunset: "09:01 PM",
  //       moonrise: "12:46 AM",
  //       moonset: "02:00 PM",
  //       moon_phase: "Last Quarter",
  //       moon_illumination: "51",
  //       is_moon_up: 1,
  //       is_sun_up: 0,
  //     },
  //   },
  // }
  const [notLoadedCurrWeather, setNotLoadedCurrWeather] = useState(true);
  const [notLoadedCurrAstronomy, setNotLoadedCurrAstronomy] = useState(true);

  let date = "";
  let time = "";

  if (!notLoadedCurrWeather) {
    const dateAndTime = currentWeather.location.localtime;
    date = dateAndTime.split(" ")[0];
    time = dateAndTime.split(" ")[1];
  }

  useEffect(() => {
    const apiKey = "c3cb9ca198f043e298794658230907";
    const location = "Romania";

    async function fetchcurrentWeather() {
      try {
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        setcurrentWeather(data);
        if (data) {
          const timeout = setTimeout(() => {
            setNotLoadedCurrWeather(false);
          }, 1500);

          return () => clearTimeout(timeout);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    }

    async function fetchcurrentAstronomy() {
      try {
        const apiUrl = `https://api.weatherapi.com/v1/astronomy.json?key=${apiKey}&q=${location}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        setcurrentAstronomy(data);
        if (data) {
          const timeout = setTimeout(() => {
            setNotLoadedCurrAstronomy(false);
          }, 1500);

          return () => clearTimeout(timeout);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    }

    fetchcurrentWeather();
    // fetchcurrentAstronomy();
  }, []);

  !notLoadedCurrWeather && console.log("weather: ", currentWeather);
  !notLoadedCurrAstronomy && console.log("astronomy: ", currentAstronomy);

  return (
    <>
      <SidePanel
        weatherData={currentWeather}
        time={time}
        notLoadedCurrWeather={notLoadedCurrWeather}
        tempC={tempC}
        speedKph={speedKph}
        precipMm={precipMm}
      />
    </>
  );
}

export default App;
