const Goal = require("../models/goals");

const getGoals = async (req, res) => {
  try {
    const { userId } = req.params;

    const goals = await Goal.findById(userId);
    res.status(200).json(goals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createGoal = async (req, res) => {
  try {
    const {
      userId,
      title,
      description,
      minTimeline,
      maxTimeline,
      userTimeline,
      tasks,
    } = req.body;
    if (!userId)
      return res.json({
        message: "UserId is Required",
      });

    const newGoal = new Goal({
      user_id: userId,
      title,
      description,
      min_timeline: minTimeline,
      max_timeline: maxTimeline,
      user_timeline: userTimeline,
      tasks,
    });

    const savedGoal = await newGoal.save();
    res.status(201).json(savedGoal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getGoals,
  createGoal,
};
