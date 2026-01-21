import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("welcome in node js");
});

export default app;
