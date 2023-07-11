import SidePanelHumidity from "./SidePanelHumidity";
import SidePanelPrecipitations from "./SidePanelPrecipitations";
import SidePanelUv from "./SidePanelUv";
import SidePanelVisibility from "./SidePanelVisibility";

export default function SidePanelGroup({
  precipMm,
  precipmm,
  precipin,
  humidity,
  uv,
  speedKph,
  visibKm,
  visibMl,
  notLoadedCurrWeather,
}) {
  return (
    <div className="flex w-full flex-wrap justify-between items-start gap-2">
      <SidePanelHumidity
        humidity={humidity}
        notLoadedCurrWeather={notLoadedCurrWeather}
      />
      <SidePanelPrecipitations
        precipMm={precipMm}
        precipin={!notLoadedCurrWeather && precipin}
        precipmm={!notLoadedCurrWeather && precipmm}
        notLoadedCurrWeather={notLoadedCurrWeather}
      />
      <SidePanelUv uv={uv} notLoadedCurrWeather={notLoadedCurrWeather} />
      <SidePanelVisibility
        speedKph={speedKph}
        visibKm={!notLoadedCurrWeather && visibKm}
        visibMl={!notLoadedCurrWeather && visibMl}
        notLoadedCurrWeather={notLoadedCurrWeather}
      />
    </div>
  );
}
