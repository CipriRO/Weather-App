import SidePanelSunRiseSunSet from "./SidePanelSunRiseSunSet";
import SidePanelWind from "./SidePanelWind";

export default function SidePanelDetails({
  weatherData,
  speedKph,
  tempC,
  currentAstronomy,
  date,
  time,
}) {
  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <SidePanelWind
        windKph={weatherData.current.wind_kph}
        windMph={weatherData.current.wind_mph}
        gustKph={weatherData.current.gust_kph}
        gustMph={weatherData.current.gust_mph}
        windDir={weatherData.current.wind_dir}
        speedKph={speedKph}
        tempC={tempC}
      />
      <SidePanelSunRiseSunSet
        time={time}
        date={date}
        currentAstronomy={currentAstronomy}
      />
    </div>
  );
}
