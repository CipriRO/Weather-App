import { isToday, isTomorrow, format } from "date-fns";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function DailyForecast({
  forecast,
  notLoadedForecast,
  tempC,
  days,
  daySelected,
  setDaySelected,
  unavailableIcon,
  fromRightVariants,
  setItsToday,
}) {
  const childrenVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.3 },
    },
  };

  useEffect(() => {
    if (!notLoadedForecast) {
      isToday(new Date(forecast[daySelected].date))
        ? setItsToday(true)
        : setItsToday(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [daySelected, forecast, notLoadedForecast]);

  return (
    <motion.section
      variants={childrenVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] items-start gap-4 overflow-hidden p-1"
    >
      {(!notLoadedForecast ? forecast : [...Array(days)]).map((day, index) => (
        <motion.div
          variants={fromRightVariants}
          key={index}
          onClick={() => {
            setDaySelected(index);
          }}
          className={`bg-[#A6ADBA1A] rounded-2xl flex flex-col p-2 flex-1 shadow-md cursor-pointer ${
            daySelected === index && "ring-2 ring-[#dce6f73f]"
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

          <div className="flex flex-wrap items-center justify-center">
            <img
              src={
                !notLoadedForecast ? day.day.condition.icon : unavailableIcon
              }
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
              <p>
                {!notLoadedForecast
                  ? day.day.daily_chance_of_snow > 0
                    ? "Chance of snow: " + day.day.daily_chance_of_snow + "%"
                    : "Chance of rain: " + day.day.daily_chance_of_rain + "%"
                  : "---"}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}
