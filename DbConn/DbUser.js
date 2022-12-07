import mongoose from "mongoose";

const connectDB = async () => {
 try {
  await mongoose
  .connect("mongodb://127.0.0.1:27017/UserCrudApi")
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log("no connection");
  });
 } catch (error) {
  console.log(error)
 }
};

export default connectDB;
