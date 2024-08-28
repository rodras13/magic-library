import { useState } from "react"
import { MagicCards } from "../components/MagicCards"

import { useDBCard } from "../hooks/useDBCard"
import { Library } from "../components/Library"

export function ShowLibrary() {
  const { cards, refreshCards } = useDBCard()


  return (
    <article>
      <button onClick={refreshCards}>Biblioteca</button>
      <Library cards={cards} />
    </article>
  )
}