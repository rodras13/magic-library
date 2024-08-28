import { useState, useEffect } from "react"
import { getRandomCard } from "../services/getRandomCard"

// 🎁 Recibe el estado change que indica si debe cambiar o no
export function useRandomCard({change}){
  // Crear un estado que guarde la busqueda realizada
  const [card, setCard] = useState()
  // Renderizado nada mas entrar en la pagina
  useEffect(() => {
    getRandomCard().then(newCard => setCard(newCard))
  }, [])

  // Renderizado dinamico con el botón
  useEffect(() => {
    if (!card) return
    getRandomCard().then(newCard => setCard(newCard))
  }, [change])
  console.log(card)
  return {card}
} // 📰 CONTRATO: Devolver siempre el objeto carta random