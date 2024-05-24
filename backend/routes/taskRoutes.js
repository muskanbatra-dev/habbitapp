
const express = require('express');

const router = express.Router();

const { getAllTasks } = require('../controllers/tasksController')

router.get('/:goalId', getAllTasks)

module.exports = router