import { ShowLibrary } from "./library/ShowLibrary.jsx"
import { RandomCard } from "./components/RandomCard.jsx"
import { SearchedCard } from "./components/SearchedCard.jsx"
import { useState } from "react"

export function App() {

  const [random, setRandom] = useState(false)

  const handleclick = () => {
    setRandom(!random)
  }

  return (
    <>
      <header >
        <h1 className="font-bold text-2xl">Magic Library</h1>
        <p className="text-2x2">Tu propia Biblioteca online</p>
      </header>

      <main className="w-full flex flex-row gap-10 justify-between">
        <SearchedCard />
        <ShowLibrary />
        <article>
          <button onClick={handleclick}>Carta aleatoria</button>
          {random && <RandomCard />}
        </article>
      </main>
    </>
  )
}