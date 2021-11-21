"use strict";

const Country = require("../../models/country");
var ObjectId = require("mongoose").Types.ObjectId;

function getCountry(req, res) {
  let countryId = req.params.countryId;

  Country.findById(new ObjectId(countryId), (err, country) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la petición: ${err}` });
    if (!country)
      return res.status(404).send({ message: `El country no existe` });

    res.status(200).send({ data: country });
  });
}

function getCountries(req, res) {
  const query = {};

  /*   if (req.params.name !== "null") {
    query.name = { $regex: `.*${req.params.name}.*`, $options: "i" };
  }
 */
  Country.find((err, countrys) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la petición: ${err}` });
    if (!countrys)
      return res.status(404).send({ message: "No existe el country" });

    return res.status(200).send({ data: countrys });
  });
}

function saveCountry(req, res) {
  let country = new Country();

  country.name = req.body.name;
  country.uid = req.body.uid;
  country.key = req.body.key;
  country.rules = req.body.rules;

  country.save().then(
    (countryStored) => {
      res.status(200).send({ data: countryStored });
    },
    (err) => {
      res
        .status(500)
        .send({ message: `Error al salvar en la base de datos: ${err} ` });
    }
  );
}

function updateCountry(req, res) {
  let countryId = req.params.countryId;
  let update = req.body;

  Country.findByIdAndUpdate(
    new ObjectId(countryId),
    update,
    (err, countryUpdate) => {
      if (err)
        res
          .status(500)
          .send({ message: `Error al actualizar el country: ${err}` });

      res.status(200).send({ data: countryUpdate });
    }
  );
}

function deleteCountry(req, res) {
  let countryId = req.params.countryId;

  Country.findById(new ObjectId(countryId), (err, country) => {
    if (err)
      res.status(500).send({ message: `Error al borrar el country: ${err}` });
    console.log(country);
    country.remove((err) => {
      if (err)
        res.status(500).send({ message: `Error al borrar el country ${err}` });
      res.status(200).send({ message: "El country ha sido eliminado" });
    });
  });
}

module.exports = {
  getCountry,
  getCountries,
  saveCountry,
  updateCountry,
  deleteCountry,
};
