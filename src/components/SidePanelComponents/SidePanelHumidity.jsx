import humidIcon from '../../assets/images/icons/WeatherIcon - humidity.svg';
import { motion } from 'framer-motion';

export default function SidePanelHumidity({ humidity, notLoadedCurrWeather, fromBottomVariants }) {
  return (
    <motion.section variants={fromBottomVariants} className="bg-[#A6ADBA1A] flex flex-col flex-1 gap-4 items-center p-3.5 rounded-2xl">
      <div className="flex gap-1 items-center self-start">
        <img src={humidIcon} alt="precipitations icon" className="w-8" />
        <h1 className="font-bold text-ellipsis overflow-hidden">Humidity</h1>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-5xl">
          {!notLoadedCurrWeather ? humidity : "--"}
          <span className="text-2xl"> %</span>
        </h3>
        <p>{!notLoadedCurrWeather ? 'right now' : '---'}</p>
      </div>
    </motion.section>
  );
}
