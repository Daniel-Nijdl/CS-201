/*
  post '/' - createTask => adds a new task to the list
  get '/' - getTasks => returns all tasks
  delete '/:id' - deleteTask => removes a task
  put '/:id' - editTask => updates a task
  delete '/' - clearTasks => removes all tasks
  get '/:id' - getTask => returns 1 task
*/

const express = require("express");
const router = express.Router();

const {
  getTask,
  getTasks,
  deleteTask,
  clearTasks,
  editTask,
  createTask,
} = require("../controllers/tasksCon");

router.route("/").get(getTasks).post(createTask).delete(clearTasks);

router.route("/:id").get(getTask).delete(deleteTask).put(editTask);

module.exports = router;
