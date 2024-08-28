// Función que mapea "en bruto" los datos para adaptarlos a las props del componente, evitando depender de la API
export function mappedCard(data) {
  return {
    id: data.id,
    name: data.name,
    printedName: data.printed_name,
    image: data.image_uris.png,
    description: data.oracle_text,
    quantity: data.quantity
  }
}

export function mappedDBCards(data){
  const mappedCards = data
  
    return mappedCards?.map(cards => ({
      id: cards.id,
      name: cards.original_name,
      printedName: cards.printed_name,
      image: cards.image_uri,
      description: cards.oracle_text,
      quantity: cards.quantity
    }))

}