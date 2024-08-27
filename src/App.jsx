import "./App.css"
import { useState } from "react"
import { MagicCard } from "./MagicCard"

import { useRandomCard } from "./hooks/useRandomCard.js"

const CARD_SEARCH_ENDPOINT = `https://api.scryfall.com/cards/named?fuzzy=nada+se+desperdicia`

export function App() {
  // Estado para cambiar la imagen
  const [change, setChange] = useState(false)

  // Uso del CustomHook para resetear la imagen
  const { card } = useRandomCard({ change })

  const handleClick = () => {
    setChange(!change)
  }

  return (
    <>
      <main>
        {card &&
          <MagicCard
            key={card.id}
            name={card.name}
            imageUri={card.image}
            description={card.description}
          />}
        <button onClick={handleClick}>Cambiar</button>
      </main>
    </>
  )
}