import { mappedCard } from "./mappedCard"

const CARD_RANDOM_ENDPOINT = "https://api.scryfall.com/cards/random"

// Función que obtiene una carta aleatoria de la API
export function getRandomCard(){
  return fetch(CARD_RANDOM_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        const newRandomCard = mappedCard(data)
        return newRandomCard
      })
}