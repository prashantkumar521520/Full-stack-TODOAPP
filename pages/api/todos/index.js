import DbConnect from "../../DbConnect";
import Task from "../../../models/Task";

DbConnect();

export default async function handler(req, res) {
  try {
    const response = await fetch("http://localhost:3000/api/auth/getuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": req.headers["auth-token"],
      },
    });
    const userData = await response.json();
    const tasks = await Task.find({
      user:userData.user._id,
    });

    return res.status(200).json({ tasks, message: "getting all tasks" });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
}
