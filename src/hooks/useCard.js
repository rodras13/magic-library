import { useEffect, useState } from "react"
import { mappedCard } from "../services/mappedCard"

export function useCard({printedName}) {
  
  // Creamos un estado para la carta que se va a buscar
  const [cardSearched, setCardSearched] = useState()
  
  // Convierte la consulta en un nombre procesable por el endpoint de búsqueda
  const cardQuery = printedName.split(" ").join("+")

  const CARD_SEARCH_ENDPOINT = `https://api.scryfall.com/cards/named?fuzzy=${cardQuery}`

  // Función que obtiene una carta aleatoria de la API
  const getSearchedCard = () => {
    fetch(CARD_SEARCH_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        const newSearchedCard = mappedCard(data)
        setCardSearched(newSearchedCard)
      })
  }

  return { cardSearched, getSearchedCard }
} // 📰 CONTRATO: Devolver siempre la carta y la funcion para buscar de nuevo