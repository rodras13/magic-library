import { useEffect, useRef, useState } from "react"


export function CardFilter() {

  const [query, setQuery] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = new window.FormData(event.target)
    const q = Object.fromEntries(fields)
    console.log(q)
  }

  return (
    <aside>
      <h2>Buscador de cartas</h2>
      <form className="mtg-form" onSubmit={handleSubmit}>
        <input required name="printedName" placeholder="Jace Belereen, Nada se Deperdicia..." />
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
      </form>
    </aside >
  )
}