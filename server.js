// server 
require("dotenv").config();
const express = require("express");
const dbConnect = require("./config/db");
const authRoute = require("./routes/auth.route")
const userRoute = require("./routes/user.route")

const app = express();
dbConnect(); // database connection....
const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
  res.send(`<h2>🚀 server is running....</h2>`);
});

app.use("/auth", authRoute);
app.use("/user", userRoute);

// server port listening....
app.listen(port, () => {
  console.log(`🚀 Server listening on localhost:${port}`);
});






