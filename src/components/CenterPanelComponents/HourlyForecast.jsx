import { format } from "date-fns";
import { motion } from "framer-motion";

export default function HourlyForecast({
  notLoadedForecast,
  forecast,
  tempC,
  daySelected,
  unavailableIcon,
  fromRightVariants
}) {
  const childrenVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  return (
    <motion.section variants={childrenVariants} initial='hidden' animate='visible' className="grid grid-flow-col gap-4 py-2 overflow-auto">
      {(!notLoadedForecast ? forecast[daySelected].hour : [...Array(24)]).map(
        (hour, index) => (
          <motion.div
            variants={fromRightVariants}
            key={index}
            className="bg-[#A6ADBA1A] rounded-2xl flex w-24 flex-col items-center p-2 flex-1 shadow-md cursor-pointer"
          >
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
          </motion.div>
        )
      )}
    </motion.section>
  );
}
