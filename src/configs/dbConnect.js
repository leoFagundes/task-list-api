import mongoose from "mongoose";

async function connectDB() {
  mongoose.connect(
    `mongodb+srv://tasklist:${process.env.PASSWORD_DB_CONNECTION}@cluster0.lxf6cff.mongodb.net/tasklistDB?retryWrites=true&w=majority`
  );

  return mongoose.connection;
}

export default connectDB;
