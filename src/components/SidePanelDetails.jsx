import SidePanelSunRiseSunSet from "./SidePanelSunRiseSunSet";
import SidePanelGroup from "./SidePanelGroup";
import SidePanelWind from "./SidePanelWind";

export default function SidePanelDetails({
  weatherData,
  speedKph,
  tempC,
  precipMm,
  currentAstronomy,
  date,
  time,
}) {
  return (
    <div className="flex flex-col items-center gap-3 w-full overflow-auto">
      <SidePanelWind
        windKph={weatherData.current.wind_kph}
        windMph={weatherData.current.wind_mph}
        gustKph={weatherData.current.gust_kph}
        gustMph={weatherData.current.gust_mph}
        windDir={weatherData.current.wind_dir}
        speedKph={speedKph}
        tempC={tempC}
      />
      <SidePanelGroup
        precipMm={precipMm}
        precipmm={weatherData.current.precip_mm}
        precipin={weatherData.current.precip_in}
      />
      <SidePanelSunRiseSunSet
        time={time}
        date={date}
        currentAstronomy={currentAstronomy}
      />
    </div>
  );
}
