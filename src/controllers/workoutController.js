// In src/controllers/workoutController.js

// add service's methods
const workoutService = require("../services/workoutService");

// express validator
const {check, validationResult} = require("express-validator");
// get all workouts
const getAllWorkouts = (req, res) =>{
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({status: "OK", data: allWorkouts});
}

// get a particular workout
const getOneWorkout = (req, res) =>{
    const {
        params: {workoutId},
    } = req;
    if (!workoutId){
        return;
    }
    const workout = workoutService.getOneWorkout(workoutId);
    res.send({status: "OK", data: workout});
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
    const {
        body, 
        params : {workoutId}
    } = req;
    if(!workoutId){
        return;
    }
    const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
    res.send({status: "OK", data:updatedWorkout});
};

// delete a workout
const deleteOneWorkout = (req, res) =>{
    const {
        params: {workoutId}
    } = req;
    if(!workoutId){
        return;
    }
    workoutService.deleteOneWorkout();
    res.status(204).send({status: 'OK'});
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};

