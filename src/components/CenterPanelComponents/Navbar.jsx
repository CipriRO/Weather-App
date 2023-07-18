import Search from "./Search";
import { LayoutGroup, motion } from "framer-motion";

export default function Navbar({
  dayWeek,
  currentDay,
  notLoadedForecast,
  searchResults,
  showLoadingSearch,
  setInputValue,
}) {
  return (
    <motion.nav
      layout
      className="mb-4 sticky top-4 pl-3 left-4 right-4 rounded-2xl bg-[#A6ADBA1A] flex justify-between items-center"
    >
        <div className="text-left flex flex-col">
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
        />

      <a
        href="https://www.weatherapi.com/"
        title="Free Weather API"
        target="_blank"
        rel="noreferrer"
        className="self-start flex flex-col text-left p-3 hover:bg-[#bec6d41a] transition-colors rounded-2xl"
      >
        <p className="text-sm">Powered by</p>
        <p className="font-bold">WeatherAPI.com</p>
      </a>
    </motion.nav>
  );
}
