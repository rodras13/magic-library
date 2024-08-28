import express from "express"
import cors from "cors"

// Importamos la conexion a la base de datos y enrutador
import dataBase from "./database/db.js"
import libraryRoutes from "./routes/routes.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use("/cards", libraryRoutes)

try {
  await dataBase.authenticate()
  console.log("Conexión exitosa al Multiverso")
} catch (error) {
  console.log(`No eres digno de acceder, ya que: ${error}`)
}

// app.get("/", (req, res) => {
//   res.send("<h1>Hola Planeswalker...</h1>")
// })

app.listen(5000, () => {
  console.log("Server running in http://localhost:5000/")
})