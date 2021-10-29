const express = require("express");
const connectDB = require("./database");
const app = express();
const eventRoutes = require("./api/routes");

app.use(express.json());
app.use("/api/events", eventRoutes);
connectDB();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
