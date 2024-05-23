const mongoose = require("mongoose");
const { Schema } = mongoose;

const tasksSchema = Schema(
  {
    goalId: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    frequency: {
      type: Number,
      required: true,
    },
    frequency_type: {
      type: String,
      enum: ["DAILY", "WEEKLY", "MONTHLY"],
      required: true,
    },
    remainder: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const TasksModel = mongoose.model("Task", tasksSchema);

module.exports = TasksModel;
