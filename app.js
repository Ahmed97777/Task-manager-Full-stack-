const express = require("express");
const app = express();

const tasksRouter = require("./routes/tasksRoute");
const port = 3000;

// middleware for json
app.use(express.json());

// home page route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to home page ❤️");
});

// tasks api routes
app.use("/api/v1/tasks", tasksRouter);

// handling incorrect routes
app.use("*", (req, res) => {
  res.status(404).send("Resource page not found 😥");
});

app.listen(port, () => {
  console.log("Server is up and running");
});
