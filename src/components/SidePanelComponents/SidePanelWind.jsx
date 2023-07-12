import windIcon from "../../assets/images/icons/WeatherIcon - wind.svg";

export default function SidePanelWind({
  windKph,
  windMph,
  gustKph,
  gustMph,
  speedKph,
  windDir,
  notLoadedCurrWeather
}) {
  function getWindDirectionFullName(direction) {
    let fullName;

    switch (direction) {
      case "N":
        fullName = "North";
        break;
      case "NNE":
        fullName = "North-Northeast";
        break;
      case "NE":
        fullName = "Northeast";
        break;
      case "ENE":
        fullName = "East-Northeast";
        break;
      case "E":
        fullName = "East";
        break;
      case "ESE":
        fullName = "East-Southeast";
        break;
      case "SE":
        fullName = "Southeast";
        break;
      case "SSE":
        fullName = "South-Southeast";
        break;
      case "S":
        fullName = "South";
        break;
      case "SSW":
        fullName = "South-Southwest";
        break;
      case "SW":
        fullName = "Southwest";
        break;
      case "WSW":
        fullName = "West-Southwest";
        break;
      case "W":
        fullName = "West";
        break;
      case "WNW":
        fullName = "West-Northwest";
        break;
      case "NW":
        fullName = "Northwest";
        break;
      case "NNW":
        fullName = "North-Northwest";
        break;
      default:
        fullName = "Unknown";
        break;
    }

    return fullName;
  }

  return (
    <section className="bg-[#A6ADBA1A] col-span-1 row-span-2 min-[375px]:col-span-2 min-[375px]:row-span-1 flex flex-col gap-4 items-center p-4 rounded-2xl">
      <div className="flex gap-3 self-start">
        <img src={windIcon} alt="wind icon" className="w-8" />
        <h1 className="font-bold text-xl">Wind</h1>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex">
          <h2 className="font-medium text-lg">
            {!notLoadedCurrWeather && speedKph ? windKph + " km/h" : !notLoadedCurrWeather && !speedKph ? windMph + " mph" : speedKph && notLoadedCurrWeather ? '-- km/h' : !speedKph &&  notLoadedCurrWeather && '-- mph'} wind
          </h2>
          <div className="divider divider-horizontal my-0 mx-2" />
          <h2 className="font-medium text-lg">
          {!notLoadedCurrWeather && speedKph ? gustKph + " km/h" : !notLoadedCurrWeather && !speedKph ? gustMph + " mph" : speedKph && notLoadedCurrWeather ? '-- km/h' : !speedKph &&  notLoadedCurrWeather && '-- mph'} gust
          </h2>
        </div>

        <div className="divider my-0" />
        <h2>
          Stay in touch with the wind&apos;s path from{" "}
          <span className="font-semibold">
            {!notLoadedCurrWeather ? getWindDirectionFullName(windDir) : '---'}
          </span>
        </h2>
      </div>
    </section>
  );
}
