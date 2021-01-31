const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
      type:Date 
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
            min: 1,
            required: [true, 'Duration is required']
        },
        weight: {
            type: Number,
            min: 1
        },

        reps: {
            type: Number,
            min: 1
        },
        sets: {
            type: Number,
            min: 1
        },
        distance: {
            type: Number,
            min: 1
        }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;