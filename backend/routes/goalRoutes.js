const express = require("express");

const router = express.Router();

const { getGoals, createGoal } = require("../controllers/goalController");

router.get("/:userId", getGoals);
router.post("/creategoal", createGoal);

module.exports = router;
