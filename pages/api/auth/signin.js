import DbConnect from "../../DbConnect";
import User from "../../../models/User";
var jwt = require("jsonwebtoken");

DbConnect();
const jwt_secret = "HElloPrashatWelcome#@";
export default async function handler(req, res) {
  try {
    const { email, password } = req.body;
    let userData = await User.findOne({ email });
    if (!userData) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    // console.log(userData);
    if (userData.password === password.toString()) {
      const data = {
        user: {
          id: userData._id,
        },
      };
      const jwttoken = jwt.sign(data, jwt_secret);
      // console.log(jwttoken);

      return res
        .status(200)
        .json({ jwttoken: jwttoken, message: "user successfully loogedin" });
    }
    return res.status(400).json({ error: "Invalid credentials" });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
