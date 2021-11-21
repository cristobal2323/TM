"use strict";

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const LaboratorySchema = Schema({
  name: String,
  country: {
    type: Schema.Types.ObjectId,
    ref: "Country",
  },
});

module.exports = mongoose.model("Laboratory", LaboratorySchema);
