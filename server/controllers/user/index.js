"use strict";

const User = require("../../models/user");
const service = require("../../service");

function signUp(req, res) {
  console.log(req.body);
  const user = new User({
    email: req.body.email,
    displayName: req.body.displayName,
    password: req.body.password,
    laboratory: req.body.laboratory,
  });

  user.save((err) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .send({ message: `Error al crear el usuario: ${err}` });
    }
    return res.status(201).send({ token: service.createToken(user) });
  });
}

function signIn(req, res) {
  try {
    User.findOne(
      { email: req.body.email, password: req.body.password },
      (err, user) => {
        if (err) {
          return res.status(500).send({ message: err });
        }
        if (user == false || user == null) {
          return res.status(404).send({ message: "No existe el usuario" });
        }

        res.status(200).send({
          message: "Te has logueado correctamente",
          token: service.createToken(user),
          user: user,
        });
      }
    ).populate({
      path: "laboratory",
      populate: {
        path: "country",
      },
    });
  } catch (error) {
    return res.status(404).send({ message: "No existe el usuario" });
  }
}

module.exports = {
  signUp,
  signIn,
};
