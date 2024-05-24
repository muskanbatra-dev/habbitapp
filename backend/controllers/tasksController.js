const Task = require("../models/tasks");
const getAllTasks = async (req, res) => {
  try {
    const { goalId } = req.params;

    const tasks = await Task.find({ goal_Id: goalId });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllTasks,
};
