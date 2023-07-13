import { format } from "date-fns";

export default function Navbar({date, notLoadedCurrWeather}) {
  const dateVar = new Date(date);
  const currentDay = format(dateVar, 'PPP');
  const dayWeek = format(dateVar, 'EEEE');

  return (
    <nav className="absolute top-4 pl-3 left-4 right-4 rounded-2xl bg-[#A6ADBA1A] flex justify-between items-center">
      <div className="text-left flex flex-col">
        <h1 className="text-lg font-bold">{!notLoadedCurrWeather ? currentDay : '---'}</h1>
        <h3>{!notLoadedCurrWeather ? dayWeek : '---'}</h3>
      </div>
     

      <div className="join rounded-full shadow-lg">
        <input
          type="text"
          name="searchInput"
          className="input join-item font-semibold"
          placeholder="Search Location Here..."
        />
        <button className="btn join-item">
          <svg
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"></path>
            <path d="m21 21-6-6"></path>
          </svg>
        </button>
      </div>

      <a
        href="https://www.weatherapi.com/"
        title="Free Weather API"
        target="_blank"
        rel="noreferrer"
        className="self-start flex flex-col text-left p-3 hover:bg-[#bec6d41a] transition-colors rounded-2xl"
      >
        <p className="text-sm">Powered by</p>
        <p className="font-bold">WeatherAPI.com</p>
      </a>


    </nav>
  );
}
