import "./App.css"
import { useSearchedCard } from "./hooks/useSearchedCard"
import { useCard } from "./hooks/useCard"
import { MagicCards } from "./components/MagicCards.jsx"

export function App() {

  const { printedName, setPrintedName, error } = useSearchedCard()
  const { cardSearched, getSearchedCard } = useCard({ printedName })

  const handleSubmit = (event) => {
    event.preventDefault()
    getSearchedCard()
  }

  const handleChange = (event) => {
    setPrintedName(event.target.value)
  }

  return (
    <>
      <aside>
        <h2>Buscador de cartas</h2>

        <form className="mtg-form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={printedName} name="printedName" placeholder="Jace Beleren..." />

          <h2>Filtros</h2>

          <select name="colors">
            <option value="">Color</option>
            <option value="W">Blanco</option>
            <option value="U">Azul</option>
            <option value="B">Negro</option>
            <option value="R">Rojo</option>
            <option value="G">Verde</option>
            <option value="C">Incoloro</option>
          </select>

          <select name="typeLine">
            <option value="">Tipo</option>
            <option value="Creature">Criatura</option>
            <option value="Enchantment">Encantamiento</option>
            <option value="Socercy">Conjuro</option>
            <option value="Instant">Instantáneo</option>
            <option value="Artifact">Artefacto</option>
            <option value="Land">Tierra</option>
            <option value="Planeswalker">Planeswalker</option>
          </select>

          <button>Buscar</button>

          {error && <p>{error}</p>}
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
      </main>
    </>
  )
}