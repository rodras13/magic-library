const CARD_RANDOM_ENDPOINT = "https://api.scryfall.com/cards/random"

// Función que mapea "en bruto" los datos para adaptarlos a las props del componente
function mappedCard(data) {
  return {
    id: data.id,
    name: data.name,
    image: data.image_uris.png,
    description: data.oracle_text
  }
}

// Función que obtiene una carta aleatoria de la API
export function getRandomCard(){
  return fetch(CARD_RANDOM_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        const newCard = mappedCard(data)
        return newCard
      })
}