/*
  post '/' - createTask => adds a new task to the list
  get '/' - getTasks => returns all tasks
  delete '/:id' - deleteTask => removes a task
  put '/:id' - editTask => updates a task
  delete '/' - clearTasks => removes all tasks
  get '/:id' - getTask => returns 1 task
*/
const Task = require("../models/Task");

const getTasks = async (req, res) => {
  //find is a query
  //queries return the thing you are look
  //This is returned to the user a json to be used with the data
  const tasks = await Task.find({});
  res.json({ method: req.method, tasks: tasks });
};
const createTask = async (req, res) => {
  //Task.create is a method that adds the template object to the DB
  //create is a METHOD not a query
  const task = await Task.create(req.body);
  //the res is just what the dev sees in the response
  res.json({ method: req.method, task: task, body: req.body });
};
const deleteTask = async (req, res) => {
  // res.json({ method: req.method, task: "deleteTask", id: req.params });
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      res.json({ msg: `no items with id : ${id}` });
    }
    res.json({ method: req.method, task: task, id: req.params });
  } catch (err) {
    res.json({ msg: `no items with id : ${id}` });
  }
};
const clearTasks = async (req, res) => {
  const tasks = await Task.deleteMany({});
  res.json({ method: req.method, tasks });
};
const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) {
      res.json({ msg: `no items with id : ${id}` });
    }
    res.json({ method: req.method, task: task, id: req.params });
  } catch (err) {
    res.json({ msg: `no items with id : ${id}` });
  }

  // res.catch((err) => console.error(err))
};

const editTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndUpdate(id, req.body, {
      //new: true => task will equal the NEW task
      new: true,
      //run validators checks the new task against the model we created
      runValidators: true,
    });

    if (!task) {
      return res.json({ msg: `no task with id : ${id}` });
    }

    res.json({
      method: req.method,
      task: task,
      id: req.params,
      body: req.body,
    });
  } catch (err) {
    res.json({ msg: err });
  }
};

module.exports = {
  getTask,
  getTasks,
  clearTasks,
  deleteTask,
  editTask,
  createTask,
};
