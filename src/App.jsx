import "./App.css"

import { CardFilter } from "./CardFilter.jsx"
import { RandomCard } from "./RandomCard.jsx"

export function App() {
  return (
    <>
      <CardFilter />
      <main>
        <RandomCard />
      </main>
    </>
  )
}