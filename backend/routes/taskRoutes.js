
const express = require('express');

const router = express.Router();

const { getAllTasks, createTasks } = require('../controllers/tasksController')

router.get('/:goalId', getAllTasks)
router.post('/create', createTasks)

module.exports = router