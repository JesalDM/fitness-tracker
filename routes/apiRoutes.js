const mongoose = require("mongoose");
const db = require("../models");

module.exports = function(app) {

    //GET API to fetch the last workout
    app.get("/api/workouts/", (req, res)=>{
        const id = req.params.id;
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
            })
            .catch(err => {
            res.json(err);
            });
    });

    //Add exercises to the most recent workout plan.
    app.put("/api/workouts/:id", (req, res)=>{
        const id = req.params.id;
        const ObjectId = mongoose.Types.ObjectId;
        const newExercise = req.body;
        db.Workout.findOneAndUpdate({_id: ObjectId(id)}, { $push: { exercises: newExercise } }, { new: true})
        .then(dbWorkout => {
            console.log("success!!! -> ", dbWorkout);
            res.json(dbWorkout);
            })
            .catch(err => {
                console.log("Error ", err);
            res.json(err);
            });
    });

    //Add new exercises to a new workout plan.   


};
