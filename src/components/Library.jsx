import axios from "axios"

export function Library({ cards }) {

  const URI = import.meta.env.VITE_BACKEND_URL

  // Método para borrar una carta de la biblioteca
  const deleteCard = async (printedCard) => {
    console.log(printedCard)
    axios.delete(`${URI}${printedCard}`)
  }

  return (
    <ul>
      {
        cards.map(card => (
          <li className="w-[400px]" key={card.id}>
            <h2>{card.printedName}</h2>
            <img src={card.image} alt={card.description} />
            <button onClick={() => deleteCard(card.printedName)}>Borrar carta</button>
          </li>
        ))
      }
    </ul>
  )
}