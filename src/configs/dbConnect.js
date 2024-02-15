import mongoose from "mongoose";

async function connectDB() {
    mongoose.connect(
        `mongodb+srv://listDB:${process.env.PASSWORD_DB_CONNECTION}@cluster0.gd55hbi.mongodb.net/listDB?retryWrites=true&w=majority`
    )

    return mongoose.connection;
}

export default connectDB;