const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const logSchema = Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
    model: {
      type: String,
      required: true,
      enum: ["GOAL", "TASK"],
    },
    action: {
      type: String,
      required: true,
      enum: ["CREATE", "UPDATE", "DELETE"],
    },
    logs: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const logsmodel = model("logs", logSchema);

module.exports = logsmodel;
