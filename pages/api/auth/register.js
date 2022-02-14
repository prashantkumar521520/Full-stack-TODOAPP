import DbConnect from "../../DbConnect";
import User from "../../../models/User";
var jwt = require("jsonwebtoken");

DbConnect();
const jwt_secret = "HElloPrashatWelcome#@";
export default async function handler(req, res) {
  try {
    console.log("entered");
    let userData = await User.findOne({ email: req.body.email });
    
    if (userData) {
      return res
        .status(400)
        .json({ error: "User with this email is already exist" });
    }

    const user = await User.create(req.body);
    console.log(user);

    console.log(req.body)
    
    const data = {
      user: {
        id: user._id,
      },
    };
    const jwttoken = jwt.sign(data, jwt_secret);
    console.log(jwttoken);

    return res
      .status(200)
      .json({ jwttoken: jwttoken, message: "user successfully loogedin" });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
