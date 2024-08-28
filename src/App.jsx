import "./App.css"
import { useSearchedCard } from "./hooks/useSearchedCard"
import { useCard } from "./hooks/useCard"
import { MagicCards } from "./components/MagicCards.jsx"
import { ShowLibrary } from "./library/ShowLibrary.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RandomCard } from "./components/RandomCard.jsx"

export function App() {

  const { printedName, setPrintedName, error } = useSearchedCard()
  const { cardSearched, getSearchedCard, cardDB } = useCard({ printedName })

  const handleSubmit = (event) => {
    event.preventDefault()
    try {
      getSearchedCard()
    } catch (error) {
      console.log("Error")
    } finally {
      return
    }
  }

  const handleChange = (event) => {
    setPrintedName(event.target.value)
  }

  return (
    <>
      <header>
        <h1>Magic Library</h1>
        <p>Tu propia Biblioteca online</p>
      </header>
      <aside>
        <h2>Buscador de cartas</h2>

        <form className="mtg-form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={printedName} name="printedName" placeholder="Jace Beleren..." />
          <button>Buscar</button>
        </form>

      </aside >

      <main>
        <article>
          {cardSearched &&
            <MagicCards
              key={cardSearched.id}
              name={cardSearched.name}
              imageUri={cardSearched.image}
              description={cardSearched.description}
            />
          }
        </article>
        <ShowLibrary />
        <RandomCard />
      </main>
    </>
  )
}