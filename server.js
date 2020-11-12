const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")

require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets if in production (on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes (both API and view)
app.use(routes);


// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || process.env.DB_LOCAL
);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
