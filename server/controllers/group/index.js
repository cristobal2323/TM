"use strict";

const Group = require("../../models/group");
var ObjectId = require("mongoose").Types.ObjectId;

function getGroup(req, res) {
  let groupId = req.params.groupId;

  Group.findById(new ObjectId(groupId), (err, group) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la petición: ${err}` });
    if (!group) return res.status(404).send({ message: `El group no existe` });

    res.status(200).send({ data: group });
  })
    .populate({
      path: "laboratory",
      select: "name",
    })
    .populate({ path: "user", select: "email" })
    .populate("stains");
}

function getGroups(req, res) {
  const obj = JSON.parse(req.params.obj);

  let query = { laboratory: obj.laboratoryId };
  if (obj.name !== "") {
    query.name = { $regex: `.*${obj.name}.*`, $options: "i" };
  }

  Group.find(query, (err, groups) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la petición: ${err}` });
    if (!groups) return res.status(404).send({ message: "No existe el group" });

    return res.status(200).send({ data: groups });
  })
    .populate({
      path: "laboratory",
      select: "name",
    })
    .populate({ path: "user", select: "displayName" })
    .populate("stains");
}

async function saveGroup(req, res) {
  let group = new Group();

  group.name = req.body.name;
  group.state = true;
  group.laboratory = new ObjectId(req.body.laboratory);
  group.user = new ObjectId(req.body.user);
  group.stains = [];

  console.log(req.body);

  req.body.stains.forEach((element) => {
    group.stains.push(new ObjectId(element._id));
  });

  group.save().then(
    (groupStored) => {
      res.status(200).send({ data: groupStored });
    },
    (err) => {
      res
        .status(500)
        .send({ message: `Error al salvar en la base de datos: ${err} ` });
    }
  );
}

function updateGroup(req, res) {
  console.log("Aqui");
  let groupId = req.params.groupId;
  let update = req.body;

  console.log(groupId, update);
  let arr = [];
  if (update.stains) {
    req.body.stains.forEach((element) => {
      arr.push(new ObjectId(element._id));
    });
    update.stains = arr;
  }

  Group.findByIdAndUpdate(new ObjectId(groupId), update, (err, groupUpdate) => {
    if (err)
      res.status(500).send({ message: `Error al actualizar el group: ${err}` });

    res.status(200).send({ data: groupUpdate });
  });
}

function deleteGroup(req, res) {
  let groupId = req.params.groupId;

  Group.findById(new ObjectId(groupId), (err, group) => {
    if (err)
      res.status(500).send({ message: `Error al borrar el group: ${err}` });
    group.remove((err) => {
      if (err)
        res.status(500).send({ message: `Error al borrar el group ${err}` });
      res.status(200).send({ message: "El group ha sido eliminado" });
    });
  });
}

module.exports = {
  getGroup,
  getGroups,
  saveGroup,
  updateGroup,
  deleteGroup,
};
