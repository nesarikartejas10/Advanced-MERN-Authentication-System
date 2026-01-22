import express from "express";
import userRoute from "./modules/user/user.routes.js";

const app = express();
app.use(express.json());

app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
  res.send("welcome in node js");
});

export default app;
