import { useEffect, useState } from "react";
import "./App.css";
import SidePanel from "./SidePanel";
import CenterPanel from "./CenterPanel";
import ForecastVariable from "./components/forecastVariable";

function App() {
  const [tempC, setTempC] = useState(true);
  const [speedKph, setSpeedKph] = useState(true);
  const [precipMm, setPrecipMm] = useState(true);
  const [forecast, setForecast] = useState();
  const [notLoadedForecast, setNotLoadedForecast] = useState(true);
  const days = 3;

  useEffect(() => {
    if (forecast) {
      const timeout = setTimeout(() => {
        setNotLoadedForecast(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [forecast])

  useEffect(() => {
    const apiKey = "c3cb9ca198f043e298794658230907";
    const location = "Dumbraveni,Suceava";

    async function fetchcurrentForecast() {
      try {
        const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=${days}&alerts=yes&aqi=no`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        setForecast(data);
      } catch (error) {
        console.log("Error:", error);
      }
    }

    // fetchcurrentForecast();

    const timeout = setTimeout(() => {
      //remove these lines after the project is done
      setNotLoadedForecast(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  !notLoadedForecast && console.log("Forecast: ", forecast);

  return (
    <>
      <section className="w-full h-full flex justify-between">
        <ForecastVariable setForecast={setForecast} />
        <CenterPanel
          forecast={forecast}
          days={days}
          fullDate={!notLoadedForecast && forecast.location.localtime}
          notLoadedForecast={notLoadedForecast}
          tempC={tempC}
          speedKph={speedKph}
          precipMm={precipMm}
        />

        <SidePanel
          weatherData={forecast}
          time={!notLoadedForecast && forecast.location.localtime.split(" ")[1]}
          notLoadedCurrWeather={notLoadedForecast}
          tempC={tempC}
          speedKph={speedKph}
          precipMm={precipMm}
        />
      </section>
    </>
  );
}

export default App;
