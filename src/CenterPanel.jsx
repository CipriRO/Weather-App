import Navbar from "./components/CenterPanelComponents/Navbar";
import DailyForecast from "./components/CenterPanelComponents/DailyForecast";
import { format } from "date-fns";
import { useState } from "react";
import HourlyForecast from "./components/CenterPanelComponents/HourlyForecast";

export default function CenterPanel({
  forecast,
  fullDate,
  notLoadedForecast,
  days,
  // speedKph,
  // precipMm,
  tempC,
}) {
  const dateVar = new Date(fullDate);
  const currentDay = format(dateVar, "PPP");
  const dayWeek = format(dateVar, "EEEE");
  const [daySelected, setDaySelected] = useState(0);

  const dayPeriod = (capitalize) => {
    const hrs = dateVar.getHours();

    if (hrs < 12) {
      return !capitalize ? "morning" : "Morning";
    } else if (hrs < 18) {
      return !capitalize ? "afternoon" : "Afternoon";
    } else {
      return !capitalize ? "evening" : "Evening";
    }
  };

  return (
    <article className="flex flex-col gap-4 flex-1 p-3 overflow-auto">
      <Navbar
        currentDay={currentDay}
        dayWeek={dayWeek}
        notLoadedForecast={notLoadedForecast}
      />

      <section className="flex flex-col p-4 gap-3">
        <div className="flex flex-col text-left gap-2">
          <h1 className="text-3xl font-bold">
            {!notLoadedForecast ? "Good " + dayPeriod(true) : "---"}
          </h1>
          <div className="flex flex-col">
            <p>Take a look at today&apos;s hourly forecast below.</p>
            <p>Select a time below to see more detailed information.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <HourlyForecast
            daySelected={daySelected}
            tempC={tempC}
            forecast={!notLoadedForecast && forecast.forecast.forecastday}
            notLoadedForecast={notLoadedForecast}
          />

          <p className="self-start">Select the desired day to view the weather data.</p>

          <DailyForecast
            daySelected={daySelected}
            setDaySelected={setDaySelected}
            days={days}
            tempC={tempC}
            forecast={!notLoadedForecast && forecast.forecast.forecastday}
            notLoadedForecast={notLoadedForecast}
          />
        </div>
      </section>
    </article>
  );
}
