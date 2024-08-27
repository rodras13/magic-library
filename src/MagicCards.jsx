export function MagicCards({ name, imageUri, description, quantity }) {
  console.log("render")
  return (
    <ul className="mtg-cards">
      <li className="mtg-card">
        <section>
          <h2>{name}</h2>
          <img
            src={imageUri}
            alt={description}
          />
        </section>
      </li>
    </ul>
  )
}