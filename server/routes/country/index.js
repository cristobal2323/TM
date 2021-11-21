"use strict";

const express = require("express");

const countryCtrl = require("../../controllers/country");
const apiCountry = express.Router();

/* Country */
apiCountry.get("/countryAll", countryCtrl.getCountries);
apiCountry.get("/country/:countryId", countryCtrl.getCountry);
apiCountry.post("/country", countryCtrl.saveCountry);
apiCountry.put("/country/:countryId", countryCtrl.updateCountry);
apiCountry.delete("/country/:countryId", countryCtrl.deleteCountry);

module.exports = apiCountry;
