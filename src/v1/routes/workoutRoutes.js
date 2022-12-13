const express = require('express');
const router = express.Router();

// use workoutController
const workoutController = require("../../controllers/workoutController")

router.get("/",workoutController.getAllWorkouts);

// get an existing workout
router.get("/:workoutId",workoutController.getOneWorkout);

// creates a new workout
router.post("/",workoutController.createNewWorkout);

// uppdates a particulart workout
router.patch(":/workoutId",workoutController.updateOneWorkout);

// deletes a particular workout
router.delete(":/workoutId",workoutController.deleteOneWorkout);

module.exports = router;