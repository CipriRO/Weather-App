import { format } from "date-fns";

export default function Navbar({date, notLoadedCurrWeather}) {
  const formatDate = format(new Date(`${date} 18:00:00.000`), 'YYYY-MM-DD');
  const currentDay = format(formatDate, 'PPP');

  return (
    <nav className="absolute top-4 pl-3 left-4 right-4 rounded-2xl bg-[#A6ADBA1A] flex justify-between items-center">
      <h1>{!notLoadedCurrWeather ? currentDay : '---'}</h1>

      <div className="join rounded-full shadow-lg">
        <input
          type="text"
          name="searchInput"
          className="input join-item font-semibold"
          placeholder="Search Location Here.."
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
