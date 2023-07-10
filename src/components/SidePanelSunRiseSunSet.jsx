import sunriseIcon from "../assets/images/icons/WeatherIcon - sunrise.svg";
import sunsetIcon from "../assets/images/icons/WeatherIcon - sunset.svg";
import { isFuture } from "date-fns";

export default function SidePanelSunRiseSunSet({ currentAstronomy, date }) {
  
  const sunsetDate = new Date(`${date} ${currentAstronomy.astronomy.astro.sunset}`);
  const sunriseDate = new Date(`${date} ${currentAstronomy.astronomy.astro.sunrise}`);


  return (
    <div className="bg-[#A6ADBA1A] flex flex-col w-full gap-6 items-center p-4 rounded-2xl">
      <h1 className="font-bold self-start text-xl">Sunrise & Sunset</h1>

      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center gap-2">
          <img src={sunriseIcon} alt="sunrise icon" className="w-16" />
          <h2 className="text-lg flex flex-1 justify-center">
            {isFuture(sunriseDate) ? (
              <span>
                The sun will rise at{" "}
                <span className="font-semibold">
                  {currentAstronomy.astronomy.astro.sunrise}
                </span>
              </span>
            ) : (
              <span>
                The sun rose at{" "}
                <span className="font-semibold">
                  {currentAstronomy.astronomy.astro.sunrise}
                </span>
              </span>
            )}
          </h2>
        </div>

        <div className="divider my-0 mt-1" />

        <div className="flex justify-between items-center gap-2">
          <img src={sunsetIcon} alt="sunrise icon" className="w-16" />
          <h2 className="text-lg flex flex-1 justify-center">
            {isFuture(sunsetDate) ? (
              <span className="">
                The sun will set at{" "}
                <span className="font-semibold">
                  {currentAstronomy.astronomy.astro.sunset}
                </span>
              </span>
            ) : (
              <span>
                The sun set at{" "}
                <span className="font-semibold">
                  {currentAstronomy.astronomy.astro.sunset}
                </span>
              </span>
            )}
          </h2>
        </div>
      </div>
    </div>
  );
}