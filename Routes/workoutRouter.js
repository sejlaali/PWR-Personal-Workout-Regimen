const express = require("express");

const workoutRouter = express.Router();
const { Workout, Category } = require("../models");
// workout routes

//get all categories
workoutRouter.get("/", async (req, res) => {
  const workOuts = await Category.findAll();
  res.json({
    workOuts: workOuts
  });
});

// GET one category
workoutRouter.get("/:category", async (req, res) => {
  const workOuts = await Category.findOne({
    where: {
      id: req.params.category
    }
  });
  res.json({
    workOuts
  });
});

//GET workouts based on category
workoutRouter.get("/category/:id", async (req, res) => {
  const oneWorkout = await Workout.findAll({
    where: {
      categoryId: req.params.id
    }
  });
  res.json({
    oneWorkout
  });
});

workoutRouter.get('/category/:categoryId/workouts/:id', async (req, res) => {
  const oneworkout = await Workout.findOne({
    where: {
      id: req.params.id,
      categoryId: req.params.categoryId
      
    }
  })
  res.json({oneworkout})
})

// POST (create) one workout based on category
workoutRouter.post("/category/:id/workouts", async (req, res) => {
  const category = await Category.findByPk(req.params.id);
  const newWorkOut = await Workout.create(req.body);
  await newWorkOut.setCategory(category);
  res.json({
    newWorkOut
  });
});

// PUT (edit) one workout in specific category
workoutRouter.put("/category/:categoryId/workouts/:id", async (req, res) => {
  const result = await Workout.update(req.body, {
    where: {
      id: req.params.id,
      categoryId: req.params.categoryId
    }
  });
  res.json({ result });
});

workoutRouter.put("/regimen/:id", async (req, res) => {
  const result = await Workout.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  res.json({ result });
});

workoutRouter.get('/regimen/all', async(req, res)=>{
  const result = await Workout.findAll({
    where:{
      regimen: true
    }
  })
  res.json({
    result
  }
  )
})
// DELETE one workout from specific category
workoutRouter.delete(
  "/category/:categoryId/workouts/:id",
  async (req, res) => {
    await Workout.destroy({
      where: {
        id: req.params.id,
        categoryId: req.params.categoryId
      }
    });
    res.json({
      message: "This workout has been deleted, please add another..."
    });
  }
);

module.exports = {
  workoutRouter
};
