import precipIcon from "../assets/images/icons/WeatherIcon - precipitation.svg";

export default function SidePanelPrecipitations({
  precipMm,
  precipmm,
  precipin,
}) {
  return (
    <div className="bg-[#A6ADBA1A] flex flex-col gap-4 items-center p-4 rounded-2xl">
      <div className="flex gap-3 self-start">
        <img src={precipIcon} alt="precipitations icon" className="w-5" />
        <h1 className="font-bold text-lg">Precipitations</h1>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-5xl">
          {precipMm ? precipmm : precipin}
          {precipMm ? (
            <span className="text-2xl"> mm</span>
          ) : (
            <span className="text-2xl"> in</span>
          )}
        </h3>
        <p>till now</p>
      </div>
    </div>
  );
}
