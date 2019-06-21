const express = require("express");

const workoutRouter = express.Router();
const { Workout, Category } = require("../models");

workoutRouter.get("/", async (req, res) => {
  const workOuts = await Category.findAll();
  res.json({
    workOuts: workOuts
  });
});

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

workoutRouter.get("/category/:id", async (req, res) => {
  const oneWorkout = await Workout.findAll({
    where: {
      categoryId: req.params.id,
      regimen: false
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

workoutRouter.post("/category/:id/workouts", async (req, res) => {
  const category = await Category.findByPk(req.params.id);
  const newWorkOut = await Workout.create(req.body);
  await newWorkOut.setCategory(category);
  res.json({
    newWorkOut
  });
});

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

workoutRouter.get('/regimen/:boolean', async(req, res)=>{
  const result = await Workout.findAll({
    where:{
      regimen: req.params.boolean
    }
  })
  res.json({
    result
  }
  )
})

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
