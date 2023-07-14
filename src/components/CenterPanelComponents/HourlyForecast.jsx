import { format } from "date-fns";

export default function HourlyForecast({
  notLoadedForecast,
  forecast,
  tempC,
  daySelected,
}) {
  return (
    <section className="grid grid-flow-col gap-4 py-2 overflow-auto">
      {(!notLoadedForecast ? forecast[daySelected].hour : [...Array(24)]).map(
        (hour, index) => (
          <div
            key={index}
            className="bg-[#A6ADBA1A] relative rounded-2xl flex w-24 flex-col items-center p-2 flex-1 shadow-md cursor-pointer"
          >
            <h1 className="font-semibold text-lg">
              {!notLoadedForecast ? format(new Date(hour.time), "HH") : "--"}
            </h1>

            {!notLoadedForecast && (
              <img
                src={hour.condition.icon}
                alt="weather icon"
                className="w-14"
              />
            )}

            <p>
              {!notLoadedForecast
                ? tempC
                  ? hour.temp_c + "°C"
                  : hour.temp_f + "°F"
                : "--"}
            </p>
          </div>
        )
      )}
    </section>
  );
}
