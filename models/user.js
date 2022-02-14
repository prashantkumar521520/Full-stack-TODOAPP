import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  // go ahead and fill them
  name:{
    type:String
  },
  email:{
    type:String,
    unique:true
  },
  password:{
    type:String,
    minlength:5
  },
  Date:{
    type:Date,
    default:Date.now()
}
});

// module.exports = mongoose.model("UserModel", UserSchema);
// const User = mongoose.model("UserModel", UserSchema);
// export default User;
const User = mongoose.models.UserModel || mongoose.model('UserModel', UserSchema);
export default User;