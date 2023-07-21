import eye from "../../assets/images/icons/eye.svg";
import { motion } from "framer-motion";

export default function SidePanelVisibility({ visibKm, visibMl, speedKph, notLoadedCurrWeather, fromBottomVariants }) {
  return (
    <motion.section variants={fromBottomVariants} className="bg-[#A6ADBA1A] flex flex-col flex-1 gap-4 items-center p-3.5 rounded-2xl">
      <div className="flex gap-2 items-center self-start">
        <img src={eye} alt="precipitations icon" className="w-6" />
        <h1 className="font-bold text-ellipsis overflow-hidden">Visibility</h1>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-5xl">
          {!notLoadedCurrWeather ? (speedKph ? visibKm : visibMl) : '--'}
          {speedKph ? (
            <span className="text-2xl"> km</span>
          ) : (
            <span className="text-2xl"> miles</span>
          )}
        </h3>
        { !notLoadedCurrWeather ? (speedKph ? (
          visibKm >= 10 ? <p>Excellent visibility</p>
        : (visibKm < 10 && visibKm >= 5) ? <p>Good visibility</p>
        : (visibKm < 5 && visibKm >= 1) ? <p>Fair visibility</p>
        : visibKm < 1 && <p>Poor visibility</p>
        ) : (visibMl >= 6.2 ? <p>Excellent visibility</p>
        : (visibMl < 6.2 && visibMl >= 3.1) ? <p>Good visibility</p>
        : (visibMl < 3.1 && visibMl >= 0.6) ? <p>Fair visibility</p>
        : visibMl < 0.6 && <p>Poor visibility</p>)) : '---'}
        
      </div>
    </motion.section>
  );
}
