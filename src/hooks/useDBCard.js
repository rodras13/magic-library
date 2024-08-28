import { useState, useEffect } from "react"
import axios from "axios"
import { mappedDBCards } from "../services/mappedCard"

export function useDBCard(button){

  const URI = `http://localhost:5000/cards/`
  const [cards, setCards] = useState([])

  useEffect(() => {
    if(!cards) return
    getCards().then(cardsDB => setCards(cardsDB))
    console.log(cards)
  }, [button])

  // Método que nos devuelve todas las cartas de la biblioteca
  const getCards = async () => {
    const res = await axios.get(URI)
    return mappedDBCards(res.data)
  }
  return {cards}
}