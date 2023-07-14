import { isToday, isTomorrow, format } from "date-fns";

export default function DailyForecast({
  forecast,
  notLoadedForecast,
  tempC,
  days,
  daySelected,
  setDaySelected,
  unavailableIcon
}) {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-4">
      {(!notLoadedForecast ? forecast : [...Array(days)]).map((day, index) => (
        <div
          key={index}
          onClick={() => setDaySelected(index)}
          className={`bg-[#A6ADBA1A] relative rounded-2xl flex flex-col p-2 flex-1 shadow-md cursor-pointer ${
            daySelected === index &&
            "after:absolute after:-top-2 after:-left-2 after:-right-2 after:-bottom-2 after:pointer-events-none after:box-border after:border-2 after:border-[#bec6d41a] after:rounded-2xl"
          }`}
        >
          <h1 className="text-lg font-semibold">
            {!notLoadedForecast
              ? isToday(new Date(day.date))
                ? "Today"
                : isTomorrow(new Date(day.date))
                ? "Tomorrow"
                : format(new Date(day.date), "EEEE")
              : "---"}
          </h1>

          <div className="divider m-0" />

          <div className="flex flex-wrap gap-2">
              <img
                src={!notLoadedForecast ? day.day.condition.icon : unavailableIcon}
                alt="weather icon"
                className="w-16"
              />

            <div className="flex flex-col gap-1 flex-1 items-center">
              <h2>{!notLoadedForecast ? day.day.condition.text : "---"}</h2>

              <div className="flex gap-2">
                <p>
                  L:{" "}
                  <span className="font-semibold">
                    {!notLoadedForecast
                      ? tempC
                        ? day.day.mintemp_c + "°C"
                        : day.day.mintemp_f + "°F"
                      : "--"}
                  </span>
                </p>
                <p>
                  H:{" "}
                  <span className="font-semibold">
                    {!notLoadedForecast
                      ? tempC
                        ? day.day.maxtemp_c + "°C"
                        : day.day.maxtemp_f + "°F"
                      : "--"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
