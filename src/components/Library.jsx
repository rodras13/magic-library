import axios from "axios"

export function Library({ cards }) {

  const URI = `http://localhost:5000/cards/`

  // Método para borrar una carta de la biblioteca
  const deleteCard = async (printedCard) => {
    console.log(printedCard)
    axios.delete(`${URI}${printedCard}`)
  }

  return (
    <ul>
      {
        cards.map(card => (
          <li key={card.id}>
            <h2>{card.printedName}</h2>
            <p>{card.quantity}</p>
            <img src={card.image} alt={card.description} />
            <button onClick={() => deleteCard(card.printedName)}>Borrar carta</button>
          </li>
        ))
      }
    </ul>
  )
}