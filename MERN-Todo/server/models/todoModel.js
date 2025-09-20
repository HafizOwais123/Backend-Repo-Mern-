



import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    task: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Make sure the collection name is correct. 
// Usually, model name "Todo" will create "todos" collection in MongoDB.
const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
