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
        oneWorkOut
    })
})

// POST (create) one workout
workoutRouter.post('/', async (req, res)=>{
    const createWorkOut = await Workout.create(req.body)
    res.json({
        createWorkOut: createWorkOut
    })
})

// PUT (edit) one workout
workoutRouter.put('/:id' , async (req, res) =>{
   const result = await Workout.update(req.body ,{
       where:{
           id: req.params.id
       }
   }) 
   res.json({result})
}) 

// DELETE one workout
workoutRouter.delete('/:id', async(req, res) =>{
    const deleteWorkOut = await Workout.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json({
        message: "This workout has been deleted, please add another..."
    })
});

module.exports = {
    workoutRouter
};
