const express = require("express");

const router = express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const {

  getTasks,
  createTask,
  toggleTask,
  deleteTask,
  updateTask,

} = require("../controllers/taskController");

/* GET TASKS */
router.get(
  "/",
  authMiddleware,
  getTasks
);

/* CREATE TASK */
router.post(
  "/",
  authMiddleware,
  createTask
);

/* TOGGLE TASK */
router.put(
  "/:id",
  authMiddleware,
  toggleTask
);

/* DELETE TASK */
router.delete(
  "/:id",
  authMiddleware,
  deleteTask
);

router.put(
  "/edit/:id",
  authMiddleware,
  updateTask
);

module.exports = router;