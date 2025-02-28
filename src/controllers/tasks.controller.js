import { Task } from "../modals/tasks.model.js";
import asyncWrapper from "../middleware/async.middleware.js";
import { createCustomError } from "../error/custom.error.js";

const getAllTask = asyncWrapper(async (req, res) => {
  const task = await Task.find({});
  res.status(200).json({
    data: task,
    success: true,
    status: "Fetch all tasks successfully",
  });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({
    data: task,
    success: true,
    status: "Created tasks successfully",
  });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findById({ _id: id });
  if (!task) {
    return next(createCustomError(`Task not found in Id: ${id}`, 404));
  }
  res
    .status(200)
    .json({ data: task, success: true, status: "Fetch tasks successfully" });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndUpdate(
    { _id: id },
    { data: req.body },
    { new: true, runValidators: true }
  );
  if (!task) {
    return next(createCustomError(`Task not found in Id: ${id}`, 404));
  }
  res.status(200).json({
    data: task,
    success: true,
    status: "Updated tasks successfully",
  });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndDelete({ _id: id });
  if (!task) {
    return next(createCustomError(`Task not found in Id: ${id}`, 404));
  }
  res.status(200).json({
    task: null,
    success: true,
    status: "Deleted tasks successfully",
  });
});

const deleteAllTask = asyncWrapper(async (req, res) => {
  const task = await Task.deleteMany();
  if (!task) {
    return res.status(404).json({ msg: "Task not found" });
  }
  res.status(200).json({
    task: null,
    success: true,
    status: "Deleted all tasks successfully",
  });
});

export {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  deleteAllTask,
};
