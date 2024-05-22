const mongoose = require("mongoose");
const { Schema } = mongoose;

const goalSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  min_timeline: {
    type: Number,
    required: true,
  },
  max_timeline: {
    type: Number,
    required: true,
  },
});


