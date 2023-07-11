// import SidePanelSunRiseSunSet from "./SidePanelSunRiseSunSet";
import SidePanelGroup from "./SidePanelGroup";
import SidePanelWind from "./SidePanelWind";

export default function SidePanelDetails({
  weatherData,
  speedKph,
  tempC,
  precipMm,
  notLoadedCurrWeather,
}) {
  return (
    <div className="flex flex-col items-center gap-3 w-full overflow-auto">
      <SidePanelWind
        notLoadedCurrWeather={notLoadedCurrWeather}
        windKph={!notLoadedCurrWeather && weatherData.current.wind_kph}
        windMph={!notLoadedCurrWeather && weatherData.current.wind_mph}
        gustKph={!notLoadedCurrWeather && weatherData.current.gust_kph}
        gustMph={!notLoadedCurrWeather && weatherData.current.gust_mph}
        windDir={!notLoadedCurrWeather && weatherData.current.wind_dir}
        speedKph={speedKph}
        tempC={tempC}
      />
      <SidePanelGroup
        notLoadedCurrWeather={notLoadedCurrWeather}
        precipMm={precipMm}
        precipmm={!notLoadedCurrWeather && weatherData.current.precip_mm}
        precipin={!notLoadedCurrWeather && weatherData.current.precip_in}
        humidity={!notLoadedCurrWeather && weatherData.current.humidity}
        uv={!notLoadedCurrWeather && weatherData.current.uv}
        speedKph={speedKph}
        visibKm={!notLoadedCurrWeather && weatherData.current.vis_km}
        visibMl={!notLoadedCurrWeather && weatherData.current.vis_miles}
      />
      {/* <SidePanelSunRiseSunSet
        time={time}
        date={date}
        currentAstronomy={currentAstronomy}
      /> */}
    </div>
  );
}
