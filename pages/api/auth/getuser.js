import DbConnect from "../../DbConnect";
import User from "../../../models/User";
var jwt = require("jsonwebtoken");

DbConnect();
const jwt_secret = "HElloPrashatWelcome#@";
export default async function handler(req, res) {
  // console.log(req.headers);
  try {
    console.log("in get user function");
    const authtoken = req.headers["auth-token"];
    // console.log(authtoken);
    if (authtoken) {
      const data = jwt.verify(authtoken, jwt_secret);
      // console.log(data);
      const user = await User.findOne({ _id: data.user.id });
      // console.log(user);
      return res.json(user);
    }
    return res.status(400).json({ message: "Invalid Authentication Token" });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
