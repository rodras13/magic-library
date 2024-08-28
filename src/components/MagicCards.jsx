import axios from "axios"

export function MagicCards({ id, name, imageUri, description, quantity }) {

  const URI = import.meta.env.VITE_BACKEND_URL

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
    <li className="w-[400px] list-none">
      <button onClick={() => registerCard(id, name, imageUri, description)}>Añadir</button>
      <section>
        <h2>{name}</h2>
        <p>{quantity}</p>
        <img
          src={imageUri}
          alt={description}
        />
      </section>
    </li>
  )
}