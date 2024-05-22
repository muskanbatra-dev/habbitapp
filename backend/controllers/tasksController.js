// createTasks
// deleteTasks
// updateTasks
// getAllTasks

const createTasks = async (req, res) => {
  try {
    const {
      goalId,
      title,
      description,
      quantity,
      frequency,
      frequency_type,
      remainder,
    } = req.body;
    if (goalId) return res.json({ message: "GoalId is Required" });
    if (title) return res.json({ message: "Title is Required" });
    if (description) return res.json({ message: "Description is Required" });
    if (quantity) return res.json({ message: "Quantity is Required" });
    if (frequency) return res.json({ message: "Frequency is Required" });
    if (frequency_type)
      return res.json({ message: "Frequency Type is Required" });
    if (remainder) return res.json({ message: "Remainder is Required" });

    await taskModel.create(req.body);
    return res.status(200).json({
      message: "Task Created Successfully",
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const goalId = req.params;
    const { page, limit } = req.query;
    if (!goalId) return res.json({ message: "GoalId is Required" });

    const tasks = await taskModel
      .find({ goalId: ObjectId(goalId) })
      .skip(page * limit)
      .limit(limit);
    const total = await taskModel.countDocuments({ goalId: ObjectId(goalId) });
    return res.status(200).json({
      tasks,
      total,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

module.exports = {
  createTasks,
  getAllTasks,
};
