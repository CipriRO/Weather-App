import SidePanelPrecipitations from "./SidePanelPrecipitations";

export default function SidePanelGroup({precipMm, precipmm, precipin}) {
  return (
    <div className="flex flex-wrap gap-2">
      <SidePanelPrecipitations precipMm={precipMm} precipin={precipin} precipmm={precipmm} />
    </div>
  )
}
