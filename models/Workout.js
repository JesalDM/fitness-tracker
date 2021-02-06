const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
      type:Date,
      default: Date.now()
  },
  exercises: [
    {
        type: {
            type: String
        },
        name: {
            type: String,
            required: [true, 'Exercise name is required']
        },
        duration: {
            type: Number,
            min: [1, 'Please enter a valid number greater than 0'],
            required: [true, 'Duration is required']
        },
        weight: {
            type: Number,
            min: [1, 'Please enter a valid number greater than 0'],
        },

        reps: {
            type: Number,
            min: [1, 'Please enter a valid number greater than 0'],
        },
        sets: {
            type: Number,
            min: [1, 'Please enter a valid number greater than 0'],
        },
        distance: {
            type: Number,
            min: [1, 'Please enter a valid number greater than 0'],
        }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;