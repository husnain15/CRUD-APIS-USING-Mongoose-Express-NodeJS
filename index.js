import express from "express";
import bodyParser from "body-parser";
import UserRoutes from "./Routes/User.js";

import connectDB from "./DbConn/DbUser.js";
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/api/users", UserRoutes);


app.get("/", async (req, res) => {
  res.send({ data: "Hello World" });
});

connectDB();
const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server Start at Port no ${port}`);
});

// await mongoose.connect("mongodb://127.0.0.1:27017/UserCrudApi").then(()=>{
//   console.log("connection successful")
// }).catch((e)=>{
//   console.log("no connection")
// })
// const port = 3000 || process.env.PORT;
// app.listen(port, () => {
//   console.log(`Server Start at Port no ${port}`);
// });