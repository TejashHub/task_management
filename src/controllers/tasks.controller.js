import { Task } from "../modals/tasks.model.js";

const getAllTask = async (req, res) => {
  try {
    const task = await Task.find({});
    res.status(200).json({ task, status: "Fetch all tasks successfully" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task, status: "Created tasks successfully" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById({ _id: id });
    if (!task) {
      return res.status(404).json({ msg: `Task not found in Id: ${id}` });
    }
    res.status(200).json({ task, status: "Fetch tasks successfully" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndUpdate(
      { _id: id },
      { data: req.body },
      { new: true, runValidators: true }
    );
    if (!task) {
      return res.status(404).json({ msg: `Task not found in Id: ${id}` });
    }
    res.status(200).json({ task, status: "Updated tasks successfully" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete({ _id: id });
    if (!task) {
      return res.status(404).json({ msg: `Task not found in Id: ${id}` });
    }
    res.status(200).json({ task: null, status: "Deleted tasks successfully" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteAllTask = async (req, res) => {
  try {
    const task = await Task.deleteMany();
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    res
      .status(200)
      .json({ task: null, status: "Deleted all tasks successfully" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  deleteAllTask,
};
