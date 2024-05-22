const express = require('express')

const router = express.Router()

const { GetGoals, CreateGoal } = require('../controllers/goalController')

router.get('/:userId', GetGoals)
router.post('/create', CreateGoal)

module.exports = router

