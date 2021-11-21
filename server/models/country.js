"use strict";

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const CountrySchema = Schema({
  name: String,
  uid: Number,
  key: String,
  rules: {
    duplicateGroup: Boolean,
  },
});

module.exports = mongoose.model("Country", CountrySchema);
