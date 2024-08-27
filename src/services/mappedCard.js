// Función que mapea "en bruto" los datos para adaptarlos a las props del componente, evitando depender de la API
export function mappedCard(data) {
  return {
    id: data.id,
    name: data.name,
    image: data.image_uris.png,
    description: data.oracle_text
  }
}
