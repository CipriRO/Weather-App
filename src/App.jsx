import { useEffect, useState } from "react";
import "./App.css";
import SidePanel from "./SidePanel";
import CenterPanel from "./CenterPanel";
import { AnimatePresence } from "framer-motion";

function App() {
  const apiKey = "c3cb9ca198f043e298794658230907";
  const [tempC, setTempC] = useState(true);
  const [speedKph, setSpeedKph] = useState(true);
  const [precipMm, setPrecipMm] = useState(true);
  const [forecast, setForecast] = useState();
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [itsToday, setItsToday] = useState();
  const [notLoadedForecast, setNotLoadedForecast] = useState(true);
  const [location, setLocation] = useState("auto:ip");
  const scaleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: [0.39, 0, 0.15, 0.99],
        duration: 1,
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const fromRightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { ease: [0.39, 0, 0.15, 0.99], duration: 1 },
    },
  };

  const fromBottomVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.39, 0, 0.15, 0.99], duration: 1 },
    },
  };

  const unavailableIcon =
    "data:image/png;base64,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";
  const days = 3;

  useEffect(() => {
    if (forecast) {
      const timeout = setTimeout(() => {
        setNotLoadedForecast(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [forecast]);

  useEffect(() => {
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

    fetchcurrentForecast();
  }, [location]);

  !notLoadedForecast && console.log("Forecast: ", forecast);

  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsLg(window.innerWidth >= 1024);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="w-full h-full flex gap-2 justify-between">
        {/* <ForecastVariable setForecast={setForecast} setNotLoadedForecast={setNotLoadedForecast} /> */}
        <CenterPanel
          forecast={forecast}
          fromRightVariants={fromRightVariants}
          unavailableIcon={unavailableIcon}
          days={days}
          fullDate={!notLoadedForecast && forecast.location.localtime}
          notLoadedForecast={notLoadedForecast}
          tempC={tempC}
          apiKey={apiKey}
          speedKph={speedKph}
          precipMm={precipMm}
          scaleVariants={scaleVariants}
          itsToday={itsToday}
          setItsToday={setItsToday}
          setLocation={setLocation}
          showSidePanel={showSidePanel}
          setShowSidePanel={setShowSidePanel}
        />

        <AnimatePresence>
          {(isLg || showSidePanel) && (
            <SidePanel
              scaleVariants={scaleVariants}
              fromBottomVariants={fromBottomVariants}
              weatherData={forecast}
              unavailableIcon={unavailableIcon}
              time={
                !notLoadedForecast && forecast.location.localtime.split(" ")[1]
              }
              notLoadedCurrWeather={notLoadedForecast}
              tempC={tempC}
              speedKph={speedKph}
              precipMm={precipMm}
              showSidePanel={showSidePanel}
              setShowSidePanel={setShowSidePanel}
            />
          )}
        </AnimatePresence>
      </section>
    </>
  );
}

export default App;
