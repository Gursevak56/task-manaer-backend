// controllers/taskController.js
const Task = require('../models/Task');

exports.createTask = async (req, res) => {
    try {
        console.log(req.user)
        const task = await Task.create({ ...req.body, user: req.user.userId });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.userId });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateTask = async (req, res) => {
        const task = await Task.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
        console.log(task)
        res.json(task);
    
};

exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getTasksById = async (req,res) =>{
    try {
       const task =  await Task.findById(req.params.id); 
       res.json(task)
    } catch (error) {
        
    }
}
