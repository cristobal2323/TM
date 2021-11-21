"use strict";

const express = require("express");

const laboratoryCtrl = require("../../controllers/laboratory");
const apiLaboratory = express.Router();

/* Laboratory */
apiLaboratory.get("/laboratoryAll", laboratoryCtrl.getLaboratories);
apiLaboratory.get("/laboratory/:laboratoryId", laboratoryCtrl.getLaboratory);
apiLaboratory.post("/laboratory", laboratoryCtrl.saveLaboratory);
apiLaboratory.put("/laboratory/:laboratoryId", laboratoryCtrl.updateLaboratory);
apiLaboratory.delete(
  "/laboratory/:laboratoryId",
  laboratoryCtrl.deleteLaboratory
);

module.exports = apiLaboratory;
