import { useState } from "react"
import { MagicCards } from "./MagicCards.jsx"

import { useRandomCard } from "./hooks/useRandomCard.js"

export function RandomCard() {
  // Estado para cambiar la imagen
  const [change, setChange] = useState(false)

  // Uso del CustomHook para resetear la imagen
  const { card } = useRandomCard({ change })

  const handleClick = () => {
    setChange(!change)
  }

  return (
    <article>
      {card &&
        <MagicCards
          key={card.id}
          name={card.name}
          imageUri={card.image}
          description={card.description}
        />}
      <button onClick={handleClick}>Cambiar</button>
    </article>
  )
}