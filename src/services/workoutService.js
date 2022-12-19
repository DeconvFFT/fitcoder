// In src/services/workoutService.js
const {v4:uuid} = require("uuid");
const Workout = require("../database/Workout")
//get all workouts
const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
};

// get a particular workout
const getOneWorkout = (workoutId) => {
    const workout = Workout.getOneWorkout(workoutId);
    return workout;
};

//create a new workout
const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id:uuid(),
        createdAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
        updatedAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
    };
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
};

//update a particular workout
const updateOneWorkout = (workoutId, changes) => {
    const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
    return updatedWorkout;
};

// delete a particular workout
const deleteOneWorkout = (workoutId) => {
    workout.deleteOneWorkout(workoutId);
};

module.exports = {
getAllWorkouts,
getOneWorkout,
createNewWorkout,
updateOneWorkout,
deleteOneWorkout
};