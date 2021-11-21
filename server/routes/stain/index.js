"use strict";

const express = require("express");

const stainCtrl = require("../../controllers/stain");
const apiStain = express.Router();

/* Stain */
apiStain.get("/stainAll/:obj", stainCtrl.getStains);
apiStain.get("/stain/:stainId", stainCtrl.getStain);
apiStain.post("/stain", stainCtrl.saveStain);
apiStain.put("/stain/:stainId", stainCtrl.updateStain);
apiStain.delete("/stain/:stainId", stainCtrl.deleteStain);

module.exports = apiStain;
