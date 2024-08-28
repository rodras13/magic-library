import axios from "axios"

export function MagicCards({ id, name, imageUri, description, quantity }) {

  const URI = `http://localhost:5000/cards/`

  const registerCard = async (id, name, imageUri, description) => {
    console.log({
      id: id,
      original_name: "",
      printed_name: name,
      image_uri: imageUri,
      oracle_text: description
    })
    await axios.post(URI, {
      id: id,
      original_name: "",
      printed_name: name,
      image_uri: imageUri,
      oracle_text: description
    }).catch((err) => console.error(err))
  }

  return (
    <li className="mtg-card">
      <section>
        <h2>{name}</h2>
        <p>{quantity}</p>
        <img
          src={imageUri}
          alt={description}
        />
      </section>
      <button onClick={() => registerCard(id, name, imageUri, description)}>Añadir</button>
    </li>
  )
}