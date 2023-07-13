import Navbar from "./components/CenterPanelComponents/Navbar";

export default function CenterPanel({date}) {
  return (
    <article className="flex-1 p-3 relative">
      <Navbar date={date} />
      
    </article>
  )
}
