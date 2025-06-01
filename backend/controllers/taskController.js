const mongoose = require('mongoose');
const Task = require('../models/Task');

// Create a task
exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};

// Get all tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};

// Get tasks by elderly ID
exports.getTasksByElderly = async (req, res) => {
  try {
    const { elderlyId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(elderlyId)) {
      return res.status(400).json({ error: 'Invalid elderly ID format' });
    }

    const tasks = await Task.find({ assignedTo: elderlyId });

    if (!tasks || tasks.length === 0) {
      return res.status(404).json({ error: 'No tasks found for this elderly user' });
    }

    res.status(200).json(tasks);
  } catch (err) {
    console.error('❌ Error fetching tasks by elderly ID:', err);
    res.status(500).json({ error: 'Failed to fetch tasks for elderly' });
  }
};
