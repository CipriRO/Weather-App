import SidePanelDetails from "./SidePanelDetails";

export default function SidePanel({
  weatherData,
  time,
  notLoadedCurrWeather,
  tempC,
  precipMm,
  speedKph,
}) {
  return (
    <>
      <div className="flex flex-col items-center p-6 fixed top-0 bottom-0 right-0 side-bar w-[25.375rem]">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex justify-between items-center">
            <h1 className="flex flex-col text-left">
              <p className="text-xl font-bold">
                {!notLoadedCurrWeather ? weatherData.location.name : "--"}{" "}
                {/* #A6ADBA1A */}
              </p>
              <p className="opacity-50 text-base font-medium">
                {!notLoadedCurrWeather ? weatherData.location.country : "--"}
              </p>
            </h1>

            {notLoadedCurrWeather && <span className="loading loading-ring loading-lg" />}

            <h3 className="font-medium text-2xl">
              {!notLoadedCurrWeather ? time : "--"}
            </h3>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 justify-center">
              {!notLoadedCurrWeather && (
                <img
                  src={weatherData.current.condition.icon}
                  alt="weather icon"
                  className="w-20"
                />
              )}

              <h3 className="font-semibold text-6xl">
                {!notLoadedCurrWeather ? (tempC ? weatherData.current.temp_c + '°C' : weatherData.current.temp_f + '°F') : (tempC ? "--°C" : "--°F")}
              </h3>
            </div>

            <div className="flex flex-col">
              { !notLoadedCurrWeather && (weatherData.current.feelslike_c !== weatherData.current.temp_c) && (
                <p>Feels like {tempC && !notLoadedCurrWeather ? weatherData.current.feelslike_c + '°C' : !tempC && !notLoadedCurrWeather ? weatherData.current.feelslike_f + '°F' : tempC && notLoadedCurrWeather ? '--°C' : !tempC && notLoadedCurrWeather && '--°F'}</p>
              )}
              <p className="font-semibold">
                {!notLoadedCurrWeather && weatherData.current.condition.text}
              </p>
            </div>
          </div>
        </div>

        <div className="divider" />

        <SidePanelDetails
          weatherData={weatherData}
          speedKph={speedKph}
          tempC={tempC}
          precipMm={precipMm}
          notLoadedCurrWeather={notLoadedCurrWeather}
        />
      </div>
    </>
  );
}
