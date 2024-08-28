import "./App.css"
import { useSearchedCard } from "./hooks/useSearchedCard"
import { useCard } from "./hooks/useCard"
import { MagicCards } from "./components/MagicCards.jsx"
import { ShowLibrary } from "./library/ShowLibrary.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RandomCard } from "./components/RandomCard.jsx"
import { SearchedCard } from "./components/SearchedCard.jsx"

export function App() {



  return (
    <>
      <header>
        <h1>Magic Library</h1>
        <p>Tu propia Biblioteca online</p>
      </header>

      <main>
        <SearchedCard />
        <ShowLibrary />
        <RandomCard />
      </main>
    </>
  )
}