const mongoose = require("mongoose");
const { Schema } = mongoose;

const LogsSchema = Schema(
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

const Logsmodel = mongoose.model("Logs", LogsSchema);

module.exports = Logsmodel;
