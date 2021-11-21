"use strict";

const Stain = require("../../models/stain");
var ObjectId = require("mongoose").Types.ObjectId;

function getStain(req, res) {
  let stainId = req.params.stainId;

  Stain.findById(new ObjectId(stainId), (err, stain) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la petición: ${err}` });
    if (!stain) return res.status(404).send({ message: `El stain no existe` });

    res.status(200).send({ data: stain });
  })
    .populate({
      path: "laboratory",
      select: "name",
    })
    .populate({ path: "user", select: "email" });
}

function getStains(req, res) {
  const obj = JSON.parse(req.params.obj);

  let query = { laboratory: obj.laboratoryId };
  if (obj.name !== "") {
    query.name = { $regex: `.*${obj.name}.*`, $options: "i" };
  }

  Stain.find(query, (err, stains) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la petición: ${err}` });
    if (!stains) return res.status(404).send({ message: "No existe el stain" });

    return res.status(200).send({ data: stains });
  })
    .populate({
      path: "laboratory",
      select: "name",
      //match: { _id: "6199270ea649a0698774c967" },
      //match: { _id: obj.idLaboratory },
    })
    .populate({ path: "user", select: "displayName" });
}

async function saveStain(req, res) {
  let stain = new Stain();

  stain.name = req.body.name;
  stain.state = true;
  stain.laboratory = new ObjectId(req.body.laboratory);
  stain.user = new ObjectId(req.body.user);

  stain.save().then(
    (stainStored) => {
      res.status(200).send({ data: stainStored });
    },
    (err) => {
      res
        .status(500)
        .send({ message: `Error al salvar en la base de datos: ${err} ` });
    }
  );
}

function updateStain(req, res) {
  let stainId = req.params.stainId;
  let update = req.body;

  Stain.findByIdAndUpdate(new ObjectId(stainId), update, (err, stainUpdate) => {
    if (err)
      res.status(500).send({ message: `Error al actualizar el stain: ${err}` });

    res.status(200).send({ data: stainUpdate });
  });
}

function deleteStain(req, res) {
  let stainId = req.params.stainId;

  Stain.findById(new ObjectId(stainId), (err, stain) => {
    if (err)
      res.status(500).send({ message: `Error al borrar el stain: ${err}` });
    stain.remove((err) => {
      if (err)
        res.status(500).send({ message: `Error al borrar el stain ${err}` });
      res.status(200).send({ message: "El stain ha sido eliminado" });
    });
  });
}

module.exports = {
  getStain,
  getStains,
  saveStain,
  updateStain,
  deleteStain,
};
