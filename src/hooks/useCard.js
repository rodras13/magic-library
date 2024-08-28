import { useState, useRef } from "react"
import { mappedCard } from "../services/mappedCard"
import cardNotFound from "../mocks/error-search.json"
import { mappedDBCard } from "../services/mappedDBcard"

export function useCard({printedName}) {
  
  // Creamos un estado para la carta que se va a buscar
  const [cardSearched, setCardSearched] = useState()
  const [cardDB, setCardDb] = useState()

  // Guardamos la referencia del estado anterior para que no realice la misma búsqueda 
  const previousCard = useRef(printedName)
  
  // Convierte la consulta en un nombre procesable por el endpoint de búsqueda
  const cardQuery = printedName.split(" ").join("+")

  const CARD_SEARCH_ENDPOINT = `https://api.scryfall.com/cards/named?fuzzy=${cardQuery}`

  // Función que obtiene una carta aleatoria de la API
  const getSearchedCard = async () => {
    // No se hace la búsqueda si es la misma query
    if(printedName === previousCard.current) return

    if(printedName) {
      try{
        const res = await fetch(CARD_SEARCH_ENDPOINT)
        if (!res.ok) {
          throw new Error(`Se ha producido un error: ${res.status}`)
        }
        const data = await res.json()
        previousCard.current = printedName

        // Aquí guardamos la carta que se muestra
        const newSearchedCard = await mappedCard(data)
        setCardSearched(newSearchedCard)

        // Y aquí guardamos la carta que va a la base de datos
        const newSearchedCardDB = await mappedDBCard(data)
        setCardDb(newSearchedCardDB)

      } catch(error) {
        setCardSearched(cardNotFound)
      }
    } else {
      setCardSearched()
    }
    
  }

  return { cardSearched, getSearchedCard }
} // 📰 CONTRATO: Devolver siempre la carta y la funcion para buscar de nuevo