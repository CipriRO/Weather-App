import Navbar from "./components/CenterPanelComponents/Navbar";
import DailyForecast from "./components/CenterPanelComponents/DailyForecast";
import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import HourlyForecast from "./components/CenterPanelComponents/HourlyForecast";
import { motion } from "framer-motion";

export default function CenterPanel({
  forecast,
  fullDate,
  notLoadedForecast,
  days,
  // speedKph,
  // precipMm,
  tempC,
  apiKey,
  fromRightVariants,
  unavailableIcon,
  scaleVariants,
  itsToday,
  setItsToday,
  setLocation,
  showSidePanel,
  setShowSidePanel,
}) {
  const dateVar = new Date(fullDate);
  const currentDay = format(dateVar, "PPP");
  const dayWeek = format(dateVar, "EEEE");
  const [searchResults, setSearchResults] = useState();
  const [inputValue, setInputValue] = useState();
  const [showLoadingSearch, setShowLoadingSearch] = useState(false);
  const [daySelected, setDaySelected] = useState(0);
  const timeout = useRef();

  const dayPeriod = (capitalize) => {
    const hrs = dateVar.getHours();

    if (hrs < 12) {
      return !capitalize ? "morning" : "Morning";
    } else if (hrs < 18) {
      return !capitalize ? "afternoon" : "Afternoon";
    } else {
      return !capitalize ? "evening" : "Evening";
    }
  };

  useEffect(() => {
    setShowLoadingSearch(!inputValue ? false : true);
    setSearchResults();

    clearTimeout(timeout.current);

    if (inputValue) {
      timeout.current = setTimeout(async () => {
        const apiUrl = `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${inputValue}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        data && setSearchResults(data);
        data && setShowLoadingSearch(false);
      }, 1000);
    }
  }, [inputValue, apiKey]);

  return (
    <motion.article
      layout
      variants={scaleVariants}
      initial="hidden"
      animate="visible"
      className="flex center-panel max-h-screen flex-col gap-4 flex-1 p-3 pr-1 overflow-auto"
    >
      <Navbar
        currentDay={currentDay}
        dayWeek={dayWeek}
        notLoadedForecast={notLoadedForecast}
        setInputValue={setInputValue}
        showLoadingSearch={showLoadingSearch}
        searchResults={searchResults}
        setLocation={setLocation}
      />

      <motion.section layout className="flex flex-col p-2 gap-3">
        <div className="flex flex-col text-left gap-2">
          <h1 className="text-3xl font-bold">
            {!notLoadedForecast ? "Good " + dayPeriod(true) : "---"}
          </h1>
          <div className="flex flex-col">
            <p>Take a look at today&apos;s hourly forecast below.</p>
            <p>
              <span className="font-semibold">Select</span> a time below to see
              more detailed information.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <HourlyForecast
            daySelected={daySelected}
            tempC={tempC}
            forecast={!notLoadedForecast && forecast.forecast.forecastday}
            notLoadedForecast={notLoadedForecast}
            unavailableIcon={unavailableIcon}
            fromRightVariants={fromRightVariants}
            itsToday={itsToday}
            fullDate={fullDate}
            showSidePanel={showSidePanel}
            setShowSidePanel={setShowSidePanel}
          />

          <p className="self-start text-left">
            Select the desired day to view the weather data.
          </p>

          <DailyForecast
            daySelected={daySelected}
            setDaySelected={setDaySelected}
            days={days}
            tempC={tempC}
            fromRightVariants={fromRightVariants}
            forecast={!notLoadedForecast && forecast.forecast.forecastday}
            notLoadedForecast={notLoadedForecast}
            unavailableIcon={unavailableIcon}
            setItsToday={setItsToday}
          />
        </div>
      </motion.section>
    </motion.article>
  );
}
