import DbConnect from "../DbConnect";
import Task from "../../models/Task";

DbConnect();

export default async function handler(req, res) {
  console.log("in create task");
  try {
    const response = await fetch("http://localhost:3000/api/auth/getuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": req.headers["auth-token"],
      },
    });
    const userData = await response.json();
    console.log(userData);

    const task = await Task.create({
      task: req.body.task,
      user: userData._id,
    });
    console.log(task);
    return res.status(200).json({ task,message: "task created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
}
