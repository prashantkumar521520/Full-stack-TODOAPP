import DbConnect from "../../DbConnect";
import Task from "../../../models/Task";

DbConnect();

export default async function handler(req, res) {
  if (req.method === "PUT") {
    console.log("in update task");
    try {
      const response = await fetch("http://localhost:3000/api/auth/getuser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": req.headers["auth-token"],
        },
      });

      const userData = await response.json();
      const task = await Task.findOne({
        _id: req.query["todoId"],
        user: userData._id,
      });

      if (!task) {
        return res.status(404).json({ message: "page not found" });
      }

      const updatedTask = await task.updateOne({
        task: req.body.task,
        isCompleted: req.body.isCompleted,
      });

      return res
        .status(200)
        .json({ updatedTask, message: "task updated successfully" });
    } catch (error) {
      return res.status(500).json({ message: "internal server error" });
    }
  } else if (req.method === "DELETE") {
    console.log("in delete task");
    try {
      const response = await fetch("http://localhost:3000/api/auth/getuser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": req.headers["auth-token"],
        },
      });

      const userData = await response.json();
      console.log("deleting");
      const task = await Task.deleteOne({
        _id: req.query["todoId"],
        user: userData._id,
      });

      if (task.deletedCount === 0) {
        return res.status(404).json({ message: "page not found" });
      }

      return res
        .status(200)
        .json({ task, message: "task deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error, message: "internal server error" });
    }
  }
}
