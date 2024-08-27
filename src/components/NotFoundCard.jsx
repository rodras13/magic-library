export function NotFoundCard() {
  return (
    <ul className="mtg-cards">
      <li className="mtg-card">
        <section>
          <h2>No se ha encontrado ninguna carta</h2>
          <img
            src="../public/not-found-card.jpg"
            alt="Gothic boy sad because he hasn't find Magic card"
          />
        </section>
      </li>
    </ul>
  )
}