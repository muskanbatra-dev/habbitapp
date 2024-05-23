const mongoose = require("mongoose");

const { Model, Schema } = mongoose;

const taskSchema = Schema(
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

const taskModel = Model(taskSchema);
module.export = taskModel;
