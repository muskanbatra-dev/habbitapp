const mongoose = require("mongoose");
const { Schema } = mongoose;
const taskSchema = require("../models/tasks").schema;
const goalSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  min_timeline: { type: Date, required: true },
  max_timeline: { type: Date, required: true },
  user_timeline: {
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
  },
  tasks: [taskSchema],
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
