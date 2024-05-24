const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    task_id: { type: Schema.Types.ObjectId, auto: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    frequency: {
      type: {
        type: String,
        enum: ["daily", "weekly", "custom"],
        required: true,
      },
      times_per_day: { type: Number }, // only applicable if frequency.type is 'daily'
      days_of_week: { type: [String] }, // only applicable if frequency.type is 'custom'
      days_per_week: { type: Number }, // only applicable if frequency.type is 'weekly'
    },
    reminders: {
      enabled: { type: Boolean, default: false },
      times: { type: [String] }, // manual reminders set by the user
      auto_suggestions: { type: [String] }, // automatically suggested reminder times
    },
  },
  { _id: false }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
