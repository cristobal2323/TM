"use strict";

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const StainSchema = Schema({
  name: String,
  state: Boolean,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  laboratory: {
    type: Schema.Types.ObjectId,
    ref: "Laboratory",
  },
});

module.exports = mongoose.model("Stain", StainSchema);
