import Search from "./Search";
import { motion } from "framer-motion";
import cipiwebsIcon from "../../assets/images/icons/cipiwebs.svg";

const CipiwebsLink = "https://cipiwebs.vercel.app";

export default function Navbar({
  dayWeek,
  currentDay,
  notLoadedForecast,
  searchResults,
  showLoadingSearch,
  setInputValue,
  setLocation,
}) {
  return (
    <motion.nav
      layout
      className="mb-4 p-2 gap-2 rounded-2xl bg-[#A6ADBA1A] flex flex-wrap justify-around items-center"
    >
      <div className="sm:text-left text-center flex flex-col">
        <h1 className="text-lg font-bold">
          {!notLoadedForecast ? currentDay : "---"}
        </h1>
        <h3>{!notLoadedForecast ? dayWeek : "---"}</h3>
      </div>

      <CipiWebs />
    </motion.nav>
  );
}

const CipiWebs = () => {
  return (
    <a
      href={CipiwebsLink}
      target="_blank"
      rel="noreferrer"
      role="button"
      className="flex flex-col bg-black/10 py-1 px-5 rounded-2xl shadow-sm border-[1px] border-slate-700 hover:scale-105 transition-transform"
    >
      <h4 className="text-left font-semibold text-text-600">Made by</h4>
      <img
        src={cipiwebsIcon}
        alt="CipiWebs logo"
        width={100}
        height={50}
        className="shrink-0 h-auto"
      />
    </a>
  );
};
