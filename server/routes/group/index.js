"use strict";

const express = require("express");

const groupCtrl = require("../../controllers/group");
const apiGroup = express.Router();

/* Group */
apiGroup.get("/groupAll/:obj", groupCtrl.getGroups);
apiGroup.get("/group/:groupId", groupCtrl.getGroup);
apiGroup.post("/group", groupCtrl.saveGroup);
apiGroup.put("/group/:groupId", groupCtrl.updateGroup);
apiGroup.delete("/group/:groupId", groupCtrl.deleteGroup);

module.exports = apiGroup;
