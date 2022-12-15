// In src/controllers/workoutController.js

// add service's methods
const workoutService = require("../services/workoutService");

// express validator
const {body, validationResult} = require("express-validator");
// get all workouts
const getAllWorkouts = (req, res) =>{
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({status: "OK", data: allWorkouts});
}

// get a particular workout
const getOneWorkout = (req, res) =>{
    const oneWorkout = workoutService.getOneWorkout();
    res.send("Get existing workout");
};

// create a new workout
const createNewWorkout = (req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {body} = req;
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    }
    const createdWorkout = workoutService.createNewWorkout(newWorkout);

    res.status(200).send({status: "OK", data: createdWorkout});
};

// update a workout
const updateOneWorkout = (req, res) =>{
    const updatedWorkout = workoutService.updateOneWorkout();
    res.send("Update an existing workout");
};

// delete a workout
const deleteOneWorkout = (req, res) =>{
    workoutService.deleteOneWorkout();
    res.send("Delete an existing workout");
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};

