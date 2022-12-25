const express = require('express');
const router = express.Router();

// use workoutController
const workoutController = require("../../controllers/workoutController")
const {body, check} = require("express-validator");

router.get("/",workoutController.getAllWorkouts);

// get an existing workout
router.get("/:workoutId",workoutController.getOneWorkout);

// creates a new workout
router.post("/",
[
    check("name", "Name is required").notEmpty(),
    check("mode", "Mode is required").notEmpty(),
    check("equipment", "Equipment is required").notEmpty(),
    check("exercises", "Exercises are required").notEmpty(),
    check("trainerTips", "Trainer tips are required").notEmpty(),
],
workoutController.createNewWorkout);

// uppdates a particulart workout
router.patch(":/workoutId",workoutController.updateOneWorkout);

// deletes a particular workout
router.delete(":/workoutId",workoutController.deleteOneWorkout);

module.exports = router;