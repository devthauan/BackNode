const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const AnswerController = require('../controllers/AnswerController')

router.post('/respostas',AnswerController.newAnswer)
router.get('/perguntas',AnswerController.questions)
router.get('/perguntas/:id',AnswerController.listQuestion)

module.exports = router