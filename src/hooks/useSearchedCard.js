import { useEffect, useRef, useState } from "react"

export function useSearchedCard() {
  const [printedName, setPrintedName] = useState("")
  const [error, setError] = useState(null)
  const isFirstSearch = useRef(true)

  useEffect(() => {
    if(isFirstSearch.current) {
      isFirstSearch.current = printedName === ""
      return 
    }

    if (printedName === "") {
      setError("No se puede buscar una carta sin nombre")
      return
    }
    if (printedName.match(`^\d+$`)) {
      setError("No hay cartas que solo contengan números")
      return
    }
    if(printedName.match(`/[^\s]$/`)){
      setError("La búsqueda no puede terminar en espacio")
      return
    }
    setError(null)
  }, [printedName])

  return { printedName, setPrintedName, error }
}