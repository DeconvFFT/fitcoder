// In src/services/workoutService.js
const Workout = require("../database/Workout")
//get all workouts
const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
};

// get a particular workout
const getOneWorkout = () => {
    return;
};

//create a new workout
const createNewWorkout = () => {
    return;
};

//update a particular workout
const updateOneWorkout = () => {
    return;
};

// delete a particular workout
const deleteOneWorkout = () => {
    return;
};

module.exports = {
getAllWorkouts,
getOneWorkout,
createNewWorkout,
updateOneWorkout,
deleteOneWorkout
};