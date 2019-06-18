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
      title: req.params.category
    }
  });
  res.json({
    workOuts: workOuts
  });
});

//GET workouts based on category
workoutRouter.get("/category/:id/workouts", async (req, res) => {
  const oneWorkOut = await Workout.findAll({
    where: {
      category_id: req.params.id
    }
  });
  res.json({
    oneWorkOut
  });
});

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
workoutRouter.put("/category/:category_id/workouts/:id", async (req, res) => {
  const result = await Workout.update(req.body, {
    where: {
      id: req.params.id,
      category_id: req.params.category_id
    }
  });
  res.json({ result });
});

// DELETE one workout from specific category
workoutRouter.delete(
  "/category/:category_id/workouts/:id",
  async (req, res) => {
    await Workout.destroy({
      where: {
        id: req.params.id,
        instructor_id: req.params.category_id
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
