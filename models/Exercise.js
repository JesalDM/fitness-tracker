const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: String,
    name: {
        type: String,
        required: [true, 'Exercise name is required']
    },
    duration: {
        type: Number,
        required: [true, 'Duration of the exercise is required']
    },
    weight: {
        type: Number,
        required: [true, 'Weight is required']
    },
    reps: Number,
    sets: Number
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
