const express = require("express");
const router = express.Router(); //manejador de rutas de express
const animalSchema = require("../models/animalModel");
//Nuevo animal
router.post("/animalitos", (req, res) => {
  const animal = animalSchema(req.body);
  animal
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


//1. Trae los datos de los animales con edad mayor a 2 de la base de datos
router.get("/animalitos",(req,res) => {
animalSchema.find({edad:{$gt:2}})
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}));
});

//2. Trae todos los  datos animales de la base de datos
router.get("/animalitos/all",(req,res) => {
animalSchema.find()
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}));
});

//3. Trae los animales de la bse de datos del tipo oveja
router.get("/animalitos/ovejas",(req,res) => {
animalSchema.find({tipo:{$eq:"Oveja"}})
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}));
});

//Consultar un animal por su id
router.get("/animalitos/:id", (req, res) => {
 const { id } = req.params;
  animalSchema
 .findById(id)
 .then((data) => res.json(data))
 .catch((error) => res.json({ message: error }));
});

module.exports = router;
