import humidIcon from '../assets/images/icons/WeatherIcon - humidity.svg';

export default function SidePanelHumidity({ humidity, notLoadedCurrWeather }) {
  return (
    <div className="bg-[#A6ADBA1A] flex flex-col flex-1 gap-4 items-center p-4 rounded-2xl">
      <div className="flex gap-3 items-center self-start">
        <img src={humidIcon} alt="precipitations icon" className="w-6" />
        <h1 className="font-bold">Humidity</h1>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-5xl">
          {!notLoadedCurrWeather ? humidity : "--"}
          <span className="text-2xl"> %</span>
        </h3>
        <p>{!notLoadedCurrWeather ? 'right now' : '---'}</p>
      </div>
    </div>
  );
}
