"use strict";

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const GroupSchema = Schema({
  name: String,
  state: Boolean,
  stains: [
    {
      type: Schema.Types.ObjectId,
      ref: "Stain",
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  laboratory: {
    type: Schema.Types.ObjectId,
    ref: "Laboratory",
  },
});

module.exports = mongoose.model("Group", GroupSchema);
