import windIcon from "../assets/images/icons/WeatherIcon - wind.svg";

export default function SidePanelWind({
  windKph,
  windMph,
  gustKph,
  gustMph,
  speedKph,
  windDir,
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
    <div className="bg-[#A6ADBA1A] flex gap-6 items-center p-4 rounded-2xl">
      <img src={windIcon} alt="wind icon" className="w-16" />

      <div className="flex flex-col">
        <div className="flex flex-col text-left gap-1">
          <h1 className="font-bold text-xl">Wind</h1>
          <div className="flex">
            <h2 className="font-medium text-lg">
              {speedKph ? windKph + " km/h" : windMph + " mph"} wind
            </h2>
            <div className="divider divider-horizontal my-0" />
            <h2 className="font-medium text-lg">
              {speedKph ? gustKph + " km/h" : gustMph + " mph"} gust
            </h2>
          </div>
        </div>

        <div>
          <div className="divider my-0" />
          <h2>
            Stay in touch with the wind&apos;s path from <span className="font-semibold">{getWindDirectionFullName(windDir)}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
