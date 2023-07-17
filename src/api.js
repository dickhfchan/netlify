const express = require("express");
const serverless = require("serverless-http");

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create an instance of the Express app
const app = express();

// Create a router to handle routes
const router = express.Router();

// Define a route that responds with a JSON object when a GET request is made to the root path
router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

router.post("/form", function (req, res) {
  // res.send("Hello World!");
  console.log(req.body);

  res.send(req.body);
});

// Use the router to handle requests to the `/.netlify/functions/api` path
app.use(`/.netlify/functions/api`, router);

// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);
