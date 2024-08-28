import express from "express"
import { deleteCard, getAllCards, getCard, registerCard, updateCard } from "../controllers.js/LibraryController.js"

// Creamos el enrutador con Express
const router = express.Router()

// Y configuramos todos los constroladores creados
router.get("/", getAllCards)
router.get("/:printed_name", getCard)
router.post("/", registerCard)
router.put("/:printed_name", updateCard)
router.delete("/:printed_name", deleteCard)

export default router