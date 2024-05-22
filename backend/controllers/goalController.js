const goalmodel = require("../models/goals");
const { ObjectId } = require("mongodb");
// createGoals
// deleteGoals
// updateGoals
// getAllGoals

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

    const goals = await goalmodel.find({});
  } catch (error) {}
};
