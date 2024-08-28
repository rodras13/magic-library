// Importamos la conexión con la base de datos
import dataBase from "../database/db.js";

// Importamos Sequelize
import { DataTypes } from "sequelize";

const LibraryModel = dataBase.define("cards", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  original_name: {type: DataTypes.STRING},
  printed_name: {type: DataTypes.STRING},
  quantity: {type: DataTypes.NUMBER},
  image_uri: {type: DataTypes.STRING},
  oracle_text: {type: DataTypes.STRING}
})

export default LibraryModel