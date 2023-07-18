import { format } from "date-fns";
import { motion } from "framer-motion";

export default function HourlyForecast({
  notLoadedForecast,
  forecast,
  tempC,
  daySelected,
  unavailableIcon,
  fromRightVariants,
  itsToday,
  fullDate,
}) {
  const childrenVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  function removeOutdatedHours() {
    return forecast[daySelected].hour.filter((hour) => {
      const hourTime = new Date(hour.time);
      const limitTime = new Date(fullDate);
      return hourTime.getHours() >= limitTime.getHours();
    });
  }

  return (
    <motion.section
      variants={childrenVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-flow-col justify-start gap-3 py-2 overflow-auto"
    >
      {(!notLoadedForecast
        ? !itsToday
          ? forecast[daySelected].hour
          : removeOutdatedHours()
        : [...Array(24)]
      ).map((hour, index) => (
        <motion.div
          variants={fromRightVariants}
          key={index}
          className="bg-[#A6ADBA1A] rounded-2xl flex w-full min-w-[7rem] max-w-[9rem] flex-col items-center justify-center p-2 shadow-md cursor-pointer"
        >
          {!hour ||
          !itsToday ||
          new Date(hour.time).getHours() !== new Date(fullDate).getHours() ? (
            <>
              <h1 className="font-semibold text-lg">
                {!notLoadedForecast ? format(new Date(hour.time), "HH") : "--"}
              </h1>

              <img
                src={!notLoadedForecast ? hour.condition.icon : unavailableIcon}
                alt="weather icon"
                className="w-14"
              />

              <p>
                {!notLoadedForecast
                  ? tempC
                    ? hour.temp_c + "°C"
                    : hour.temp_f + "°F"
                  : "--"}
              </p>
            </>
          ) : (
            <>
              <h1 className="font-semibold text-lg">
                {!notLoadedForecast ? format(new Date(fullDate), "HH") : "--"}
              </h1>
              <h1 className="font-semibold">See the side panel!</h1>
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
                <path d="M19 15H9a3 3 0 0 1-3-3V6"></path>
                <path d="m15 19 4-4-4-4"></path>
              </svg>
            </>
          )}
        </motion.div>
      ))}
    </motion.section>
  );
}
