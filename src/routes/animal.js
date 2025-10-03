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

router.get("/animalitos",(req,res) => {
animalSchema.find()
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
