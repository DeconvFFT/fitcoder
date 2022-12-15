// In src/database/Workout.js
const DB = require("./db.json");

// save to database
const {saveToDB} = require("./db");

const getAllWorkouts = () =>{
    return DB.workouts;
};

const createNewWorkout = (newWorkout) =>{
    const isAlreadyAdded = Db.workouts.findIndex((workout)=> workout.name === newWorkout.name)> -1;
    if (isAlreadyAdded){
        return ;
    }
    DB.workouts.push(newWorkout);
    saveToDB(DB);
    return newWorkout;
};
module.exports = {
    getAllWorkouts,
    createNewWorkout
};