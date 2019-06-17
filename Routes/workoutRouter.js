const express = require('express')

const workoutRouter = express.Router()
const{ Workout } = require('../models');
// workout routes

workoutRouter.get('/' , async (req, res) => {
    const workOuts = await Workout.findAll()
    res.json({
        workOuts: workOuts
    })
})

// GET one workout
workoutRouter.get('/:id', async (req, res) =>{
    const oneWorkOut = await Workout.findOne({
        where:{
            id: req.params.id
        },
    })
    res.json({
        workOuts
    })
})