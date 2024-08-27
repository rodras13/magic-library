export function MagicCard({ name, imageUri, description, quantity }) {
  console.log("render")
  return (
    <section className="mtg-card">
      <h2>{name}</h2>
      <img
        src={imageUri}
        alt={description}
      />
    </section>
  )
}