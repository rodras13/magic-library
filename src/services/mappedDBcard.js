// 📚 TODO: Aquí es donde se procesan los mapeados para la base de datos, futura implementacion
export function mappedDBCard(data, quantity){
  return {
    id: data.id,
    original_name: data.name,
    printed_name: data.printed_name,
    image_uri: data.image_uris.png,
    mana_cost: data.mana_cost,
    cmc: data.cmc,
    type_line: data.type_line,
    printed_type_line: data.printed_type_line,
    colors: data.colors[0],
    rarity: data.rarity,
    oracle_text: data.oracle_text,
    printed_text: data.printed_text,
    set_name: data.set_name,
    quantity: 0
  }
}