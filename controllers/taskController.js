const Task = require("../models/Task");

/* ================= GET TASKS ================= */

const getTasks = async (req, res) => {

  try {

    const tasks = await Task.find({
      user: req.user.id,
    });

    res.json(tasks);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};

/* ================= CREATE TASK ================= */

const createTask = async (req, res) => {

  try {

    const {
      title,
      startTime,
      endTime,
      notes,
    } = req.body;

    const task = await Task.create({

      title,
      startTime,
      endTime,
      notes,

      completed: false,

      user: req.user.id,

    });

    res.status(201).json(task);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};

/* ================= TOGGLE TASK ================= */

const toggleTask = async (req, res) => {

  try {

    const task =
      await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    task.completed =
      !task.completed;

    await task.save();

    res.json(task);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};

/* ================= DELETE TASK ================= */

const deleteTask = async (req, res) => {

  try {

    const task =
      await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    await task.deleteOne();

    res.json({
      message: "Task deleted",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};

/* ================= UPDATE TASK ================= */

const updateTask = async (req, res) => {

  try {

    const {
      title,
      startTime,
      endTime,
      notes,
    } = req.body;

    const task =
      await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    task.title = title;
    task.startTime = startTime;
    task.endTime = endTime;
    task.notes = notes;

    await task.save();

    res.json(task);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};

module.exports = {

  getTasks,
  createTask,
  toggleTask,
  deleteTask,
  updateTask,

};