const Task = require('../model/schema');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json(error);
  }
};

const createTask = async (req, res) => {
  const { name, completed } = req.body;
  try {
    const newTask = new Task({
      name: name,
      completed: completed,
    });

    await newTask.save();
    // res.json({newTask});
    res.json(newTask);
  } catch (error) {
    res.status(500).json(error);
    //res.status(500).json(error.errors.name.message);
  }
};

const getSingleTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ message: `No task with ID : ${taskID} ` });
    }

    res.status(200).json({ task: task });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true, // show the updated data
      runValidators: true, //run the schema validator
    });
    if (!task) {
      return res.status(404).json({ message: `No task with ID : ${taskID} ` });
    }

    res.status(200).json({ UpdatedTask: task, message: 'Task is Updated' });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ message: `No task with ID : ${taskID} ` });
    }

    res.status(200).json({ DeletedTask: task, message: 'task is deleted' });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
