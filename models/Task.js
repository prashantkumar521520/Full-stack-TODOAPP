import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  task:{
    type:String,
    maxlength:40,
    required:true
  },
  isCompleted:{
      type:Boolean,
      default:false
  },
  user:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'UserModel'
  },
  Date:{
      type:Date,
      default:Date.now()
  }
});

//module.exports = mongoose.model("TaskModel", TaskSchema);
//export default User;

const Task = mongoose.models.TaskModel || mongoose.model('TaskModel', TaskSchema);
export default Task;
