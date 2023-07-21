// import SidePanelSunRiseSunSet from "./SidePanelSunRiseSunSet";
import SidePanelHumidity from "./SidePanelHumidity";
import SidePanelPrecipitations from "./SidePanelPrecipitations";
import SidePanelUv from "./SidePanelUv";
import SidePanelVisibility from "./SidePanelVisibility";
import SidePanelWind from "./SidePanelWind";
import { motion } from "framer-motion";

export default function SidePanelDetails({
  weatherData,
  speedKph,
  tempC,
  precipMm,
  notLoadedCurrWeather,
  scaleVariants,
  fromBottomVariants
}) {
  return (
    <motion.section
      layout
      variants={scaleVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-[repeat(auto-fill,_minmax(130px,_1fr))] items-start justify-center grid-rows-[auto] grid-flow-dense gap-3 w-full overflow-auto px-2"
    >
      <SidePanelWind
        fromBottomVariants={fromBottomVariants}
        notLoadedCurrWeather={notLoadedCurrWeather}
        windKph={!notLoadedCurrWeather && weatherData.current.wind_kph}
        windMph={!notLoadedCurrWeather && weatherData.current.wind_mph}
        gustKph={!notLoadedCurrWeather && weatherData.current.gust_kph}
        gustMph={!notLoadedCurrWeather && weatherData.current.gust_mph}
        windDir={!notLoadedCurrWeather && weatherData.current.wind_dir}
        speedKph={speedKph}
        tempC={tempC}
      />

      <SidePanelHumidity
        fromBottomVariants={fromBottomVariants}
        humidity={!notLoadedCurrWeather && weatherData.current.humidity}
        notLoadedCurrWeather={notLoadedCurrWeather}
      />
      <SidePanelPrecipitations
        fromBottomVariants={fromBottomVariants}
        precipMm={precipMm}
        precipin={!notLoadedCurrWeather && weatherData.current.precip_in}
        precipmm={!notLoadedCurrWeather && weatherData.current.precip_mm}
        notLoadedCurrWeather={notLoadedCurrWeather}
      />
      <SidePanelUv
        fromBottomVariants={fromBottomVariants}
        uv={!notLoadedCurrWeather && weatherData.current.uv}
        notLoadedCurrWeather={notLoadedCurrWeather}
      />
      <SidePanelVisibility
        fromBottomVariants={fromBottomVariants}
        speedKph={speedKph}
        visibKm={!notLoadedCurrWeather && weatherData.current.vis_km}
        visibMl={!notLoadedCurrWeather && weatherData.current.vis_miles}
        notLoadedCurrWeather={notLoadedCurrWeather}
      />

      {/* <SidePanelSunRiseSunSet
        time={time}
        date={date}
        currentAstronomy={currentAstronomy}
      /> */}
    </motion.section>
  );
}
