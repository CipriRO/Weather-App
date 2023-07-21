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
  setShowSidePanel,
}) {
  const childrenVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3, ease: [0.39, 0, 0.15, 0.99] },
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
      className="grid grid-flow-col justify-start gap-3 py-2 px-2 overflow-auto"
    >
      {(!notLoadedForecast
        ? !itsToday
          ? forecast[daySelected].hour
          : removeOutdatedHours()
        : [...Array(24)]
      ).map((hour, index) => (
        <motion.div
          layout
          variants={fromRightVariants}
          onClick={() => hour &&
            itsToday &&
            new Date(hour.time).getHours() ===
              new Date(fullDate).getHours() && setShowSidePanel(true)}
          style={
            hour &&
            itsToday &&
            new Date(hour.time).getHours() ===
              new Date(fullDate).getHours() && { scale: 1.05, width: "8rem" }
          }
          key={index}
          className="bg-[#A6ADBA1A] rounded-2xl flex w-full min-w-[7rem] max-w-[9rem] flex-col items-center justify-center p-2 shadow-md"
        >
          {!hour ||
          !itsToday ||
          new Date(hour.time).getHours() !== new Date(fullDate).getHours() ? (
            <>
              <h1 className="font-semibold text-lg opacity-60">
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
              <h1 className="font-semibold text-lg opacity-60">Now</h1>
              <h1 className="lg:block hidden font-semibold">
                See the Side Panel!
              </h1>
              <h1 className="lg:hidden block font-semibold">
                Click to see detailed info!
              </h1>
              <svg
                width="26"
                height="26"
                fill="none"
                className="lg:block hidden"
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

              <svg
                width="26"
                height="26"
                fill="none"
                className="lg:hidden block"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 13V4.5a1.5 1.5 0 0 1 3 0V12"></path>
                <path d="M11 11.5v-2a1.5 1.5 0 1 1 3 0V12"></path>
                <path d="M14 10.5a1.5 1.5 0 1 1 3 0V12"></path>
                <path d="M17 11.5a1.5 1.5 0 1 1 3 0V16a6 6 0 0 1-6 6h-2 .208a6 6 0 0 1-5.012-2.7L7 19c-.312-.479-1.407-2.388-3.286-5.728a1.5 1.5 0 0 1 .536-2.022 1.867 1.867 0 0 1 2.28.28L8 13"></path>
                <path d="M5 3 4 2"></path>
                <path d="M4 7H3"></path>
                <path d="m14 3 1-1"></path>
                <path d="M15 6h1"></path>
              </svg>
            </>
          )}
        </motion.div>
      ))}
    </motion.section>
  );
}
