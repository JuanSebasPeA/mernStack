const express = require("express");
//importing controllers
const {
  getTasks,
  getTaskById,
  updateTaskById,
  createTask,
  deleteTaskById,
} = require("../controllers/tasks.controllers.js");

//creating a router
const router = express.Router();

//router to get all tasks
router.get("/tasks", getTasks);

//router to get a task by id
router.get("/tasks/:id", getTaskById);

//router to update a task by id
router.put("/tasks/:id", updateTaskById);

//router to create a task
router.post("/tasks", createTask);

//router to delete a task by id
router.delete("/tasks/:id", deleteTaskById);

//exporting the router
module.exports = router;
