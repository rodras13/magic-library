import { mappedCard } from "./mappedCard"

// Función que obtiene una carta aleatoria de la API
export function getSearchedCard(endpoint){
  return fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const newSearchedCard = mappedCard(data)
        return newSearchedCard
      })
}