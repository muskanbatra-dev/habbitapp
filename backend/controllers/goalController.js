const goalmodel = require("../models/goals");
const { ObjectId } = require("mongodb");
const logsmodel = require("../models/logs");

const GetGoals = async (req, res) => {
  try {
    const UserId = req.parms;
    if (!UserId)
      return res.json({
        message: "UserId is Required",
      });

    const Goals = await goalmodel
      .find({
        user: ObjectId(UserId),
      })
      .populate("user", "name");

    return res.status(200).json({
      Goals,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

const CreateGoal = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId)
      return res.json({
        message: "UserId is Required",
      });

    const goals = await goalmodel.find({ user: ObjectId(userId) });
    if (goals.length > 2)
      return res.json({ message: "You can only have 2 goals at a time" });
    const goal = await goalmodel.create(req.body);

    await logsmodel.create({
      user: ObjectId(userId),
      model: "GOAL",
      action: "CREATE",
      data: goal,
    });
    return res.status(200).json({
      message: "Goal Created Successfully",
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

module.exports = {
  GetGoals,
  CreateGoal,
};
