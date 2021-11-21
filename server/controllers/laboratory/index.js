"use strict";

const Laboratory = require("../../models/laboratory");
const Country = require("../../models/country");
var ObjectId = require("mongoose").Types.ObjectId;

function getLaboratory(req, res) {
  let laboratoryId = req.params.laboratoryId;

  Laboratory.findById(new ObjectId(laboratoryId), (err, laboratory) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la petición: ${err}` });
    if (!laboratory)
      return res.status(404).send({ message: `El laboratory no existe` });

    res.status(200).send({ data: laboratory });
  });
}

function getLaboratories(req, res) {
  const query = {};

  /*   if (req.params.name !== "null") {
    query.name = { $regex: `.*${req.params.name}.*`, $options: "i" };
  }
 */

  Laboratory.find((err, laboratories) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la petición: ${err}` });
    if (!laboratories)
      return res.status(404).send({ message: "No existe el laboratory" });

    return res.status(200).send({ data: laboratories });
  }).populate({ path: "country", select: "name" });
}

async function saveLaboratory(req, res) {
  let laboratory = new Laboratory();

  laboratory.name = req.body.name;
  laboratory.country = new ObjectId(req.body.country);

  laboratory.save().then(
    (laboratoryStored) => {
      res.status(200).send({ data: laboratoryStored });
    },
    (err) => {
      res
        .status(500)
        .send({ message: `Error al salvar en la base de datos: ${err} ` });
    }
  );
}

function updateLaboratory(req, res) {
  let laboratoryId = req.params.laboratoryId;
  let update = req.body;

  Laboratory.findByIdAndUpdate(
    new ObjectId(laboratoryId),
    update,
    (err, laboratoryUpdate) => {
      if (err)
        res
          .status(500)
          .send({ message: `Error al actualizar el laboratory: ${err}` });

      res.status(200).send({ data: laboratoryUpdate });
    }
  );
}

function deleteLaboratory(req, res) {
  let laboratoryId = req.params.laboratoryId;

  Laboratory.findById(new ObjectId(laboratoryId), (err, laboratory) => {
    if (err)
      res
        .status(500)
        .send({ message: `Error al borrar el laboratory: ${err}` });
    console.log(laboratory);
    laboratory.remove((err) => {
      if (err)
        res
          .status(500)
          .send({ message: `Error al borrar el laboratory ${err}` });
      res.status(200).send({ message: "El laboratory ha sido eliminado" });
    });
  });
}

module.exports = {
  getLaboratory,
  getLaboratories,
  saveLaboratory,
  updateLaboratory,
  deleteLaboratory,
};
