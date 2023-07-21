import Search from "./Search";
import { motion } from "framer-motion";

export default function Navbar({
  dayWeek,
  currentDay,
  notLoadedForecast,
  searchResults,
  showLoadingSearch,
  setInputValue,
  setLocation
}) {
  return (
    <motion.nav
      layout
      className="mb-4 p-2 gap-2 rounded-2xl bg-[#A6ADBA1A] flex flex-wrap justify-around items-center"
    >
        <div className="sm:text-left text-center flex flex-col">
          <h1 className="text-lg font-bold">
            {!notLoadedForecast ? currentDay : "---"}
          </h1>
          <h3>{!notLoadedForecast ? dayWeek : "---"}</h3>
        </div>

        <Search
          layout
          setInputValue={setInputValue}
          showLoadingSearch={showLoadingSearch}
          searchResults={searchResults}
          setLocation={setLocation}
        />

      <a
        href="https://www.weatherapi.com/"
        title="Free Weather API"
        target="_blank"
        rel="noreferrer"
        className="sm:flex hidden flex-col text-left p-3 hover:bg-[#bec6d41a] transition-colors rounded-2xl"
      >
        <p className="text-sm">Powered by</p>
        <p className="font-bold">WeatherAPI.com</p>
      </a>
    </motion.nav>
  );
}
