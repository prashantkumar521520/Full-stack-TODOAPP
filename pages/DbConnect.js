import mongoose from "mongoose";
const mongodb_uri =
  "mongodb+srv://ps525120:ps521520@cluster0.h2vbn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connection = {};

async function DbConnect() {

  if (connection.isConnected) {
    // console.log("mongo connected");
    return;
  }
  // const db = await mongoose.connect(mongodb_uri,()=>{console.log("connected")})
  const db = await mongoose.connect(mongodb_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  connection.isConnected = db.connections[0].readyState;
  // console.log(connection.isConnected);
  // console.log("connected to mongo");
}

// async function DbConnect() {
//     // const db = await mongoose.connect(mongodb_uri,()=>{console.log("connected")})
//     await mongoose.connect(mongodb_uri);
//     console.log("connected to mongo");
//   }
export default DbConnect;
