// In src/database/Workout.js
const DB = require("./db.json");

// save to database
const {saveToDB} = require("./utils");

// get all workouts
const getAllWorkouts = () =>{
    return DB.workouts;
};

// get one workout
const getOneWorkout = (workoutId) =>{
    const workout = DB.workouts.find((workout) => workout.id === workoutId);
    if (!workout){
        return;
    }
    return workout;
};

// create a new workout
const createNewWorkout = (newWorkout) =>{
    const isAlreadyAdded = DB.workouts.findIndex((workout)=> workout.name === newWorkout.name)> -1;
    if (isAlreadyAdded){
        return ;
    }
    DB.workouts.push(newWorkout);
    saveToDB(DB);
    return newWorkout;
};

// update one workout
const updateOneWorkout = (workoutId, changes) => {
    const indexForUpdate = DB.workouts.findIndex(
        (workout) => workout.id === workoutId);
    if(indexForUpdate === -1){
        return;
    }
    const updatedWorkout = {
        ...DB.workouts[indexForUpdate],
        ...changes, 
        updatedAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
    };
    DB.workouts[indexForUpdate] = updatedWorkout;
    saveToDB(DB);
    return updatedWorkout;
};

// delete one workout
const deleteOneWorkout = (workoutId) => {
    const indexForDelete = DB.workouts.findIndex(
        (workout) => workout.id === workoutId
    );
    if(indexForDelete === -1){
        return;
    }
    DB.workouts.splice(indexForDelete, 1);
    saveToDB(DB);
};

module.exports = {
    getAllWorkouts,
    createNewWorkout,
    getOneWorkout,
    updateOneWorkout,
    deleteOneWorkout
};