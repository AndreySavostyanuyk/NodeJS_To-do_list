const express = require('express');
const router = express.Router();

const {
  allTasks,
  createTasks,
  editTasks,
  deleteTasks,
  deleteAllTasks
} = require('../controllers/task.controller');

router.get('/allTasks', allTasks);
router.post('/createTasks', createTasks);
router.patch('/editTasks', editTasks);
router.delete('/deleteTasks', deleteTasks);
router.delete('/deleteAllTasks', deleteAllTasks);

module.exports = router;