// In src/controllers/workoutController.js

// get all workouts
const getAllWorkouts = (req, res) =>{
    res.send("Get all workouts");
}

// get a particular workout
const getOneWorkout = (req, res) =>{
    res.send("Get existing workout");
};

// create a new workout
const createNewWorkout = (req, res) =>{
    res.send("Create a new workout");
};

// update a workout
const updateOneWorkout = (req, res) =>{
    res.send("Update an existing workout");
};

// delete a workout
const deleteOneWorkout = (req, res) =>{
    res.send("Delete an existing workout");
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};

