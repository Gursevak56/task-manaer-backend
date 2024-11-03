// routes/taskRoutes.js
const express = require('express');
const { createTask, getTasks, updateTask, deleteTask, getTasksById } = require('../controllers/taskController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', auth, createTask);
router.get('/', auth, getTasks);
router.put('/:id', auth, updateTask);
router.delete('/:id', auth, deleteTask);
router.get('/:id',auth,getTasksById)

module.exports = router;
