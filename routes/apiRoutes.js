const mongoose = require("mongoose");
const db = require("../models");

module.exports = function(app) {

    //GET API to fetch the last workout
    app.get("/api/workouts/", (req, res)=>{
        const id = req.params.id;
        db.Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {$sum : "$exercises.duration"}
                }
            },
        ]
        )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    //PUT API that adds exercises to the most recent workout plan.
    app.put("/api/workouts/:id", (req, res)=>{
        const id = req.params.id;
        const ObjectId = mongoose.Types.ObjectId;
        const newExercise = req.body;
        db.Workout.findOneAndUpdate({_id: ObjectId(id)}, { $push: { exercises: newExercise } }, { new: true})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(500).json(err);
        });
    });

    //POST API that creates a new workout  
    app.post("/api/workouts/", (req, res)=>{
        const workout = {};
        workout.exercises = [];
        db.Workout.create(workout)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(500).json(err);
        });
    });

    //GET API that calculates total duration of each workout from the past 7 days on on stats page
    app.get("/api/workouts/range", (req, res)=>{
        db.Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {$sum : "$exercises.duration"}
                }
            },
        ])
        .sort({_id:-1})
        .limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(500).json(err);
        });
    });

};
