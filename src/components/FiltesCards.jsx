// 📚 TODO: Este es un componente listo para incluir en futuras versiones

export function FiltersCards() {
  return (
    <>
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
    </>
  )
}