import { useState } from "react"
import { MagicCards } from "./MagicCards.jsx"

import { useCard } from "./hooks/useCard.js"
import { useSearchedCard } from "./hooks/useSearchedCard.js"

export function SearchedCard() {

  // Uso del CustomHook para resetear la imagen
  const { printedName } = useSearchedCard()
  const { cardSearched } = useCard({ printedName })

  return (
    <article>
      {cardSearched &&
        <MagicCards
          key={cardSearched.id}
          name={cardSearched.name}
          imageUri={cardSearched.image}
          description={cardSearched.description}
        />}
    </article>
  )
}