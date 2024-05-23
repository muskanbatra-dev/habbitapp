const mongoose = require("mongoose");
const { Schema } = mongoose;

const goalsSchema = Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },

    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    min_timeline: {
      type: Date,
      required: true,
    },
    max_timeline: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const GoalsModel = mongoose.model("Goals", goalsSchema);

module.exports = GoalsModel;
