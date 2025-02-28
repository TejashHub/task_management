import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required."],
      trim: true,
      maxlength: [20, "name can not more then be 20 character"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Task = mongoose.model("Task", TaskSchema);
