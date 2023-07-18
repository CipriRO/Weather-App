import { motion } from "framer-motion";

export default function Search({
  setInputValue,
  showLoadingSearch,
  searchResults,
}) {
  function handleInputChange(event) {
    const { value } = event.target;
    setInputValue(value);
  }

  return (
    <motion.div layout className="relative flex">
      <div className="bg-[#1a1f25] px-3 flex items-center justify-center rounded-l-full">
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
          <path d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"></path>
          <path d="m21 21-6-6"></path>
        </svg>
      </div>

      <input
        type="text"
        onInput={handleInputChange}
        className="input rounded-l-none rounded-r-full font-semibold"
        placeholder="Search Location Here..."
      />

      {(showLoadingSearch || searchResults) && (
        <div className="flex flex-col justify-center items-center absolute gap-2 bg-[#1a1f25] shadow-2xl top-14 left-1/2 -translate-x-1/2 rounded-2xl p-2 w-72 border-[#1b232a] border-4 z-10">
          {showLoadingSearch ? (
            <span className="loading loading-ring loading-lg" />
          ) : searchResults.length > 0 ? (
            searchResults.map((result, index) => (
              <button key={index} className="font-semibold hover:bg-[#232d36] w-full py-1 rounded-lg transition-colors">
                {result.name}, {result.name !== result.region && result.region + ', '}{result.country}
              </button>
            ))
          ) : (
            <h1 className="font-semibold text-lg">
              We didn&apos;t find anything!
            </h1>
          )}
        </div>
      )}
    </motion.div>
  );
}
