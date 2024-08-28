// Importamos el modelo 

import LibraryModel from "../models/LibraryModel.js";

// Métodos para el CRUD (Create, Read, Update, Delete), que son los métdos básicos para manipular una DB

// 1️⃣ Mostrar todas las cartas de la biblioteca

export const getAllCards = async (req, res) => {
  try {
    const cards = await LibraryModel.findAll()
    res.json(cards)
  } catch (error) {
    res.json( {message: error.message} )
  }
}

// 2️⃣ Mostrar una carta en concreto

export const getCard = async (req, res) => {
  try {
    const card = await LibraryModel.findAll({
      where: {printed_name: req.params.printed_name}
    })
    res.json(card[0])
  } catch (error) {
    res.json( {message: error.message} )
  }
}

// 3️⃣ Registrar una carta nueva

export const registerCard = async (req, res) => {
  try {
    await LibraryModel.create(req.body)
    res.json({
      "message": "La carta se ha registrado con éxito"
    })
  } catch (error) {
    res.json( {message: error.message} )
  }
}

// 4️⃣ Actualizar la cantidad de cartas 

export const updateCard = async (req, res) => {
  try {
    await LibraryModel.update(req.body, {
      where: { printed_name: req.params.printed_name }
    })
    res.json({
      "message": "La carta se ha actualizado con éxito"
    })
  } catch (error) {
    res.json( {message: error.message} )
  }
}

// 5️⃣ Eliminar una carta o cartas

export const deleteCard = async (req, res) => {
  try {
    await LibraryModel.destroy({
      where: { printed_name: req.params.printed_name }
    })
    res.json({
      "message": "La carta se ha borrado con éxito"
    })
  } catch (error) {
    res.json( {message: error.message} )
  }
}