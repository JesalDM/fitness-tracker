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

    //Add new exercises to a new workout plan.   


};
