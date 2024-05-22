const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
    GoalId - int - PK

UserId = int - FK
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  // Each task will have quantity, frequency ( one a day, twice a day, no of days days - days of
// week to select from, or one a week ) and option to set reminders and there can be auto time
// suggestions for the reminders also
  frequency: {
    type: String,
    enum: [
      "once a day",
      "twice a day",
      "Everyday",
      "once a week",
      "Monthly",
      "Yearly",
    ],
    required: true,
  },
  days_of_week: {
    type: [String],
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    validate: {
        validator: function (value) {
            return this.frequency === 'days of week' ? value.length > 0 : true;
        },
        message: 'Days of week are required if frequency is set to "days of week"'
    }
},
reminder_enabled: {
    type: Boolean,
    default: false
},
reminder_time: {
    type: String,
    validate: {
        validator: function (value) {
            return this.reminder_enabled ? /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value) : true;
        },
        message: 'Reminder time must be a valid time string in HH:mm format'
    }
},
created_at: {
    type: Date,
    default: Date.now
},
updated_at: {
    type: Date,
    default: Date.now
}
});
