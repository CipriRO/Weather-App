import sun from '../../assets/images/icons/WeatherIcon - sun.svg'
import { motion } from 'framer-motion'

export default function SidePanelUv({uv, notLoadedCurrWeather, fromBottomVariants}) {
  return (
    <motion.section variants={fromBottomVariants} className="bg-[#A6ADBA1A] flex flex-col flex-1 gap-4 items-center p-3.5 rounded-2xl">
      <div className="flex gap-2 items-center self-start">
        <img src={sun} alt="precipitations icon" className="w-8" />
        <h1 className="font-bold">UV</h1>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-5xl">
          {!notLoadedCurrWeather ? uv : "--"}
        </h3>
        <p>{!notLoadedCurrWeather ? ((uv >= 0 && uv <= 2) ? 'Low' : (uv > 2 && uv <= 5) ? 'Moderate' : (uv > 5 && uv <= 7) ? 'High' : (uv > 7 && uv <= 10) ? 'Very High' : uv > 10 && 'Extreme') : '---'}</p>
      </div>
    </motion.section>
  )
}
