const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const app = require("./app");
const errorHandler = require("./middleware/errorHandler");
const port = process.env.PORT || 5000;

// Mongoose Connect
mongoose.connect(process.env.DB_URI).then(() => {
  console.log("Database connected".yellow.bold);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`.red.bold);
});

app.use(errorHandler);