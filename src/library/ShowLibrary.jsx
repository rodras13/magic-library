import { useState } from "react"
import { MagicCards } from "../components/MagicCards"

import { useDBCard } from "../hooks/useDBCard"
import { Library } from "../components/Library"

// Guardamos en una constante todo la direccion del servidor


export function ShowLibrary() {
  const [button, setButton] = useState(false)

  const { cards } = useDBCard(button)

  const handleClick = () => {
    setButton(!button)

  }

  return (
    <article>
      <button onClick={handleClick}>Biblioteca</button>
      <Library cards={cards} />
    </article>
  )
}