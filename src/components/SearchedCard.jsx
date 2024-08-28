import { useCard } from "../hooks/useCard.js"
import { useSearchedCard } from "../hooks/useSearchedCard.js"
import { MagicCards } from "../components/MagicCards.jsx"

export function SearchedCard() {

  // const { cardSearched } = useCard({ printedName })

  const { printedName, setPrintedName } = useSearchedCard()
  const { cardSearched, getSearchedCard } = useCard({ printedName })

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
      <aside>
        <h2 className="">Buscador de cartas</h2>

        <form className="mtg-form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={printedName} name="printedName" placeholder="Jace Beleren..." />
          <button>Buscar</button>
        </form>

      </aside >
      <article>
        {cardSearched &&
          <MagicCards
            id={cardSearched.id}
            key={cardSearched.id}
            name={cardSearched.name}
            imageUri={cardSearched.image}
            description={cardSearched.description}
          />}
      </article>
    </>
  )
}