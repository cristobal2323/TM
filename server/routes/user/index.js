"use strict";

const express = require("express");

const userCtrl = require("../../controllers/user/");
const apiUser = express.Router();

apiUser.post("/signup", userCtrl.signUp);
apiUser.post("/signin", userCtrl.signIn);

module.exports = apiUser;
